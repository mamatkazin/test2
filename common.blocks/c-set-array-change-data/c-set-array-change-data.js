'use strict';
modules.define('c-set-array-change-data', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('change', this._onChange);
                    JSModel.changeWorkingSheet = [];
                }
            }
        },

        _onChange: function(e) {
            var event = e;
            var row = { 
                        date : event.target.dataset.date, 
                        cell : event.target.value || '0',
                        id: event.target.dataset.id
                    }
            JSModel.changeWorkingSheet.push(row);
        },
    }));
});