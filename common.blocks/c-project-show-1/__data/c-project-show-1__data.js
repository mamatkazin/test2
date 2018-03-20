'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-project-show-1__data', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    if ($.isEmptyObject(this.params.width)) {
                        this.domElem.css('width', this.params.width + 'px');
                    }
                    // if ($.isEmptyObject(this.params.height)) {
                    //     this.domElem.css('height', this.params.height + 'px');
                    // }
                    if ($.isEmptyObject(this.params. marginTop)) {
                        this.domElem.css('margin-top', this.params.marginTop + 'px');
                    }
                    // if ($.isEmptyObject(this.params.cursor)) {
                    //     this.domElem.css('cursor', this.params.cursor);
                    // }
                    // if ($.isEmptyObject(this.params.marginLeft)) {
                    //     this.domElem.css('margin-left', this.params.marginLeft);
                    // }
                    // if ($.isEmptyObject(this.params.border)) {
                    //     this.domElem.css('border', this.params.border);
                    // }

                }
            }
        },

    }));

});