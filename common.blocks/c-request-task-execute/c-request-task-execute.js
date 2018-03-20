modules.define('c-request-task-execute', ['i-bem-dom'], function(provide, BEMDOM) {
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
                action_name: 'ProjectTaskExecute',
                task_id: this.params.task_id.toString(),
                kot_id: this.params.kot_id.toString(),
                value: this.params.value.toString(),
                comment: $('input[name="reason"]').val(),
                selector: 'li.b-checkbox-task[name="contract_tasks"][data-task-id="'+this.params.task_id.toString()+'"]',
                builder: "ProjectTaskClose"
            }
            
            WSSend(msg);
                
            ShowSnipper();
            
            $('#place_modal_form').modal('hide');
        }
    }));
});