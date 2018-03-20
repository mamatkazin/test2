'use strict';
modules.define('c-set-month', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var el = this.domElem[0], 
                        elem = this.domElem, 
                        here = this;
                    initCss(elem, here);
                    
                    setMonthToday(el);
                }
            }
        }
    }));
    function setMonthToday(el) {
        var el = el;
        if(el.parentElement.id == 'buttonPreviousMonth'){
            if(JSModel.today[1] - 1 == 0) {//при инициализации блока c-getlist-control-date в JSModel.today устанавливается текущая дата
                el.innerHTML = getMonth(12);
            } else {
                el.innerHTML = getMonth(JSModel.today[1] - 1);
            }
        } 
        if(el.parentElement.id == 'buttonNextMonth'){
            if(JSModel.today[1] + 1 == 13) {
                el.innerHTML = getMonth(1);
            } else {
                el.innerHTML = getMonth(JSModel.today[1] + 1);
            }
        } 
        if(el.id == 'buttonNowMonth'){
            el.innerHTML = getMonth(JSModel.today[1]);
        } 
    }
    //возвращает название месяца на русском языке
    function getMonth(arg) {
      var month;
      switch (arg) {
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
          default:
            month = '';
        }
        return month;
    }
});