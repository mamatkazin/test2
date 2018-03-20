'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-project-show__template', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },

        _onClick: function() {
            var msg = {
                action_name: 'ProjectLoadKinds',
                template_id: this.domElem[0].getAttribute('data-id'),
                user_id: $('input[name="user_id"]').val(),
                selector: '#template_kind_id',
                builder: 'ProjectLoadKinds'
            };
            WSSend(msg);

            //console.log("Здесь идет запрос на второй комбобокс");

            ShowSnipper();
        }
    }));
});