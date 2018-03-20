'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-destination', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    var height = $(window).height();
                    var newHeight = height - 250;
                    this.domElem.css('height', newHeight + 'px');
                    this.domElem.css('overflow-y', 'auto');
                }
            }
        }
    }));

});