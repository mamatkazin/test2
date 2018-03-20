'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-input', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    if (this.params.width != null) {
                        this.domElem.css('width', this.params.width);
                    }
                    if (this.params.height != null) {
                        this.domElem.css('height', this.params.height);
                    }
                    if (this.params.marginRight != null) {
                        this.domElem.css('margin-right', this.params.marginRight);
                    }
                    if (this.params.marginLeft != null) {
                        this.domElem.css('margin-left', this.params.marginLeft );
                    }
                    if ($.isEmptyObject(this.params.textAlign)) {
                        this.domElem.css('text-align', this.params.textAlign);
                    }
                    if ($.isEmptyObject(this.params.paddingLeft)) {
                        this.domElem.css('padding-left', this.params.paddingLeft);
                    }
                    if ($.isEmptyObject(this.params.paddingRight)) {
                        this.domElem.css('padding-right', this.params.paddingRight);
                    }
                }
            }
        },
    }));
});