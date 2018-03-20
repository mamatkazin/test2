'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-kanban__column', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('dblclick', this._onDblClick);
                }
            }
        },
    
        _onDblClick: function() {
            g_heap['kot_id'] = this.params.kot_id;
        }
    }));
});