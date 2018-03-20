'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-input-field__integer', ['i-bem-dom'], function(provide, BEMDOM) {
	provide(BEMDOM.declBlock(this.name, {
		onSetMod : {
			'js' : {
				'inited': function() {
					this._domEvents().on('blur', this._onBlur);
				}
			}
		},
	
		_onBlur: function() {
			var a = this.domElem[0].value = this.domElem[0].value.replace(/[^0-9]/g, '');
		}
	}));
});