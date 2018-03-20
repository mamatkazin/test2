'use strict';
modules.define('c-block__input-sum', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    JSModel.checkValue = [];//массив для id измененных строк
                    var el = this.domElem[0];
                    sum(el);//подсчет часов и дней при загрузке
                    this._domEvents().on('input', this._onInput);
                    this._domEvents().on('change', this._onChange);
                }
            }
        },
        
        _onInput: function() {
            var el = this.domElem[0];
            sum(el);
        },

        _onChange: function( ){
        //создаю массив с id измененных строк и проверяю на наличие id
            var id = +this.domElem[0].parentElement.getAttribute('id');
            if(JSModel.checkValue.indexOf(id) == -1) {
                JSModel.checkValue.push(id);
            }
        }

    }));
    //Подсчет часов в строке
    function sum(el){
        var elem = el, arr = elem.parentElement.getElementsByTagName('input'), sum = 0, check, days = 0;
        for (var i = 0; i < arr.length; i++) {
            check = Number(arr[i].value)
            if(check){
                sum += check;
                days++;
            }
        }
        elem.parentElement.nextElementSibling.innerHTML = sum;
        elem.parentElement.nextElementSibling.nextElementSibling.innerHTML = days;
    }


});