'use strict';
modules.define('c-getlist-control-hours', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },

        _onClick: function() {
          JSModel.department_id = this.domElem.attr('data-id');//записываю текущий id департамента
          Date.prototype.getDaysInMonth = function () {//возвращает количество дней в текущем месяце
            return (new Date(this.getFullYear(), this.getMonth() + 1, 0)).getDate();
          };
          var msg = {
                  action_name: "WorksheetList",
                  selector: "#rowParentWorkingSheetShow",
                  department_id: this.domElem.attr('data-id'),
                  start: '1' + '.' + String(new Date().getMonth() + 1) + '.' + String(new Date().getFullYear()),
                  //функция getDaysInMonth() определена в прототипе!!! объекта Date выше
                  finish: String(new Date().getDaysInMonth()) + '.' + String(new Date().getMonth() + 1) + '.' + String(new Date().getFullYear()),
                  builder: "WorksheetList"
              };
          //console.log('msg', msg);
          WSSend(msg);
          //console.log('JSModel', JSModel);
        },
    }));
});