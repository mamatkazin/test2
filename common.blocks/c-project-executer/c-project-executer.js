'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-project-executer', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick: function() {
            var executors = [];
            //alert();

            $('#place_modal_form .c-destination tbody tr').each(function() {
                var executor = {};
                    
                executor['user_id'] = $(this).attr('data-id');
                executor['task_id'] = $(this).attr('data-task-id');
                executor['h'] = $(this).find('input:first').val();
                executor['d'] = $(this).find('input:last').val();

                executors.push(executor)
            });

            //console.log(executor);
            var msg = this.params;
            
            msg['executors'] = JSON.stringify(executors);
            
            WSSend(msg);
            
            $('#place_modal_form').modal('hide');
            
            ShowSnipper();
        }
    }));
});