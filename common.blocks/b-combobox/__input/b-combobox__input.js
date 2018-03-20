'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-combobox__input', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {

                    this._domEvents().on('blur', this._onBlur);

                    if (this.params.width != null) {
                        this.domElem.css('width', this.params.width);
                    }
                    if (this.params.height != null) {
                        this.domElem.css('height', this.params.height);
                    }

                }
            }
        },

        _onBlur: function() {

            if(this.domElem.parents().hasClass('search-panel-body')) {
                checkTheOccupancyField();
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
            //console.log(arr);
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