'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-button-template', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick: function() {
            var partitions = [];
            

            $('.c-project-template__table input[name^="part_"]').each(function() {
                if (this.checked) {
                    var roles = [];
                    var partition = {};
                    var parent = $(this).closest('.table_rowTop');
                    
                    partition['partition_id'] = $(this).attr('data-id');
                    partition['task_id'] = $(this).attr('data-task-id');
                    partition['h'] = $.trim(parent.find('input[data-partition-id="' + $(this).attr('data-id') + '"][data-role-id="0"][name^="h_"]').val());
                    partition['d'] = $.trim(parent.find('input[data-partition-id="' + $(this).attr('data-id') + '"][data-role-id="0"][name^="d_"]').val());
                            
                    var arr_roles = parent.find('input[data-partition-id="' + $(this).attr('data-id') + '"][name^="role_"]');
                    
                    arr_roles.each(function() {
                        if (this.checked) {
                            var role = {};
                            var parent = $(this).closest('.row-Parent');
                            
                            role['role_id'] = $(this).attr('data-id');
                            role['task_id'] = $(this).attr('data-task-id');
                            role['h'] = parent.find('input[data-role-id="' + $(this).attr('data-id') + '"][name^="h_"]').val();
                            role['d'] = $.trim(parent.find('input[data-role-id="' + $(this).attr('data-id') + '"][name^="d_"]').val());
                            
                            roles.push(role)
                        }
                    });
                    
                    partition['roles'] = roles;
                    
                    partitions.push(partition)
                }
            });

            
            var msg = this.params;
            
            msg['template'] = JSON.stringify(partitions);
            
            if (this.params.action_name == 'ProjectUpdateTemplate') {
                msg['template_id'] = $('input[name="f_template_id"]').val();
                msg['kind_id'] = $('input[name="f_kind_id"]').val();
            }
            

            
            WSSend(msg);
            
            $('#place_modal_form').modal('hide');
            
            ShowSnipper();
        }
    }));
});