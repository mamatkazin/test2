'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-input-time', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('focus', this._onFocus);
                    this._domEvents().on('blur', this._onBlur);
                    
                    this.domElem.mask('99:99', { placeholder: 'чч:мм' });
                    
                }
            }
        },
        
        _onFocus: function() {
            this.domElem.closest('.__hour').css('background-color', '#66afe9');
            
        },
    
        _onBlur: function() {
//            if (this.domElem[0].value.substr(0, 2).indexOf('ч') == -1) {
//                if (this.domElem[0].value.substr(3, 2).indexOf('м') != -1) {
//                    this.domElem[0].value = this.domElem[0].value.substr(0, 2) + ':00'
//                }
//            };
            
//            var start = moment('00:00', 'HH:mm');
            
//            $('.b-task-timesheet .__hour:nth-child(' + (this.params.number + 4).toString() + ') input').each(function() {
//                var curent = moment(this.value, 'HH:mm')
//                   ,   hour = curent.get('hour')
//                   , minute = curent.get('minute')
//                   ;

//                start = start.add({hours: hour, minutes: minute});
//            });
           
//            if (start.format('HH:mm') != '00:00') {
//                $('.c-tts-get-summa .c-tts-get-summa__time:nth-child(' + (this.params.number + 1).toString() + ')')[0].innerHTML = start.format('HH:mm');
//            };
            
//            this.domElem.closest('.__hour').css('background-color', 'inherit');
            
            this.domElem.val(this.domElem.attr('data-old-val'));
        }
       
    }));
});