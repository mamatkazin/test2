function ProjectNew(answer){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var  elem = $(answer['selector'])
      , jdata = JSON.parse(answer['data'])
      ; 
    
    elem.empty();
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-project-new',
            js: {
                width: 760
            },
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
                                            cls: 'panel-body search-panel-body',                //'.search-panel-body' по этому классу выбираю все input
                                            attrs: { id: 'panel-body_new_project'},
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
                                                                            js: {
                                                                                verticalAlign: 'middle'
                                                                            },
                                                                            mix: {
                                                                                block: 'l-project-new__width-label',
                                                                            },
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
                                                                    js: {
                                                                        height: 100
                                                                    },
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
                                                            js: true,
                                                            tag: 'textarea',
                                                            cls: 'form-control',
                                                            attrs: { rows: '5', name: 'name', type: 'textarea' },
                                                            content: jdata.Name
                                                        }
                                                    ]
                                                },
                                                // {
                                                //     block: 'b-textarea-field',
                                                //     content: [
                                                //         {
                                                //             elem: 'l-label',
                                                //             mix: { block: 'l-project-new__width-label' },
                                                //             tag: 'label',
                                                //             cls: 'control-label',
                                                //             content: 'Наименование'
                                                //         },
                                                //         {
                                                //             elem: 'name',
                                                //             mix: { block: 't-need-save' },
                                                //             tag: 'textarea',
                                                //             cls: 'form-control',
                                                //             attrs: { rows: '5', name: 'name', type: 'textarea' }
                                                //         }
                                                //     ]
                                                // },
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
                                                                            js: {
                                                                                verticalAlign: 'middle'
                                                                            },
                                                                            tag: 'label',
                                                                            cls: 'control-label',
                                                                            content: 'Шифр'
                                                                        },
                                                                        {
                                                                            elem: 'checkInput',
                                                                            mix: { block: 'b-input t-need-save l-project-new__code' },
                                                                            js: {
                                                                                width: 120
                                                                            },
                                                                            tag: 'input',
                                                                            cls: 'form-control checkInput',
                                                                            attrs: { type: "text", name: 'code' }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            elemMods: { right: '24' },
                                                            content: [
                                                                {
                                                                    block: 'b-input-field',
                                                                    content: [
                                                                        {
                                                                            elem: 'l-label',
                                                                            tag: 'label',
                                                                            js: {
                                                                                verticalAlign: 'middle'
                                                                            },
                                                                            cls: 'control-label',
                                                                            content: 'Стоимость'
                                                                        },
                                                                        {
                                                                            elem: 'checkInputCost',
                                                                            mix: { block: 'b-input t-need-save l-project-new__cost' },
                                                                            js: true,
                                                                            tag: 'input',
                                                                            cls: 'form-control checkInput',
                                                                            attrs: { type: "text", name: 'cost', maxlength: '12' }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-date-field',
                                                                    js: true,
                                                                    content: [
                                                                        {
                                                                            elem: 'l-label',
                                                                            tag: 'label',
                                                                            js: {
                                                                                width: 116,
                                                                                verticalAlign: 'middle'
                                                                            },
                                                                            cls: 'control-label',
                                                                            content: 'Дата завершения'
                                                                        },
                                                                        {
                                                                            elem: 'checkInput',
                                                                            mix: { block: 'b-input t-need-save' },
                                                                            js: {
                                                                                width: 120
                                                                            },
                                                                            tag: 'input',
                                                                            cls: 'form-control pdate checkInput',
                                                                            attrs: { type: "text", name: 'target_date' }
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
                                                        action_name: "ProjectCreate",
                                                        source: '#place_modal_form',
                                                        f_responsible_id: g_heap["f_responsible_id"].toString(),
                                                        user_id: $('input[name="user_id"]').val(),
                                                        selector: '#kot_id_1',
                                                        builder: "ProjectReloadKanbanColumn"
                                                    },
                                                    tag: 'button',
                                                    mods: { padding: 'right'},
                                                    cls: 'btn btn-primary buttonEditCreate',          //'.buttonEditCreate' по этому классу вкл-откл
                                                    attrs: { type: 'button', id: 'new_project_button', disabled: 'disabled' },
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
        
        elem.modal('show'); 
    });
}