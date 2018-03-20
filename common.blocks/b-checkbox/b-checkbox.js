'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-checkbox', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    if ((this.params.obligatory == 1) || (this.params.task_id != 0)) {
                        this.domElem.prop('checked', true);
                        this.domElem.attr('disabled', 'disabled');
                    } else {
                        this.domElem.prop('checked', false);
                    }
                    //Находит input без Ролей
                    if(!$(this.domElem[0]).siblings('.column-Parent').children().hasClass('row-Parent')){
                        //console.log($(this.domElem[0]).parents('.table_rowTop').find('input[type="text"]').val());
                        $(this.domElem[0]).parents('.table_rowTop').find('input[type="text"]').attr('disabled', 'disabled').addClass('color9B backgroundEE');
                    }
                    //checkbox с пустыми Ролями
                    var checkBox = $(this.domElem[0]).parents('.table_rowTop').children('.column-Parent').children('.row-Parent').length;
                    if(this.domElem[0].checked && checkBox == 0){
                        //console.log(checkBox);
                        $(this.domElem[0]).parents('.table_rowTop').find('input[type="text"]').prop('disabled', false).removeClass('color9B backgroundEE');
                    }
                }
            }
        },
    
        _onClick: function() {
            var el = this.domElem[0];
            if (el.checked) {
                $('.c-project-template__table input[name^="role_"][data-partition-id="' + this.domElem.attr('data-id') + '"]').removeAttr('disabled');
                checkInput(el);
            } else {
                $('.c-project-template__table input[name^="role_"][data-partition-id="' + this.domElem.attr('data-id') + '"]').attr('disabled', 'disabled');
                $(el).parents('.table_rowTop').find('input[type="text"]').attr('disabled', 'disabled').addClass('color9B backgroundEE');
                var rows = $(el).parents('.table_rowTop').find('.row-Parent').children().find('input[type="checkbox"]');
                //если внутри строки нет checkbox
                if(rows.length == 0) {
                    el = $(el).parents('.table_rowTop').find('input[type="text"]');
                    el[0].value = '0';
                    el[1].value = '';
                }
                $('#buttonCreateWorkComplexity').attr('disabled', 'disabled');
            }
        }
    }));

    function checkInput(el) {
        //Находит строки с  input  в строке нажатого checkbox
        var rows = $(el).parents('.table_rowTop').find('.row-Parent').children().find('input[type="checkbox"]');
        //если внутри строки нет checkbox
        if(rows.length == 0) {
            $(el).parents('.table_rowTop').find('input[type="text"]').removeAttr('disabled').removeClass('color9B backgroundEE');
            //иначе проверяет заполнение checkbox
        } else {
            $(rows).each(function() {
                //если они нажаты, то разблокирует input
                if(this.checked) {
                    $(this).parents('.row-Parent').find('input[type="text"]').removeAttr('disabled').removeClass('color9B backgroundEE');
                }
            })
        }
    }

});