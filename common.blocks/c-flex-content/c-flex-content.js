'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-flex-content', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    var el = this.domElem[0].innerHTML;
                    var check = parseInt(el.split('/')[1]);

                    if (check == 0) {
                        this.domElem.css('background-color', 'rgb(255, 58, 58)');//красный
                    } else if (check > 0 && check <= 50) {
                        this.domElem.css('background-color', 'rgb(253, 197, 116)');//коричневый
                    } else if (check >= 100) {
                        this.domElem.css('background-color', 'rgb(217, 253, 201)');//зеленый
                    }
                }
            }
        }
    }));
});