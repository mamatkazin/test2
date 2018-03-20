'use strict';  
modules.define('c-button-delete-task', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var elem = this.domElem, here = this;
                    initCss(elem, here);
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick: function() {
            var date = sessionStorage.D1;
            var msg = {
                action_name: "TTSTaskClose",
                task_id: this.params.id,
                date: date,
                builder: "ReloadBodyTTS", 
                selector: ".b-task-timesheet__tbody"
            };
            //console.log(msg);
            $('#place_modal_form').modal('hide');

            WSSend(msg);
        }
    }));
});