'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-label-field', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    if ($.isEmptyObject(this.params.width)) {
                        this.domElem.css('width', this.params.width + 'px');
                    }
                    if ($.isEmptyObject(this.params.marginTop)) {
                        this.domElem.css('margin-top', this.params.marginTop + 'px');
                    }
                    if ($.isEmptyObject(this.params.margin)) {
                        this.domElem.css('margin-left', this.params.marginLeft + 'px');
                    }
                }
            }
        }
    }));
});