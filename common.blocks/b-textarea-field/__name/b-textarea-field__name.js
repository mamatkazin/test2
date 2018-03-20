'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-textarea-field__name', ['i-bem-dom'], function(provide, BEMDOM) {
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
            if($(this.domElem[0]).parents().hasClass('search-panel-body')) {
                checkTheOccupancyField();
            } else {
                return;
            }
        },

    }));

    //проверка заполняемости полей
    function checkTheOccupancyField () {

        createArr();

        function createArr() {

            var arr = [];
            $('.search-panel-body input').each(function() {
                if($(this).hasClass('checkInput')) {
                    arr.push(this.value);
                }
            });
            checkInput(arr);
        };

        function checkInput(arr) {

            for (var i = 0; i < arr.length; i++) {
                if(arr[i] == '') {
                    $('.buttonEditCreate').prop('disabled', true);
                    break;
                } else {
                    checkTextarea();
                };
            }
        };

        function checkTextarea() {

            $('.search-panel-body textarea').each(function() {
                if(this.value == '') {
                    $('.buttonEditCreate').prop('disabled', true);
                } else {
                    $('.buttonEditCreate').prop('disabled', false);
                }
            });
        };
    }

});