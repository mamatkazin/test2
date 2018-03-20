'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-date-field', ['i-bem-dom'], function(provide, BEMDOM) {
	provide(BEMDOM.declBlock('b-date-field', {
		onSetMod : {
			'js' : {
				'inited': function() {
                    if (this.params.width != null) {
                        this.domElem.css('width', this.params.width);
                    }
					if (this.params.marginRight != null) {
                        this.domElem.css('margin-right', this.params.marginRight);
                    }
					if (this.params.min_date != null) {
                        var min_date = this.params.min_date
                    } else {
                        var min_date = -1000
                    }
                    $(".pdate").datepicker({ minDate: min_date });
                    
                    //$(".pdate").datepicker({ minDate: -1000 });
				}
			}
		}
	}));
});
