'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('t-patterns__combobox', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    
                    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
                        bemDom.append($(this.domElem[0]), BEMHTML.apply({
                            block: 'b-combobox',
                            js: {
                                id: this.params.value_id,
                                name: this.params.value_name
                            },
                            content: [
                                {
                                    elem: 'id',
                                    mix: { block: 't-need-save' },
                                    tag: 'input',
                                    cls: 'margin_bottom0px',
                                    attrs: { type: 'hidden', name: this.params.name, value: this.params.value_id },
                                },
                                {
                                    tag: 'button',
                                    cls: 'btn btn-default dropdown-toggle',
                                    attrs: { type: 'button', 'data-toggle': 'dropdown', style: 'outline: none' },
                                    content: [
                                        {
                                            elem: 'input',
                                            tag: 'input',
                                            js: true,
                                            mix: { block: 'b-input' },
                                            cls: 'form-control margin_bottom0px checkInput',
                                            attrs: { id: 'input', type: 'text', value: this.params.value_name }
                                        },
                                        {
                                            elem: 'icon',
                                            tag: 'span',
                                            cls: 'glyphicon glyphicon-menu-down',
                                            attrs: { 'aria-hidden': 'true' }
                                        }
                                    ]
                                },
                                {
                                    elem: 'list',
                                    tag: 'ul',
                                    js: true,
                                    cls: 'dropdown-menu',
                                    content: (function(list, action) {
                                        var li = [];
                                        
                                        if (! $.isEmptyObject(list)) {
                                            list.map(function(item) {
                                                if (action == '') {
                                                    li.push({
                                                        elem: 'item',
                                                        js: true,
                                                        tag: 'li',
                                                        attrs: { 'data-id': item.ID },
                                                        content: item.Name
                                                    });
                                                } else {
                                                    li.push({
                                                        elem: 'item',
                                                        js: true,
                                                        mix: { block: action, js: true },
                                                        tag: 'li',
                                                        attrs: { 'data-id': item.ID },
                                                        content: item.Name
                                                    });
                                                }
                                                    
                                            });
                                            
                                        }

                                        return li;
                                    })(this.params.list, this.params.action)
                                }
                
                            ]

                        }))
                    });
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
                },


            }
        },

    }));

});