'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });
});
modules.define('c-tts-change-week', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);

                    if ($('input[name="user_id"]').val() == "447") {
                      //Если сюда пришли, то уже нужно убрать этот костыль
                      if ((moment().startOf('week').add(1, 'days').subtract(210, 'days').format('DD.MM.YYYY') == this.params.date) && (this.params.difference == '-')) {
                          this.domElem.attr('disabled', 'disabled');
                      }
                    } else {
                      if ((moment().startOf('week').add(1, 'days').subtract(210, 'days').format('DD.MM.YYYY') == this.params.date) && (this.params.difference == '-')) {
                          this.domElem.attr('disabled', 'disabled');
                      }
                    }


                }
            }
        },

        _onClick: function() {
            var date = moment(this.params.date, "DD.MM.YYYY");
            var new_date, emploeer_id;

            if (this.params.difference == '-') {
                new_date = date.subtract(7, 'days');
            } else {
                new_date = date.add(7, 'days');
            }

            var msg = {
                action_name: this.params.action_name,
                date: new_date.format('DD.MM.YYYY'),
                selector: this.params.selector,
                emploeer_id: this.params.emploeer_id,
                user_id: $('input[name="user_id"]').val(),
                builder: this.params.builder
            };

            WSSend(msg);

            ShowSnipper();
        }
    }));
});
