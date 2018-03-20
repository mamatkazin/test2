'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-tts-save-send', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    
                    if (this.params.close == 1) {
                        this.domElem.attr('disabled', 'disabled');
                    }
                }
            }
        },
    
        _onClick: function() {
            var msg_data
              , data = []
              ;
            
            $('.l-task-timesheet td input').each(function(){
                if (this.value != this.getAttribute('data-old-val')) {
                    var item = {
                        task_id: this.getAttribute('data-id'),
                        d: this.getAttribute('data-date'),
                        h: this.value
                    };
                    
                    data.push(item);
                }
            });
            
            if (data.length > 0) {
                msg_data = JSON.stringify(data);
            } else {
                msg_data = ''
            }

            var msg = {
                action_name: this.params.action_name,
                date: this.params.date,
                selector: this.params.selector,
                data: msg_data,
                user_id: $('input[name="user_id"]').val()
            };
            
            WSSend(msg);
            
            ShowSnipper();
            
        }
    }));
});