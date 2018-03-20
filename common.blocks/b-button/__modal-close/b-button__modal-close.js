'use strict'
modules.define('b-button__modal-close', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    
                }
            }
        },
    
        _onClick: function() {
            $('#place_modal_form').modal('hide');
        }
    }));
});