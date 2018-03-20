'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-task-kanban__projects', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    
                    if (this.params.first_id == this.params.id) {
                        this.domElem.addClass('li-active');
//                        this.setMod(this, 'active');
                    }
                }
            }
        },

        _onClick: function() {
            var project_id     = this.domElem[0].getAttribute('data-id')
              , responsible_id = g_heap["f_responsible_id"].toString()
              ;
            
            g_heap['f_project_id'] = project_id;
            
            $('.c-f-projets__item').removeClass('li-active');
            this.domElem.addClass('li-active');
            
            SendColumnReload(responsible_id, project_id, '1', '.c-kanban td[data-kot-id="1"]', 'ReloadColumn', '0', '0');
            SendColumnReload(responsible_id, project_id, '101', '.c-kanban td[data-kot-id="101"]', 'ReloadColumn', '0', '0');
            SendColumnReload(responsible_id, project_id, '2', '.c-kanban td[data-kot-id="2"]', 'ReloadColumn', '0', '0');
        }
        
    }));
});