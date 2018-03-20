'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-input-field__l-label', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    if ($.isEmptyObject(this.params.verticalAlign)) {
                        this.domElem.css('vertical-align', this.params.verticalAlign);
                    }
                }
            }
        }
    }));
});