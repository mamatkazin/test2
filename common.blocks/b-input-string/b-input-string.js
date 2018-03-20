'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-input-string', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    if (this.params.width != null) {
                        this.domElem.css('width', this.params.width);
                    }
                    if (this.params.height != null) {
                        this.domElem.css('height', this.params.height);
                    }
                    if (this.params.padding != null) {
                        this.domElem.css('padding', this.params.padding);
                    }
                    if (this.params.paddingTop != null) {
                        this.domElem.css('padding-top', this.params.paddingTop);
                    }
                    if (this.params.paddingRight != null) {
                        this.domElem.css('padding-right', this.params.paddingRight);
                    }
                    if (this.params.paddingBottom != null) {
                        this.domElem.css('padding-bottom', this.params.paddingBottom);
                    }
                    if (this.params.paddingLeft != null) {
                        this.domElem.css('padding-left', this.params.paddingLeft);
                    }
                    if (this.params.margin != null) {
                        this.domElem.css('margin', this.params.margin);
                    }
                    if (this.params.marginTop != null) {
                        this.domElem.css('margin-top', this.params.marginTop);
                    }
                    if (this.params.marginRight != null) {
                        this.domElem.css('margin-right', this.params.marginRight);
                    }
                    if (this.params.marginBottom != null) {
                        this.domElem.css('margin-bottom', this.params.marginBottom);
                    }
                    if (this.params.marginLeft != null) {
                        this.domElem.css('margin-left', this.params.marginLeft);
                    }
                    if (this.params.textAlign != null) {
                        this.domElem.css('text-align', this.params.textAlign);
                    }
                    if (this.params.background != null) {
                        this.domElem.css('background', this.params.background);
                    }
                    if (this.params.justifyContent != null) {
                        this.domElem.css('justify-content', this.params.justifyContent);
                    }
                    if (this.params.alignItems != null) {
                        this.domElem.css('align-items', this.params.alignItems);
                    }
                    if (this.params.border != null) {
                        this.domElem.css('border', this.params.border);
                    }
                    if (this.params.borderTop != null) {
                        this.domElem.css('border-top', this.params.borderTop);
                    }
                    if (this.params.borderRight != null) {
                        this.domElem.css('border-right', this.params.borderRight);
                    }
                    if (this.params.borderBottom != null) {
                        this.domElem.css('border-bottom', this.params.borderBottom);
                    }
                    if (this.params.borderLeft != null) {
                        this.domElem.css('border-left', this.params.borderLeft);
                    }
                    if (this.params.borderColor != null) {
                        this.domElem.css('border-color', this.params.borderColor);
                    }
                    if (this.params.fontSize != null) {
                        this.domElem.css('font-size', this.params.fontSize);
                    }
                    if (this.params.fontWeight != null) {
                        this.domElem.css('font-weight', this.params.fontWeight);
                    }
                    if (this.params.color != null) {
                        this.domElem.css('color', this.params.color);
                    }
                    if (this.params.whiteSpace != null) {
                        this.domElem.css('white-space', this.params.whiteSpace);
                    }
                }
            }
        }
    }));
});