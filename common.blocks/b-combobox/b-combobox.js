'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-combobox', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    //this._domEvents().on('DOMContentLoaded', this._onLoad);
                    this._domEvents().on('click', this._onClick);
                    this._domEvents().on('hide.bs.dropdown', this._onDropdown);
                    this._domEvents().on('shown.bs.dropdown', this._onShownDropdown);
                    this._domEvents().on('keyup', this._onKeyUp);
                }
            }
        },
        
        _onKeyUp: function() {
            this.findChildElem('input').domElem.keyup(function(event) {
                if (event.keyCode == 27 || $(this).val() == '') {
                    $(this).val('');
                    $('.b-combobox__item').removeClass('name').show().addClass('name');
                }
                else {
                    filter('li', $(this).val());
                }
            });
            
            function filter(filter, query) {
                query =	$.trim(query);
                $('.b-combobox__item').each(function() {
                    ($(this).text().search(new RegExp(query, "i")) != 0) ? $(this).hide().removeClass('name') : $(this).show().addClass('name');
                });
            }
        },
        


        _onClick: function() {
            if (! $.isEmptyObject(this.findChildElem('icon'))) {
                this.findChildElem('icon').domElem.removeClass('glyphicon-menu-down');
                this.findChildElem('icon').domElem.addClass('glyphicon-menu-up');
            }
        },
        
        _onDropdown: function() {
            var text
              , elem_text = this.findChildElem('text')
              , elem_input = this.findChildElem('input')
              , elem_icon = this.findChildElem('icon')
              ;
            
            if (! $.isEmptyObject(elem_icon)) {
                if (!elem_icon.domElem.hasClass('glyphicon-menu-down')) {
                    elem_icon.domElem.removeClass('glyphicon-menu-up');
                    elem_icon.domElem.addClass('glyphicon-menu-down');
                };
            }
            
            
            
            if (! $.isEmptyObject(elem_text)) {
                text = elem_text.domElem[0].innerHTML;
            } else if (! $.isEmptyObject(elem_input)) {
                text = elem_input.domElem.val();
            } else {
                console.log("error b-combobox.js");
                text = "";
            }
            
            if (text.length > 32) {
                if (! $.isEmptyObject(elem_text)) {
                    elem_text.domElem[0].innerHTML = text.substring(0, 29) + '...';
                } else {
                    elem_input.domElem.val(text.substring(0, 29) + '...');
                } ;
            };
            
            if (text == '') {
                this.domElem.find('input:first-child')[0].value = this.params.id;
                
                if (! $.isEmptyObject(elem_text)) {
                    elem_text.domElem[0].innerHTML = this.params.name;
                } else {
                    elem_input.domElem.val(this.params.name);
                };
            };
            
            $('.b-combobox__item').removeClass('name').show().addClass('name');
        },
        
        _onShownDropdown: function() {
            this.findChildElem('input').domElem[0].value = '';
            this.findChildElem('input').domElem[0].focus();
        }
            
    }));
});