'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-task-timesheet-tname', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var text = this.params.text;

                    if (text.length > 131) {
                        text = text.substring(0, 128) + '...';

                        this.domElem.addClass('_tooltip _tooltip-r');

                        modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
                            bemDom.append($(this.domElem[0]), BEMHTML.apply([
                                
	                             text,
	                             {
	                                 tag: 'span',
	                                 cls: 'custom help',
	                                 content: [
	                                     {
	                                         tag: 'p',
	                                         content: this.params.text,
	                                     }
	                                 ]
	                             }


                            ]))
                        });
                    } else {
                        modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
                            bemDom.append($(this.domElem[0]), BEMHTML.apply(text))
                        });
                    }
                }
            }
        }
    }));
});