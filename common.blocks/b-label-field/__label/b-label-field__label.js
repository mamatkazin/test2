'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-label-field__l-label', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    if ($.isEmptyObject(this.params.width)) {
                        this.domElem.css('width', this.params.width+'px');
                        this.domElem.css('maxlength', this.params.maxlength);
                    }
                    this._domEvents().on('blur', this._onBlur);
                }
            }
        },

        _onBlur: function() {
            var val = this.domElem[0].value;
            this.domElem[0].value = enterExitCost(val);

        },


    }));

    function enterExitCost(val) {
        val = val.replace(/[^\d.,]/g, '');
        val = changeCommaPoint(val);
        var arrStr = val.split('.');
        if(arrStr[0].length == 0) {
            arrStr[0] = '0';
        };
        if(arrStr.length > 1 && arrStr[1].length > 0) {
            return getStrRes(arrStr[0]) + '.' + String(arrStr[1]).slice(0, 2);
        } else {
            return getStrRes(arrStr[0]);
        }

        function changeCommaPoint(val) {
            val = val.split('');
            val.forEach(function(item, i ,val) {
                if(val[i] == ',') {
                    val[i] = '.';
                }
            })
            return val.join().replace(/[/,]*/g, '');
        }

        function getStrRes(val) {
            var arr, arrRes = [];
            arr = val.replace(/\s/g, '').split('').reverse();
            arr.forEach(function(item, i, arr) {
                if(i % 3 == 0 && i > 0) {
                    arrRes.push(' ');
                };
                arrRes.push(arr[i]);
            })
            arrRes = arrRes.reverse().join().replace(/[/,]*/g, '');
            return arrRes;
        }
    }

});