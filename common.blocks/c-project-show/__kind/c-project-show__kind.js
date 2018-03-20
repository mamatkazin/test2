modules.define('c-project-show__kind', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick : function() {
            var msg = {
                action_name: 'ProjectLoadPartitions',
                kind_id: this.domElem[0].getAttribute('data-id'),
                user_id: $('input[name="user_id"]').val(),
                selector: '.c-project-template__table',
                builder: 'ProjectLoadPartitions'
            };

            WSSend(msg);

            //console.log("Здесь идет запрос на создание формы оценки трудозатрат");

            ShowSnipper();


        },

    }

    ));
});