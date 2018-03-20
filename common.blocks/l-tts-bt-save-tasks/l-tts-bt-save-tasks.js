'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });
});
modules.define('l-tts-bt-save-tasks', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);

                    if (this.params.close == 1) {
                        this.domElem.attr('disabled', 'disabled');
                    }

                }
            }
        },

        _onClick: function() {
            var data = []
              , time
              ;

            $('.l-task-timesheet td input:not([disebled="disabled"])').each(function(){
                if (this.value != this.getAttribute('data-old-val')) {

                    if (this.value == '') {
                        time = '00:00';
                    } else {
                        time = this.value
                    }

                    var item = {
                        task_id: this.getAttribute('data-id'),
                        d: this.getAttribute('data-date'),
                        h: time,
                        tplan: this.getAttribute('data-tplan')
                    };

                    data.push(item);
                }
            });

            var msg = {
                action_name: this.params.action_name,
                date: this.params.date,
                data: JSON.stringify(data),
                user_id: $('input[name="user_id"]').val()
            };

            if ((data.length > 0) || (this.params.action_name == 'tts_accept_send')) {                
                WSSend(msg);
                ShowSnipper();
            }

        }
    }));
});
