'use struct';  
modules.define('c-block__disabled-this', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var answer = JSModel.answer;
                    var jdata = JSON.parse(answer['data']); 

                    if(jdata.NeedFATypes == 1) {
                        this.domElem[0].style.cssText += 'pointer-events: none; opacity: 0.5;';
                    }
                }
            }
        }
    }));
});