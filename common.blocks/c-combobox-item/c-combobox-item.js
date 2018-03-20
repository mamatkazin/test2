'use strict'
modules.define('c-combobox-item', ['i-bem-dom'], function(provide, BEMDOM) {
	provide(BEMDOM.declBlock(this.name, {
		onSetMod : {
			'js' : {
				'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    if (this.params.width != null) {
                        this.domElem.css('width', this.params.width);
                    }
				}
			}
		},
        _onClick: function() {
        	//event.target.closest('.b-flex-row').style.cssText += 'pointer-events: none; opacity: 0.6;';
        }
	}));
});