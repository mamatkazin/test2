'use struct';  
modules.define('c-block__disabled', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var answer = JSModel.answer;
                    var jdata = JSON.parse(answer['data']); 

                    if(jdata.NeedFATypes == 0) {
                        this.domElem[0].style.cssText += 'pointer-events: none; opacity: 0.5;';
                    }

                    this._domEvents().on('click', this._onClick);
                }
            }
        },
        _onClick: function(e) {
            var event = e;
            if(event.target.tagName == 'LI') {
                paintRowProjectFAShow(event);
            };
        }
    }));
    //разблокирует строку в ProjectFAShow
    function paintRowProjectFAShow(event) {
        var neighbor = event.target.closest('.b-combobox-field').nextElementSibling;
        event.target.closest('.b-combobox-field').nextElementSibling.style.cssText += 'pointer-events: auto; opacity: 1;';
        neighbor.nextElementSibling.style.cssText += 'pointer-events: auto; opacity: 1;';
    }
});