'use strict';  
modules.define('c-task-timesheet-tname-openModalWindow', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('dblclick', this._onClick);
                    var elem = this.domElem, here = this;
                    initCss(elem, here);
                }
            }
        },
    
        _onClick: function() {
            var value = event.target.innerHTML;
            var id = event.target.parentElement.dataset.id;
            ReloadBodyTTSModalWindow(value, id);
        }
    }));
});