'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-input-project-template', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
//                    var role_id = 'role_' + this.domElem[0].getAttribute('data-role-id');
//                    if (!$('.c-project-template__table input[name="' + role_id + '"]')[0].checked) {
//                        this.domElem.attr('disabled', 'disabled')
//                    }
                }
            }
        }
    }));
});