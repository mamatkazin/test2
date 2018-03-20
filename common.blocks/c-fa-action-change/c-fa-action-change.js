'use struct';  
modules.define('c-fa-action-change', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('blur', this._onBlur);
                    this._domEvents().on('change', this._onChange);
                }
            }
        },
    
        _onBlur: function() {

            if($(this.domElem).hasClass('b-input-string')){
                SendAction(this)
            }
            
        },
        
        _onChange: function() {
            if($(this.domElem).hasClass('b-date-field__checkInput')){
                SendAction(this)
            }
        },
        
        
    }));
    
    function SendAction(elem) {
        //Надо подумать, как тут оперировать БЭМ объектами
        var act = $(elem.domElem).closest('.b-flex-row').find('.b-input-string').val()
           , date = $(elem.domElem).closest('.b-flex-row').find('.b-date-field input').val()
           , type_id = $('input[name="fa_type_id"]').val()
           ;
        
        if (act && date) {
            var msg = {
                action_name: 'ProjectFAChange',
                act: act,
                date: date,
                type_id: type_id,
                project_id: elem.params.project_id.toString(),
                fa_action_id: elem.params.fa_action_id.toString(),
                selector: '.addRowProjectFAAction',
                builder: 'ProjectFAReload'
            };


            WSSend(msg);
         }
    }

});