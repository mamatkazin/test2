'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-button-call__glyphicon', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    if ($.isEmptyObject(this.params.position)) {
                        this.domElem.css('position', this.params.position);
                    }
                    if ($.isEmptyObject(this.params.top)) {
                        this.domElem.css('top', this.params.top);
                    }
                    if ((this.params.action_name == 'NewProject') && ((this.params.user_id != '36') && (this.params.user_id != '286') && (this.params.user_id != '42') && (this.params.user_id != '0'))) {
                        this.domElem.attr('disabled', 'disabled');
                    }
                }
            }
        },

        _onClick: function() {
            WSSend(this.params);

            ShowSnipper();
        }
    }));
});