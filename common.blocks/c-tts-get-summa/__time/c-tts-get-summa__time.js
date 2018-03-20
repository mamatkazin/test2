'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-tts-get-summa__time', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var start = moment('00:00', 'HH:mm');

                    $('.b-task-timesheet .__hour:nth-child(' + (this.params.number + 4).toString() + ') input').each(function() {
                        var curent = moment(this.value, 'HH:mm')
                           ,   hour = curent.get('hour')
                           , minute = curent.get('minute')
                           ;

                        start = start.add({hours: hour, minutes: minute});
                    });
                    
                    if (start.format('HH:mm') != '00:00') {
                        this.domElem[0].innerHTML = start.format('HH:mm');
                    }
                }
            }
        }
    }));
});