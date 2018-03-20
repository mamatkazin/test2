'use strict'
modules.define('c-project-filter', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick: function() {
            var arrName = [];
            $('#filterProjectKanban input').each(function(i, val) {
                if(this.name) {
                    arrName.push(this.value);
                }
            });
            g_heap['f_sub_name'] = arrName[0];
            g_heap['f_template_id'] = arrName[1];
            g_heap['f_responsible_id'] = arrName[2];
            g_heap['f_code'] = arrName[3];

            var f_responsible_id = $('input[name="f_responsible_id"]').val()
              , f_template_id = $('input[name="f_template_id"]').val()
              , sub_name = $('input[name="f_sub_name"]').val()
              , code = $('input[name="f_code"]').val()
              ;
            
            ProjectRequestReloadKanbanColumn(f_responsible_id, '1', '0', f_template_id, sub_name, code);
            ProjectRequestReloadKanbanColumn(f_responsible_id, '2', '0', f_template_id, sub_name, code);
            ProjectRequestReloadKanbanColumn(f_responsible_id, '3', '0', f_template_id, sub_name, code);
            ProjectRequestReloadKanbanColumn(f_responsible_id, '4', '0', f_template_id, sub_name, code);
            ProjectRequestReloadKanbanColumn(f_responsible_id, '5', '0', f_template_id, sub_name, code);
        }
    }));
});