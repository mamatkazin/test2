'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-date-field', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {

                    this._domEvents().on('change', this._onChange);
                }
            }
        },

        _onChange: function() {
            //Заготовка для проверки введенной даты
            // var date = this.domElem[0].value;
            // checkValidateDate(date)
            checkInput();

        }

    }));

    function checkInput() {
        var arr = [];
        $('#containsAppointExecutorsCost input').each(function() {
            arr.push(this);
        });
        for (var i = 0; i < arr.length; i++) {
            var count = arr[i];
            if(count.value == '' || count.value == 0) {
                $('#changeButton').prop('disabled', true);
                break;
            } else {
                $('#changeButton').prop('disabled', false);
            };
        }

    };

    // function checkValidateDate(date) {
    //
    //     var arrDate = date.split(".");
    //     // if(arrDate[2].length == 4){
    //         arrDate[1] -= 1;
    //         var d = new Date(arrDate[2], arrDate[1], arrDate[0]);
    //         if ((d.getFullYear() == arrDate[2]) && (d.getMonth() == arrDate[1]) && (d.getDate() == arrDate[0])) {
    //             console.log("Введена корректная дата!", date);
    //             return true;
    //         } else {
    //             console.log("Введена некорректная дата!");
    //             return false;
    //         }
    //     // } else {
    //     //     console.log("Введена некорректная дата!");
    //     //     return false;
    //     // }
    //
    // }
});