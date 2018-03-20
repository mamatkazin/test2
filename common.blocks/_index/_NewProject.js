function NewProject(json_data){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var jdata = JSON.parse(json_data); 
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find('#place_modal_form'), BEMHTML.apply({
            block: 'c-project-new',
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
                                                    content: 'Новый проект'
                                                }
                                            ]
                                        },
                                        {
                                            cls: 'panel-body',
                                            content: [
                                                {
                                                    block: 'messenger'
                                                },
                                                {
                                                    block: 'b-css-table',
                                                    content: [
                                                        {
                                                            elem: 'cell',
                                                            elemMods: { right: '24' },
                                                            content: [
                                                                {
                                                                    block: 'b-combobox-field',
                                                                    content: [
                                                                        {
                                                                            elem: 'l-label',
                                                                            mix: { block: 'l-project-new__width-label' },
                                                                            tag: 'label',
                                                                            cls: 'control-label',
                                                                            content: 'Ответственный'
                                                                        },
                                                                        {
                                                                            block: 't-patterns__combobox',
                                                                            mix: { block: 'l-project-new__responsible' },
                                                                            js: {
                                                                                name: jdata.Responsibles.Name,
                                                                                value_id: jdata.Responsibles.FirstID,
                                                                                value_name: jdata.Responsibles.FirstValue,
                                                                                list: jdata.Responsibles.List,
                                                                                action: ''
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-combobox-field',
                                                                    mix: { block: 'l-project-new__type' },
                                                                    content: [
                                                                        {
                                                                            elem: 'l-label',
                                                                            tag: 'label',
                                                                            cls: 'control-label',
                                                                            content: 'Тип'
                                                                        },
                                                                        {
                                                                            block: 't-patterns__combobox',
                                                                            js: {
                                                                                name: jdata.Types.Name,
                                                                                value_id: jdata.Types.FirstID,
                                                                                value_name: jdata.Types.FirstValue,
                                                                                list: jdata.Types.List,
                                                                                action: ''
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-textarea-field',
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            mix: { block: 'l-project-new__width-label' },
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Наименование'
                                                        },
                                                        {
                                                            elem: 'name',
                                                            mix: { block: 't-need-save' },
                                                            tag: 'textarea',
                                                            cls: 'form-control',
                                                            attrs: { rows: '5', name: 'name', type: 'textarea' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-combobox-field',
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            mix: { block: 'l-project-new__width-label' },
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Заказчик'
                                                        },
                                                        {
                                                            block: 't-patterns__combobox',
                                                            mix: { block: 'l-project-new__responsible' },
                                                            js: {
                                                                name: jdata.Customers.Name,
                                                                value_id: jdata.Customers.FirstID,
                                                                value_name: jdata.Customers.FirstValue,
                                                                list: jdata.Customers.List,
                                                                action: ''
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-css-table',
                                                    content: [
                                                        {
                                                            elem: 'cell',
                                                            elemMods: { right: '24' },
                                                            content: [
                                                                {
                                                                    block: 'b-input-field',
                                                                    content: [
                                                                        {
                                                                            elem: 'l-label',
                                                                            mix: { block: 'l-project-new__width-label' },
                                                                            tag: 'label',
                                                                            cls: 'control-label',
                                                                            content: 'Шифр'
                                                                        },
                                                                        {
                                                                            elem: 'string',
                                                                            mix: { block: 'b-input t-need-save l-project-new__code' },
                                                                            tag: 'input',
                                                                            cls: 'form-control',
                                                                            attrs: { type: "text", name: 'code' }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-input-field',
                                                                    content: [
                                                                        {
                                                                            elem: 'l-label',
                                                                            tag: 'label',
                                                                            cls: 'control-label',
                                                                            content: 'Стоимость'
                                                                        },
                                                                        {
                                                                            elem: 'float',
                                                                            mix: { block: 'b-input t-need-save' },
                                                                            js: true,
                                                                            tag: 'input',
                                                                            cls: 'form-control',
                                                                            attrs: { type: "text", name: 'cost' }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'c-modal-form__panel-footer',
                                            cls: 'panel-footer',
                                            content: [
                                                {
                                                    block: 'b-button-submit',
                                                    js: {
                                                        action_name: "CreateProject",
                                                        source: '#place_modal_form',
                                                        //f_responsible_id: g_heap["f_responsible_id"].toString(),
                                                        f_sub_name:  g_heap['f_sub_name'],
                                                        f_template_id: g_heap['f_template_id'],
                                                        f_responsible_id: g_heap['f_responsible_id'],
                                                        f_code: g_heap['f_code'],
                                                        user_id: $('input[name="user_id"]').val()
                                                    },
                                                    tag: 'button',
                                                    mods: { padding: 'right'},
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
                                                },
                                                {
                                                    tag: 'button',
                                                    cls: 'btn btn-default',
                                                    attrs: { type: 'button', 'data-dismiss': 'modal' },
                                                    content: [
                                                        {
                                                            elem: 'text',
                                                            tag: 'span',
                                                            content: 'Отмена'
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