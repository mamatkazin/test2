'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});modules.define('t-patterns__combobox-field', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
                        bemDom.append($(this.domElem[0]), BEMHTML.apply({
                            block: 'b-combobox-field',
                            mix: { block: this.params.mix },
                            content: [
                                {
                                    elem: this.params.lname,
                                    tag: 'label',
                                    cls: 'control-label',
                                    content: this.params.lcontent
                                },
                                {
                                    block: 't-patterns__combobox',
                                    js: { 
                                        name: this.params.name,
                                        value_id: this.params.value_id,
                                        value_name: this.params.value_name,
                                        list: this.params.list,
                                        action: this.params.action
                                    }
                                }
                            ]

                        }))
                    });
                }
            }
        }
        
    }));
});