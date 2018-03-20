'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('t-patterns__mform-panel-header', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
                        bemDom.append($(this.domElem[0]), BEMHTML.apply({
                            cls: 'panel-heading',
                            content: [
                                {
                                    tag: 'button',
                                    cls: 'close',
                                    attrs: { type: 'button', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
                                    content: 'x'
                                },
                                {
                                    tag: 'h3',
                                    cls: 'panel-title modal-title',
                                    content: this.params.title
                                }
                            ]
                        }))
                    });
                }
            }
        }
        
    }));
});