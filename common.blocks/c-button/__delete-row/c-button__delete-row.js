'use strict';  
modules.define('c-button__delete-row', ['i-bem-dom'], function(provide, BEMDOM) {
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
    
        _onClick: function(elem) {
            this.domElem[0].closest('.b-flex-row').remove();

        }
    }));
});