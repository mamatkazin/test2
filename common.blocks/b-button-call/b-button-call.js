'use strict'
modules.define('b-button-call', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    if ((this.params.action == null) || (this.params.action != 'false')) {
                        this._domEvents().on('click', this._onClick);
                    }

                    var elem = this.domElem, here = this;
                    initCss(elem, here);
                    
                }
            }
        },
    
        _onClick: function() {

            if (this.params.submit != null) {
                $('#place_modal_form').modal('hide');
            } else {
                WSSend(this.params);
                
                ShowSnipper();
            }
                
        }
    }));
});