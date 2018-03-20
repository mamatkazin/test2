'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });
});
modules.define('c-hd-select', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },

        _onClick: function() {
            var msg = {
               action_name: "dashboard_show",
               employee_id: this.domElem.attr('data-id')
            };

            WSSend(msg);
            ShowSnipper();
        },
    }));

});
