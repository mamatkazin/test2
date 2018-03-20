'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-combobox__item', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);

                    
                    $('body').on('click', '.b-combobox ul li', function(){
                        var elem = $(this).closest('.b-combobox');
                        
                        elem.find('input:first-child')[0].value = this.getAttribute('data-id');
                        
                        if (elem.find('.b-combobox__text').length > 0) {
                            elem.find('.b-combobox__text')[0].innerText = this.innerText;
                        } else {
                            elem.find('.b-combobox__input').val(this.innerText);
                        }
                        
                        elem.find('span').removeClass('glyphicon-menu-up');
                        elem.find('span').addClass('glyphicon-menu-down');
                    });
                }
            }
        },

        _onClick: function() { 
            
            if($(this.domElem[0]).parents().hasClass('search-panel-body')) {
                //Костыль
                setTimeout(function() {
                    checkTheOccupancyField ()
                }, 100);
            } 
//            this.findParentBlock('b-combobox').findChildElem('id').domElem.val(this.domElem[0].getAttribute('data-id'));
//            this.findParentBlock('b-combobox').findChildElem('text').domElem[0].innerHTML = this.domElem[0].innerHTML;
//            this.findParentBlock('b-combobox').findChildElem('icon').domElem.removeClass('glyphicon-menu-up');
//            this.findParentBlock('b-combobox').findChildElem('icon').domElem.addClass('glyphicon-menu-down');
        }
        
    }));
    //проверка заполняемости полей
    function checkTheOccupancyField() {

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