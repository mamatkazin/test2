'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-input-field__checkInputCost', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {

                    this._domEvents().on('change', this._onChange);
                    this._domEvents().on('blur', this._onBlur);

                    if ($.isEmptyObject(this.params.width)) {
                        this.domElem.css('width', this.params.width + 'px');
                    }

                    var val = this.domElem[0].value;
                    this.domElem[0].value = enterExitCost(val);
                }
            }
        },

        _onChange: function() {
            if($(this.domElem[0]).parents().hasClass('search-panel-body')) {
                checkTheOccupancyField();
            } 
        },

        _onBlur: function() {
            var val = this.domElem[0].value;
            this.domElem[0].value = enterExitCost(val);

        },

    }));

    //проверка заполняемости полей
    function checkTheOccupancyField () {

        createArr();

        function createArr() {

            var arr = [];
            $('.search-panel-body input').each(function() {
                if($(this).hasClass('checkInput')) {
                    arr.push(this.value);
                }
            });
            checkInput(arr);
        };

        function checkInput(arr) {

            for (var i = 0; i < arr.length; i++) {
                if(arr[i] == '') {
                    $('.buttonEditCreate').prop('disabled', true);
                    break;
                } else {
                    checkTextarea();
                };
            }
        };

        function checkTextarea() {

            $('.search-panel-body textarea').each(function() {
                if(this.value == '') {
                    $('.buttonEditCreate').prop('disabled', true);
                } else {
                    $('.buttonEditCreate').prop('disabled', false);
                }
            });
        };
    }

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