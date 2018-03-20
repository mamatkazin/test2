'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-flex-content__few', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    var el = this.domElem[0].innerHTML;

                    if (el == '0.00 / 0') {
                        this.domElem.css('color', '#ddd');
                    }
                }
            }
        }
    }));
});