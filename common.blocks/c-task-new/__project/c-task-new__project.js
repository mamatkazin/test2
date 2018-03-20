'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-task-new__project', ['i-bem-dom'], function(provide, BEMDOM) {
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
                action_name: "LoadTeamProject",
                project_id: this.domElem[0].getAttribute('data-id'),
                selector: '#TaskNewTeamList',
                user_id: $('input[name="user_id"]').val()
            };
            
            WSSend(msg);
            
            ShowSnipper();
        }
    }));
});