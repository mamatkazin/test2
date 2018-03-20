function ShowTransition2(json_data){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var jdata = JSON.parse(json_data); 
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find('#place_modal_form'), BEMHTML.apply({
            cls: 'modal-dialog',
            content: [
                {
                    cls: 'modal-content',
                    content: [
                        {
                            cls: 'modal-body',
                            content: [
                                {
                                    cls: 'panel panel-primary',
                                    content: [
                                        {
                                            cls: 'panel-heading',
                                            content: [
                                                {
                                                    tag: 'button',
                                                    cls: 'close',
                                                    attrs: { type: 'button', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
                                                    content: 'x'
                                                },
                                                {
                                                    tag: 'h3',
                                                    cls: 'panel-title modal-title',
                                                    content: 'Переход в состояние "Выполнено"'
                                                }
                                            ]
                                        },
                                        {
                                            cls: 'panel-body',
                                            content: [
                                                {
                                                    block: 'messenger',
                                                    content: []
                                                },
                                                {
                                                    block: 'b-input-field',
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Затраченное количество часов'
                                                        },
                                                        {
                                                            elem: 'integer',
                                                            js: true,
                                                            mix: { block: 'b-input' },
                                                            tag: 'input',
                                                            attrs: { type: "text" }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            cls: 'panel-footer',
                                            content: [
                                                {
                                                    block: 'b-button-submit',
                                                    js: true,
                                                    tag: 'button',
                                                    cls: 'btn btn-primary',
                                                    attrs: { type: 'button' },
                                                    content: [
                                                        {
                                                            elem: 'l-glyphicon',
                                                            tag: 'span',
                                                            cls: 'glyphicon glyphicon-ok'
                                                        },
                                                        {
                                                            elem: 'text',
                                                            tag: 'span',
                                                            content: 'Создать'
                                                        }
                                                    ] 
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }));
        
        $('#place_modal_form').modal('show'); 
    });
}