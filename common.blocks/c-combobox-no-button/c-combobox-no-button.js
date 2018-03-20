'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-combobox-no-button', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick: function() {
            
            var elem = this.domElem.closest('.b-combobox');
                        
            elem.find('.b-combobox__input').val(this.domElem[0].innerText);
           
            
            var start = moment('00:00', 'HH:mm');
            
            $('.b-task-timesheet .__hour:nth-child(' + (this.params.number + 4).toString() + ') input').each(function() {
                var curent = moment(this.value, 'HH:mm')
                   ,   hour = curent.get('hour')
                   , minute = curent.get('minute')
                   ;

                start = start.add({hours: hour, minutes: minute});
            });
           
            if (start.format('HH:mm') != '00:00') {
                $('.c-tts-get-summa .c-tts-get-summa__time:nth-child(' + (this.params.number + 1).toString() + ')')[0].innerHTML = start.format('HH:mm');
            };
            
            this.domElem.closest('.__hour').css('background-color', 'inherit');
        },

    }));
});