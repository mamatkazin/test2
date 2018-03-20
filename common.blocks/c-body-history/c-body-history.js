'use strict';
modules.define('c-body-history', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    var elem = this.domElem, here = this;
                    initCss(elem, here);
                }
            }
        },
    }));
});