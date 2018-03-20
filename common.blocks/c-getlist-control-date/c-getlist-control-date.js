'use strict';
modules.define('c-getlist-control-date', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    //в  JSModel.today устанавливаю текущую дату
                    JSModel.today = [];
                    JSModel.today[0] = new Date().getDate();
                    JSModel.today[1] = new Date().getMonth() + 1;//потому-что январь в Date равен 0
                    JSModel.today[2] = new Date().getFullYear();
                }
            }
        },

        _onClick: function() {
          //id департамента устанавливается при выборе департамента в комбобоксе, до этого он не приходит с бэка
          var department_id = JSModel.department_id,//забираю текущий id департамента
              start, 
              finish;
          if(this.domElem.attr('id') == 'buttonPreviousMonth' && department_id) {//поиск предыдущего месяца
              if(JSModel.today[1] > 1){
                  JSModel.today[1] = JSModel.today[1] - 1;
              } else if(JSModel.today[1] == 1){
                  JSModel.today[1] = 12;
                  JSModel.today[2] = JSModel.today[2] - 1; 
              }
              start = '1' + '.' + String(JSModel.today[1]) + '.' + String(JSModel.today[2]);
              finish = String(dayEnd(JSModel.today[1])) + '.' + String(JSModel.today[1]) + '.' + String(JSModel.today[2]);
          } else if(this.domElem.attr('id') == 'buttonNextMonth' && department_id) {//поиск следующего месяца
              if(JSModel.today[1] < 12){
                  JSModel.today[1] = JSModel.today[1] + 1;
              } else if(JSModel.today[1] == 12){
                  JSModel.today[1] = 1;
                  JSModel.today[2] = JSModel.today[2] + 1; 
              }
              start = '1' + '.' + String(JSModel.today[1]) + '.' + String(JSModel.today[2]);
              finish = String(dayEnd(JSModel.today[1])) + '.' + String(JSModel.today[1]) + '.' + String(JSModel.today[2]);
          } else if(this.domElem.attr('id') == 'buttonNowMonth' && department_id){//нажат текущий месяц
              start = '1' + '.' + String(new Date().getMonth() + 1) + '.' + String(new Date().getFullYear());
              finish = String(new Date().getDaysInMonth()) + '.' + String(new Date().getMonth() + 1) + '.' + String(new Date().getFullYear());
              //в  JSModel.today устанавливаю текущую дату
              JSModel.today[0] = new Date().getDate();
              JSModel.today[1] = new Date().getMonth() + 1;//потому-что январь в Date равен 0
              JSModel.today[2] = new Date().getFullYear();
          } else { 
            return alert('Выберите департамент.'); 
          }
          //отображает смену месяцев на кнопках
          setMonth(start);//в start  находится данные в виде дд.мм.гг
          if(department_id) {
            var msg = {
                      action_name: "WorksheetList",
                      selector: "#rowParentWorkingSheetShow",
                      department_id: String(department_id),
                      start: start,
                      finish: finish,
                      builder: "WorksheetList"
                  };
            //console.log('поиск по месяцам ', msg);
            WSSend(msg);
          }
        }
    }));
    function setMonth(arg) {
        var value = arg.split('.'),
            countMonth = getMonth(Number(value[1])) + ' ' + value[2],
            previousMonth = getMonth(Number(value[1]) - 1),
            nextMonth = getMonth(Number(value[1]) + 1);
        document.getElementById('buttonNowMonth').innerHTML = countMonth;
        document.getElementById('spanPreviousMonth').innerHTML = previousMonth;
        document.getElementById('spanNextMonth').innerHTML = nextMonth;
    }
    //возвращает количество дней в месяце
    function dayEnd(arg) {
      var day = 0;
      switch (arg) {
          case 1:
            day =  31;
            break;
          case 2:
            day =  28;//сделать проверку на високосный год c 2020
            break;
          case 3:
            day =  31;
            break;
            case 4:
            day =  30;
            break;
          case 5:
            day =  31;
            break;
          case 6:
            day =  30;
            break;
            case 7:
            day =  31;
            break;
          case 8:
            day =  30;
            break;
          case 9:
            day =  31;
            break;
            case 10:
            day =  30;
            break;
          case 11:
            day =  31;
            break;
          case 12:
            day =  30;
            break;
          default:
            day = '';
        }
        return day;
    }
    //возвращает название месяца на русском языке
    function getMonth(arg) {
      var month;
      switch (arg) {
          case 0:
            month =  'Декабрь';
            break;
          case 1:
            month =  'Январь';
            break;
          case 2:
            month =  'Февраль';
            break;
          case 3:
            month =  'Март';
            break;
            case 4:
            month =  'Апрель';
            break;
          case 5:
            month =  'Май';
            break;
          case 6:
            month =  'Июнь';
            break;
            case 7:
            month =  'Июль';
            break;
          case 8:
            month =  'Август';
            break;
          case 9:
            month =  'Сентябрь';
            break;
            case 10:
            month =  'Октябрь';
            break;
          case 11:
            month =  'Ноябрь';
            break;
          case 12:
            month =  'Декабрь';
            break;
          case 13:
            month =  'Январь';
            break;
          default:
            month = '';
        }
        return month;
    }
});