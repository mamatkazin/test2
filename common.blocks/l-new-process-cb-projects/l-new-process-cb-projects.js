'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('l-new-process-cb-projects', ['i-bem-dom'], function(provide, BEMDOM) {
	provide(BEMDOM.declBlock(this.name, {
		onSetMod : {
			'js' : {
				'inited': function() {
					$(".l-new-process-cb-projects .b-combobox__text").css('color', '#999');
					
					this._domEvents().on('click', this._onClick);
				}
			}
		},
		
		_onClick: function() {
			$(".l-new-process-cb-projects .b-combobox__text").css('color', '#555');
		}
	}));
});