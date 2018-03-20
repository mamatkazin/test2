'use strict';
modules.define('c-setList-control-hours-change', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },

        _onClick: function() {

            /*var array = JSModel.checkValue,//массив с id измененных строк 
                arrInputs = [],
                row = {},
                newArray = [];

            array.forEach(function(item, i, array) {
                //собираю все input в строке в объект
                arrInputs = document.getElementById(String(item)).getElementsByTagName('input');
                for(var key = 0; key < arrInputs.length; key++) {
                    row = { 
                        date : arrInputs[key].dataset.date, //сюда вставлять дату
                        cell : arrInputs[key].value || '0',
                        id: arrInputs[key].dataset.id
                    };
                    //получаю массив объектов вида [{date: "25", cell: "8", id: "180"}, {date: "26", cell: "В", id: "180"}]
                    newArray.push(row);
                }
            });*/
           var msg = {
                   action_name: "WorkingSheetUpdate",
                   selector: "#rowParentWorkingSheetShow",
                   array: JSModel.changeWorkingSheet,//здесь массив объектов вида [{date: "25.12.2017", cell: "8", id: "180"}, {date: "26.12.201", cell: "В", id: "187"}]
                   builder: "WorksheetList"
               };

            //console.log('Изменения ', msg);
            WSSend(msg);
        }

    }));
});