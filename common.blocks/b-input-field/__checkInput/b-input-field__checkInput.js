'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-input-field__checkInput', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {

                    var el = this.domElem;

                    this._domEvents().on('change', this._onChange);
                    this._domEvents().on('click', this._onClick);

                    if ($.isEmptyObject(this.params.width)) {
                        el.css('width', this.params.width + 'px');
                    }
                    if ($.isEmptyObject(this.params.height)) {
                        el.css('height', this.params.height + 'px');
                    }
                    if ($.isEmptyObject(this.params.textAlign)) {
                        el.css('text-align', this.params.textAlign);
                    }
                }
            }
        },

        _onClick: function() {
            if(this.domElem[0].value == '0') {
                this.domElem[0].value = '';
            }
        },

        _onChange: function() {
            var el = this.domElem;
            if($(el[0]).parents().hasClass('table_rowTop')) {
               checkFieldAssessTheWork ();
            } else if($(el[0]).parents().hasClass('search-panel-body')) {
               checkTheOccupancyField(el);
            } else {
                return;
            }

        },

    }));
    //Проверка заполняемости полей input[type="text"] в форме Оценить трудозатраты
    function checkFieldAssessTheWork () {
            var count;
            $('#to_assess_the_work_table input[type="text"]').each(function() {
                if(!$(this).prop('disabled')) {
                    count = this.value.replace(/[^0-9]/g, '');
                    if(count == '' ){//count == 0 || 
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