'use strict';  
modules.define('b-button', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);
                    if (this.params.width != null) {
                        this.domElem.css('width', this.params.width);
                    }
                    if (this.params.position != null) {
                        this.domElem.css('position', this.params.position);
                    }
                    if (this.params.top != null) {
                        this.domElem.css('top', this.params.top);
                    }
                    if (this.params.left != null) {
                        this.domElem.css('left', this.params.left);
                    }
                    if (this.params.height != null) {
                        this.domElem.css('height', this.params.height);
                    }
                    if (this.params.marginRight != null) {
                        this.domElem.css('margin-right', this.params.marginRight);
                    }
                    if (this.params.marginLeft != null) {
                        this.domElem.css('margin-left', this.params.marginLeft );
                    }
                    if (this.params.background != null) {
                        this.domElem.css('background', this.params.background);
                    }
                    if (this.params.backgroundColor != null) {
                        this.domElem.css('background-color', this.params.backgroundColor);
                    }
                }
            }
        },
    
        _onClick: function() {
           
        }
    }));
});