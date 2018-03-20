'use strict'
modules.define('b-checkbox-task', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);

                    if (this.params.obligatory == 1) {
                        this.domElem.prop('checked', true);
                        this.domElem.attr('disabled', 'disabled');
                    } else {
                        this.domElem.prop('checked', false);
                    }

                    this.findChildElem('checkbox').setMod('state-'+this.params.value);
                    this.setMod('state-'+this.params.state);
                    
                    
                    
                    var name_elem = this.findChildElem('name').domElem
                      , name_text = name_elem[0].innerHTML
                      ;
                    

                    if (this.params.dd == '') {
                        if (name_text.length > 33) {
                            name_elem.attr('title', name_text)
                            name_text = name_text.substring(0, 35) + '...';
                            name_elem[0].innerHTML = name_text;
                        }
                    } else {
                        if (name_text.length > 28) {
                            name_elem.attr('title', name_text)
                            name_text = name_text.substring(0, 30) + '...';
                            name_elem[0].innerHTML = name_text;
                        }
                    }
                        
                    
                }
            }
        },

        _onClick : function() {
            //ProjectTaskScriptShow();
            JSModel.task_name = this.params.task_name;
            
//            if (this.params.kot_id == "3") {
//                if (this.params.state != 1) {
//                    var msg = {
//                        action_name: '',
//                        task_id: this.params.task_id.toString(),
//                        task_name: this.params.task_name,
//                        user_id: $('input[name="user_id"]').val(),
//                        selector: '#place_modal_form',
//                        builder: ''
//                    }
    
//                    ProjectTaskCloseShow(msg);
//                }
//            } else {
                var msg = {
                    action_name: 'ProjectTaskShow',
                    task_id: this.params.task_id.toString(),
                    kot_id: this.params.kot_id.toString(),
                    selector: '#place_modal_form',
                    builder: 'ProjectTaskShow'
                }
                
                WSSend(msg);
                
                ShowSnipper();
            //}
            
        },

    }));
});