'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-input__checkInput', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {

                    this._domEvents().on('change', this._onChange);

                    if ($.isEmptyObject(this.params.width)) {
                        this.domElem.css('width', this.params.width + 'px');
                    }
                }
            }
        },

        _onChange: function() {
            checkInput();
        },

    }));

    function checkInput() {

        var arr = [];
        $('#panel-body_change_project input').each(function() {
            arr.push(this);
        });

        for (var i = 0; i < arr.length; i++) {
            var count = arr[i];
            if(count.value == '') {
                $('#change_project_button').prop('disabled', true);
                break;
            } else {
                checkTextarea();
            };
        }
    };

    function checkTextarea() {

        $('#panel-body_change_project textarea').each(function() {
            if(this.value == '') {
                $('#change_project_button').prop('disabled', true);
            } else {
                $('#change_project_button').prop('disabled', false);
            }
        });
    };

});