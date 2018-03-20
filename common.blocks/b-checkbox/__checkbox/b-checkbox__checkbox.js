'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-checkbox__checkbox', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    if ((this.params.obligatory == 1) || (this.params.task_id != 0)) {
                        this.domElem.prop('checked', true);
                        this.domElem.attr('disabled', 'disabled');
                    } else {
                        this.domElem.prop('checked', false);
                        
                        var part_id = 'part_' + this.domElem.attr('data-partition-id');
                    
                        if (!$('.c-project-template__table input[name="' + part_id + '"]')[0].checked) {
                            this.domElem.attr('disabled', 'disabled');
                        }
                    }
                    
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick: function() {
            if (this.domElem[0].checked) {
                $('.c-project-template__table input[name^="role_"][data-partition-id="' + this.domElem.attr('data-id') + '"]').removeAttr('disabled');
            } else {
                $('.c-project-template__table input[name^="role_"][data-partition-id="' + this.domElem.attr('data-id') + '"]').attr('disabled', 'disabled');
            }
        }
    }));
});