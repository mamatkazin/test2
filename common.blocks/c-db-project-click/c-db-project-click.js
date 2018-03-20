modules.define('c-db-project-click', ['i-bem-dom'], function(provide, BEMDOM) {
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
                action_name: 'dashboard_project_show',
                project_id: this.params.project_id.toString(),
            }

            WSSend(msg);

            ShowSnipper();

        }

    }));

});
