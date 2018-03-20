'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-tree-card', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('dblclick', this._onDblClick);
                    
//                    this.findChildElem('header').setMod('state-'+this.params.state);
                }
            }
        },
    
        _onDblClick: function() {
            WSSend(this.params);
        }
    }));
});