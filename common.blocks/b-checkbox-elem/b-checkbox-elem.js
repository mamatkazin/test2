'use strict'
modules.define('b-checkbox-elem', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    if (this.params.marginTop != null) {
                        this.domElem.css('margin-top', this.params.marginTop);
                    }
                    if (this.params.marginRight != null) {
                        this.domElem.css('margin-right', this.params.marginRight);
                    }
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
                    if (this.params.marginLeft != null) {
                        this.domElem.css('margin-left', this.params.marginLeft );
                    }
                    if (this.params.background != null) {
                        this.domElem.css('background', this.params.background);
                    }
                    if (this.params.backgroundColor != null) {
                        this.domElem.css('background-color', this.params.backgroundColor);
                    }
                    if (this.params.color != null) {
                        this.domElem.css('color', this.params.color);
                    }
                    if (this.params.border != null) {
                        this.domElem.css('border', this.params.border);
                    }
                    if (this.params.borderColor != null) {
                        this.domElem.css('border-color', this.params.borderColor);
                    }
                    if (this.params.borderRadius != null) {
                        this.domElem.css('border-radius', this.params.borderRadius);
                    }
                    if (this.params.state == 1) {
                        this.domElem[0].classList.add('b-checkbox-elem_state-1');
                        this.domElem[0].closest('.b-flex-row').style.cssText += 'pointer-events: none; opacity: 0.5;';
                    }
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick: function() {

            this.domElem[0].classList.add('b-checkbox-elem_state-1');
            this.domElem[0].closest('.b-flex-row').style.cssText += 'pointer-events: none; opacity: 0.5;';
            var project_id = this.params.project_id, fa_act_id = this.params.fa_act_id;
            if(project_id && fa_act_id) {
                var msg = {
                action_name: this.params.action_name,
                selector: ".addRowProjectFAAction",
                project_id: project_id,
                fa_act_id: fa_act_id,
                builder: this.params.builder
            };
            //console.log("builder: ProjectFAReload", msg);
            WSSend(msg);
            }
            
        }
    }));
});