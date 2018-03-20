'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
'use strict';
modules.define('c-f-projets__item', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var el = this.domElem, text = this.params.name;
                    if ($.isEmptyObject(this.params.width)) {
                        el.css('width', this.params.width);
                    }
                    if ($.isEmptyObject(this.params.width)) {
                        el.css('word-wrap', this.params.wordWrap);
                    }
                    if ($.isEmptyObject(this.params.width)) {
                        el.css('width', this.params.width + 'px');
                    }
                    if ($.isEmptyObject(this.params.width)) {
                        el.css('height', this.params.height + 'px');
                    }
                    if ($.isEmptyObject(this.params.width)) {
                        el.css('overflow', this.params.overflow );
                    }
                    if ($.isEmptyObject(this.params.width)) {
                        el.css('text-overflow', this.params.textOverflow );
                    }

                    if (this.params.first_id == this.params.id) {
                        //el.addClass('li-active');
                        //this.setMod(this, 'active');
                    }

                    setTextLength(text, el);
                }
            }
        },

    }));

    function setTextLength(text, el) {
        if(text.length > 73) {
            text = text.slice(0, 110) + ' ...';
            el[0].textContent = text;
        };
    }

});
