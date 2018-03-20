'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-block__download', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    var elem = this.domElem, here = this;
                    initCss(elem, here);
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
        _onClick: function() {
            WSSend(this.params);
        }
    }));
});