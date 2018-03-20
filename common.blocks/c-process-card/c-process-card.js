'use strict';
modules.define('c-process-card', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    
                    this._domEvents(this.findChildElem('code')).on('dblclick', this._onDblClick);
                    this._domEvents(this.findChildElem('main')).on('dblclick', this._onDblClick);
                    
                    this.findChildElem('header').setMod('state-'+this.params.state);
                    
                    var name_elem = this.findChildElem('main').domElem
                      , name_text = name_elem[0].innerHTML
                      ;
                    

                    if (name_text.length > 130) {
                        name_elem.attr('title', name_text)
                        name_text = name_text.substring(0, 125) + '...';
                        name_elem[0].innerHTML = name_text;
                    }
                }
            }
        },
    
        _onDblClick: function() {
            g_heap['task_lavel'] = this.params.lavel;
            g_heap['task_id'] = this.params.task_id;
            g_heap['card_id'] = this.params.id;
            
            WSSend(this.params);
        }
    }));
});

