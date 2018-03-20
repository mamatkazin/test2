'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-date-field__checkInput', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {

                    this._domEvents().on('change', this._onChange);
                    this._domEvents().on('input', this._onInput);

                    if ($.isEmptyObject(this.params.width)) {
                        this.domElem.css('width', this.params.width + 'px');
                    }
                }
            }
        },

        _onChange: function() {
            var el = this.domElem;
            if($('#modalDateBegin').val() && $('#modalDateFinish').val()) {
                $('#modal-window__button_download').prop('disabled', false);
            } else {
                $('#modal-window__button_download').prop('disabled', true);
            }
            if($(el[0]).parents().hasClass('table_rowTop')) {
                checkFieldAssessTheWork (el);
            } else if($(el[0]).parents().hasClass('search-panel-body')) {
                checkTheOccupancyField(el);
            } else {
                return;
            }
        },

        _onInput: function() {
            // var el = this.domElem;
            // if($(el[0]).parents().hasClass('table_rowTop')) {
            //     checkFieldAssessTheWork (el);
            // } else if($(el[0]).parents().hasClass('search-panel-body')) {
            //     checkTheOccupancyField(el);
            // } else {
            //     return;
            // }
        }

    }));

    //Проверка заполняемости полей input[type="text"] в форме Оценить трудозатраты
    function checkFieldAssessTheWork () {

        $('#to_assess_the_work_table input[type="text"]').each(function() {
            if(!$(this).prop('disabled')) {
                if(this.value == ''){//this.value == 0 || 
                    $('#buttonCreateWorkComplexity').attr('disabled', 'disabled');
                    return false;
                } else {
                    $('#buttonCreateWorkComplexity').removeAttr('disabled');
                };
            }
        });

    };

    //проверка заполняемости полей  в формах Изменить проект и Новый проект
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