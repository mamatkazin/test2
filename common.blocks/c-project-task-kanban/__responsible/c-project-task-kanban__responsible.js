'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-project-task-kanban__responsible', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },

        _onClick: function() {
            var responsible_id = this.domElem[0].getAttribute('data-id')
              , project_id = $('.c-project-show input[name="project_id"]').val()
              ;
            
            SendColumnReload(responsible_id, project_id, '1', '.c-project-show .c-kanban td[data-kot-id="1"]', 'ReloadColumn', '0', '1');
            SendColumnReload(responsible_id, project_id, '101', '.c-project-show .c-kanban td[data-kot-id="101"]', 'ReloadColumn', '0', '1');
            SendColumnReload(responsible_id, project_id, '2', '.c-project-show .c-kanban td[data-kot-id="2"]', 'ReloadColumn', '0', '1');
        }
        
    }));
});