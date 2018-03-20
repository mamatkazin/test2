'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-checkbox-field__checkbox', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var el = this.domElem;
                    if ((this.params.obligatory == 1) || (this.params.task_id != 0)) {
                        el.prop('checked', true);
                        el.attr('disabled', 'disabled');
                    } else {
                        el.prop('checked', false);
                        var part_id = 'part_' + el.attr('data-partition-id');

                        if (!$('.c-project-template__table input[name="' + part_id + '"]')[0].checked) {
                            el.attr('disabled', 'disabled');
                        }
                    }
                    //Проверка checkbox и блокировка input[type="text"] при загрузке
                    /*if (!el.prop('checked') || el.prop('disabled')) {
                       $(el[0]).parents('.row-Parent').find('input[type="text"]').attr('disabled', 'disabled').addClass('color9B backgroundEE');
                    }*/
                    if (el.prop('checked') && $(el[0]).parents('.table_rowTop').find('input[type="checkbox"]')[0].checked) {
                        $(el[0]).parents('.row-Parent').find('input[type="text"]').prop('disabled', false).removeClass('color9B backgroundEE');
                    }

                    this._domEvents().on('click', this._onClick);
                }
            }
        },

        _onClick: function() {
            var el = this.domElem[0], checked = this.domElem[0].checked;
            checkInput(el, checked);
            checkFieldAssessTheWork();

        }
    }));

    //Изменение input[type="text"] сработавшего checkbox и кнопки Создать
    function checkInput(el, checked) {
        var el = $(el).parents('.row-Parent').find('input[type="text"]');
        if (checked) {
            $(el).removeAttr('disabled').removeClass('color9B backgroundEE');
            el[0].value = '0';
            el[1].value = '';
            $('#buttonCreateWorkComplexity').attr('disabled', 'disabled');
        } else {
            $(el).attr('disabled', 'disabled').addClass('color9B backgroundEE')
            el[0].value = '0';
            el[1].value = '';
            $('#buttonCreateWorkComplexity').attr('disabled', 'disabled');
        }
    }

    //Проверка заполняемости полей input[type="text"] в форме Оценить трудозатраты
    function checkFieldAssessTheWork (checked) {
        if (checked) {
            var count;
            $('#to_assess_the_work_table input[type="text"]').each(function () {
                if (!$(this).prop('disabled')) {
                    count = this.value.replace(/[^0-9]/g, '');
                    if (count == 0 || count == '') {
                        $('#buttonCreateWorkComplexity').attr('disabled', 'disabled');
                        return false;
                    } else {
                        $('#buttonCreateWorkComplexity').removeAttr('disabled');
                    }
                    ;
                }
            });
        } else {
            $('#buttonCreateWorkComplexity').attr('disabled', 'disabled');
        }
    };

});