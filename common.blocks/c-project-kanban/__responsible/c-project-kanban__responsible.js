'use strict';
modules.define('c-project-kanban__responsible', ['i-bem-dom'], function(provide, BEMDOM) {
	provide(BEMDOM.declBlock(this.name, {
		onSetMod : {
			'js' : {
				'inited': function() {
					this._domEvents().on('click', this._onClick);
					if (this.params.width != null) {
                        this.domElem.css('width', this.params.width);
                    }
                    if (this.params.height != null) {
                        this.domElem.css('height', this.params.height);
                    }
				}
			}
		},

		_onClick: function() {
			var responsible_id = this.domElem[0].getAttribute('data-id');
             g_heap['f_responsible_id'] = responsible_id;
			
//			SendReloadKanbanColumnProject(responsible_id, '1', '0');
//			SendReloadKanbanColumnProject(responsible_id, '101', '0');
//			SendReloadKanbanColumnProject(responsible_id, '2', '0');

		}
		
	}));
});