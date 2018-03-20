'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('b-toggle', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {

                    if ($.isEmptyObject(this.params.width)) {
                        this.domElem.css('width', this.params.width);
                    }
                    if ($.isEmptyObject(this.params.height)) {
                        this.domElem.css('height', this.params.height);
                    }
                    if ($.isEmptyObject(this.params.cursor)) {
                        this.domElem.css('cursor', this.params.cursor);
                    }
                    if ($.isEmptyObject(this.params.marginLeft)) {
                        this.domElem.css('margin-left', this.params.marginLeft);
                    }
                    if ($.isEmptyObject(this.params.marginBottom)) {
                        this.domElem.css('margin-bottom', this.params.marginBottom);
                    }
                    if ($.isEmptyObject(this.params.border)) {
                        this.domElem.css('border', this.params.border);
                    }
                    //закрывает блоки 'аккордеона' в ProjectShow
                    // if($(this.domElem[0]).hasClass('closeBlockProject')) {
                    //     $(this.domElem[0]).next().slideToggle(0);
                    // }

                    this._domEvents().on('click', this._onClick);
                }
            }
        },

        _onClick: function () {

            // var el = $(this.domElem[0]);
            // if(!$(el.children('.arrow')).hasClass('rotate')) {
            //     $(el.children('.arrow')).addClass('rotate');
            // } else {
            //     $(el.children('.arrow')).removeClass('rotate');
            // }

            // if(!$(el.children('.arrow.up')).hasClass('rotateUp')) {
            //     $(el.children('.arrow.up')).addClass('rotateUp');
            // } else {
            //     $(el.children('.arrow.up')).removeClass('rotateUp');
            // }

            // $(el).next().slideToggle(500);
        }

    }));

});