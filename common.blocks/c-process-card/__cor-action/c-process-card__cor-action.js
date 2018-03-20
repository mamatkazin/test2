'use strict';
modules.define('c-process-card__cor-action', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    if(this.params.faTypeID > 0) {
                        this.domElem[0].parentElement.style.cssText += 'position: relative';
                        this.domElem[0].style.cssText += 'color: #b50101; position: absolute; font-size: 28px; top: -6px;';
                    };
                }
            }
        },
    
        _onClick: function() {

            var msg = {
                action_name: 'ProjectFAShow',
                project_id: this.params.project_id,
                selector: "#place_modal_form",
                builder: "ProjectFAShow"
            }
            //console.log(msg);
            WSSend(msg);
        }
        
    }));
});

