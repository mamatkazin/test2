function ProjectEdit(answer){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var elem = $(answer['selector']);
    
    elem.empty();
                                                                                                                      //popup  ИЗМЕНИТЬ ПРОЕКТ
    var jdata = JSON.parse(answer['data']);
    //console.log(jdata)
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
                                                    content: 'Изменить проект'
                                                }
                                            ]
                                        },
                                        {
                                            cls: 'panel-body search-panel-body',                  //'.search-panel-body' по этому классу выбираю все input
                                            attrs: { id: 'panel-body_change_project'},
                                            content: [
                                                {
                                                    block: 'messenger'
                                                },
                                                {
                                                    tag: 'input',
                                                    attrs: { type: 'hidden', name:'project_id', value: jdata.Project.ID }
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
                                                                            //mix: { block: 'l-project-new__responsible' },
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
//                                                         {
//                                                             elem: 'cell',
//                                                             content: [
//                                                                 {
//                                                                     block: 'b-input-field',
//                                                                     content: [
//                                                                         {
//                                                                             elem: 'l-label',
//                                                                             tag: 'label',
//                                                                             cls: 'control-label',
//                                                                             content: 'Тип'
//                                                                         },
//                                                                         {
//                                                                             elem: 'string',
//                                                                             mix: { block: 'b-input' },
//                                                                             tag: 'input',
//                                                                             cls: 'form-control',
//                                                                             attrs: { type: "text", value: jdata.Types.FirstValue, readonly: "readonly" }
//                                                                         }
//                                                                     ]
//
// //                                                                    block: 'b-combobox-field',
// //                                                                    mix: { block: 'l-project-new__type' },
// //                                                                    content: [
// //                                                                        {
// //                                                                            elem: 'l-label',
// //                                                                            tag: 'label',
// //                                                                            cls: 'control-label',
// //                                                                            content: 'Тип'
// //                                                                        },
// //                                                                        {
// //                                                                            block: 't-patterns__combobox',
// //                                                                            js: {
// //                                                                                name: jdata.Types.Name,
// //                                                                                value_id: jdata.Types.FirstID,
// //                                                                                value_name: jdata.Types.FirstValue,
// //                                                                                list: jdata.Types.List,
// //                                                                                action: ''
// //                                                                            }
// //                                                                        }
// //                                                                    ]
//                                                                 }
//                                                             ]
//                                                         }
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
                                                            content: jdata.Project.Name
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
                                                                            elem: 'checkInput',
                                                                            js: {
                                                                                width: 120
                                                                            },
                                                                            mix: { block: 'b-input t-need-save l-project-new__code' },
                                                                            tag: 'input',
                                                                            cls: 'form-control checkInput',
                                                                            attrs: { type: "text", name: 'code', value: jdata.Project.Code }
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
                                                                            cls: 'control-label',
                                                                            content: 'Стоимость'
                                                                        },
                                                                        {
                                                                            elem: 'checkInputCost',
                                                                            mix: { block: 'b-input t-need-save' },
                                                                            js: {
                                                                                width: 120
                                                                            },
                                                                            tag: 'input',
                                                                            cls: 'form-control checkInput',
                                                                            attrs: { type: "text", name: 'cost', value: jdata.Project.Cost, maxlength: '12' }
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
                                                                                width: 88
                                                                            },
                                                                            tag: 'input',
                                                                            cls: 'form-control pdate checkInput',
                                                                            attrs: { type: "text", name: 'target_date', value: jdata.Project.TargetDate }
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
                                                        action_name: "ProjectUpdate",
                                                        source: '#place_modal_form',
                                                        project_id: jdata.Project.ID.toString(),
                                                        user_id: $('input[name="user_id"]').val(),
                                                        selector: '.c-project-show-1__common-data',
                                                        builder: 'ProjectUpdate'
                                                        
                                                    },
                                                    tag: 'button',
                                                    mods: { padding: 'right'},
                                                    cls: 'btn btn-primary buttonEditCreate',           //'.buttonEditCreate' по этому классу вкл-откл
                                                    attrs: { type: 'button', disabled: 'disabled'  },
                                                    content: [
                                                        {
                                                            elem: 'l-glyphicon',
                                                            tag: 'span',
                                                            cls: 'glyphicon glyphicon-ok'
                                                        },
                                                        {
                                                            elem: 'text',
                                                            tag: 'span',
                                                            content: 'Изменить'
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
        
        $(elem).modal('show');

    });
}
                                                                                                                      //ОЦЕНИТЬ ТРУДОЗАТРАТЫ
function ProjectTemplate(answer){
    var elem = $(answer['selector']);
    
    elem.empty();
    
    var jdata = JSON.parse(answer['data']);


    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
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
                                                    attrs: { type: 'button', 'data-dismiss': 'modal', 'aria-hidden': 'true', style: 'color: white; opacity: 1' },
                                                    content: 'x'
                                                },
                                                {
                                                    tag: 'h3',
                                                    cls: 'panel-title modal-title',
                                                    content: 'Оценить трудозатраты'
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
                                                    block: 'c-project-template',
                                                    content: [
                                                        {
                                                            elem: 'caption',
                                                            elemMods: { property: 'size'},
                                                            content: [
                                                                {
                                                                    block: 'c-project-title',
                                                                    content: [
                                                                        {
                                                                            block: 'b-flex-row',
                                                                            content:[
                                                                                {
                                                                                    block: 'b-flex-column',
                                                                                    content:[
                                                                                        {
                                                                                            block: 'b-flex-row',
                                                                                            content:[
                                                                                                {
                                                                                                    block: 'b-label-field',
                                                                                                    js: {
                                                                                                        width: 50,
                                                                                                        marginTop: 8
                                                                                                    },
                                                                                                    cls: 'margin-0-8px',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'l-label',
                                                                                                            tag: 'label',
                                                                                                            js: {
                                                                                                                width: 50,
                                                                                                                /*fontWeight: 600*/
                                                                                                            },
                                                                                                            content: 'Шаблон'
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    block: 't-patterns__combobox',
                                                                                                    js: {
                                                                                                        name: jdata.Templates.Name,
                                                                                                        value_id: jdata.Templates.FirstID,
                                                                                                        value_name: jdata.Templates.FirstValue,
                                                                                                        list: jdata.Templates.List,
                                                                                                        action: 'c-project-show__template',
                                                                                                        width: 625
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            block: 'b-flex-row',
                                                                                            content:[
                                                                                                {
                                                                                                    block: 'b-label-field',
                                                                                                    js: {
                                                                                                        width: 50,
                                                                                                        marginTop: 8
                                                                                                    },
                                                                                                    cls: 'margin-0-8px',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'l-label',
                                                                                                            tag: 'label',
                                                                                                            js: {
                                                                                                                width: 50,
                                                                                                                /*fontWeight: 600*/
                                                                                                            },
                                                                                                            content: 'Вид'
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    block: 'b-input',
                                                                                                    js: {
                                                                                                        width: 625
                                                                                                    },
                                                                                                    attrs: { disabled: 'disabled', id: 'template_kind_id' }
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block: 'b-flex-column',
                                                                                    content:[
                                                                                        {
                                                                                            block: 'b-flex-row',
                                                                                            content:[
                                                                                                {
                                                                                                    block: 'b-label-field',
                                                                                                    js: {
                                                                                                        width: 240,
                                                                                                        marginTop: 8
                                                                                                    },
                                                                                                    cls: 'margin-0-8px',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'l-label',
                                                                                                            tag: 'label',
                                                                                                            js: { width: 140 },
                                                                                                            content: 'Общая трудоемкость'
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'label',
                                                                                                            tag: 'label',
                                                                                                            js: { width: 100 },
                                                                                                            cls: 'margin-0-8px',
                                                                                                            attrs: { id: 'projectEditCost'},
                                                                                                            content: '0'
                                                                                                        }
                                                                                                    ]
                                                                                                },

                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            block: 'b-flex-row',
                                                                                            content:[
                                                                                                {
                                                                                                    block: 'b-label-field',
                                                                                                    js: {
                                                                                                        width: 240,
                                                                                                        marginTop: 16
                                                                                                    },
                                                                                                    cls: 'margin-0-8px',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'l-label',
                                                                                                            tag: 'label',
                                                                                                            js: { width: 140 },
                                                                                                            content: 'Стоимость'
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'label',
                                                                                                            tag: 'label',
                                                                                                            js: { width: 100 },
                                                                                                            cls: 'margin-0-8px',
                                                                                                            content: ''
                                                                                                        }
                                                                                                    ]
                                                                                                },

                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            elem: 'table'
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            block: 'c-modal-form__panel-footer',
                                            cls: 'panel-footer',
                                            content: [
                                                {
                                                    block: 'b-button-submit',
                                                    mix: {
                                                        block: 'c-button-template',
                                                        js: {
                                                            action_name: 'ProjectUpdateTemplate',
                                                            project_id: jdata.ProjectID.toString(),
                                                            user_id: $('input[name="user_id"]').val(),
                                                            template_id: answer['template_id'],
                                                            kind_id: answer['kind_id'],
                                                            selector: '.c-project-show-1__tasks',
                                                            builder: 'ProjectUpdateTemplate'
                                                        }
                                                    },
                                                    tag: 'button',
                                                    mods: { padding: 'right' },
                                                    cls: 'btn btn-primary',
                                                    attrs: { type: 'button'},
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
        
        $(elem).modal('show'); 
    });
}

function ProjectEditTasks(answer){
    var elem = $(answer['selector']);
    
    elem.empty();
    
    var jdata = JSON.parse(answer['data']);
    //console.log('ProjectEditTasks jdata', jdata);
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
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
                                                    content: 'Оценить трудозатраты'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-flex-column',
                                            js: {
                                                paddingTop: 16,
                                                paddingRight: 16,
                                                paddingLeft: 16
                                            },
                                            content: [
                                                {
                                                    block: 'b-label-field',
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            elemMods: { size: 'width55px' },
                                                            tag: 'label',
                                                            content: 'Шаблон'
                                                        },
                                                        {
                                                            elem: 'label',
                                                            elemMods: { size: 'width388px' },
                                                            tag: 'label',
                                                            content: ''//jdata.Project.TemplateName
                                                        },

                                                        {
                                                            elem: 'l-label',
                                                            elemMods: { size: 'width135px' },
                                                            tag: 'label',
                                                            content: 'Общая трудоемкость'
                                                        },
                                                        {
                                                            elem: 'label',
                                                            elemMods: { size: 'width300px' },
                                                            tag: 'label',
                                                            attrs: { id: 'to_assess_the_work_complexity'},            //отображение 'Общая трудоемкость'
                                                            content: ''
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-label-field',
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            elemMods: { size: 'width55px' },
                                                            tag: 'label',
                                                            content: 'Вид'
                                                        },
                                                        {
                                                            elem: 'label',
                                                            elemMods: { size: 'width388px' },
                                                            tag: 'label',
                                                            content:''// jdata.Project.KindName
                                                        },

                                                        {
                                                            elem: 'l-label',
                                                            elemMods: { size: 'width135px' },
                                                            tag: 'label',
                                                            content: 'Стоимость'
                                                        },
                                                        {
                                                            elem: 'label',
                                                            js: { maxlength: '12' },
                                                            elemMods: { size: 'width300px' },
                                                            tag: 'label',
                                                            content:(function() {
                                                                // if (! $.isEmptyObject(jdata.Cost)) {
                                                                //     return enterExitCost(jdata);
                                                                // } else {
                                                                //     return '0';
                                                                // }
                                                            })(),
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            cls: 'panel-body',
                                            content: [
                                                {
                                                    block: 'messenger'
                                                },
                                                {
                                                    block: 'c-project-template',
                                                    content: [
                                                        {
                                                            elem: 'caption',
                                                            content: [
                                                            ]
                                                        },
                                                        {
                                                            elem: 'table',
                                                            content: (function() {
                                                                var selector = '.c-project-template__table';
                                                                                                                      //Загружается таблица ОЦЕНИТЬ ТРУДОЗАТРАТЫ
                                                                _ProjectLoadPartitions(selector, jdata);
                                                            })()
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
                                                    mix: {
                                                        block: 'c-button-template',
                                                        js: {
                                                            action_name: 'ProjectUpdatePartitions',
                                                            project_id: answer['project_id'],
                                                            user_id: $('input[name="user_id"]').val(),
                                                            template_id: answer['template_id'],
                                                            kind_id: answer['kind_id'],
                                                            selector: '.__tasks-table',
                                                            builder: 'ProjectUpdateTasks'
                                                        }
                                                    },
                                                    tag: 'button',
                                                    mods: { padding: 'right'},                                        //buttonEditCreate
                                                    cls: 'btn btn-primary',

                                                    attrs: { type: 'button', id: 'buttonCreateWorkComplexity', disabled: 'disabled'},//'buttonCreatePrEd' по этому id вкл-откл



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
        
        $(elem).modal('show'); 
    });
}

function ProjectLoadPartitions(answer){
    _ProjectLoadPartitions(answer['selector'], JSON.parse(answer['data']));
}
                                                                                                                      //popup-таблица ОЦЕНИТЬ ТРУДОЗАТРАТЫ
function _ProjectLoadPartitions(selector, jdata){
    var  elem = $(selector);
    //console.log('popup-таблица ОЦЕНИТЬ ТРУДОЗАТРАТЫ jdata', jdata);
    elem.empty();

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.update(bemDom.doc.find(selector), BEMHTML.apply({
        content: [
            {
                block: 'b-flex-column',
                tag: 'div',
                js: {},
                cls: 'border',
                content: [
                    {
                        block: 'b-flex-row',
                        tag: 'div',
                        js: {

                        },
                        cls: 'borderBottom',
                        content: [
                            {
                                block: 'b-flex-row',
                                tag: 'div',
                                js: {
                                    width: 32,
                                    height: 32,
                                    paddingTop: 8
                                },
                                cls: 'borderRight',
                                content: ''
                            },
                            {
                                block: 'b-flex-row',
                                tag: 'div',
                                js: {
                                    width: 160,
                                    height: 32,
                                    paddingTop: 8
                                },
                                cls: 'borderRight',
                                attrs: { style: 'justify-content: center' },
                                content: 'Раздел'
                            },
                            {
                                block: 'b-flex-row',
                                tag: 'div',
                                js: {
                                    width: 520,
                                    height: 32,
                                    paddingTop: 8
                                },
                                cls: 'borderRight',
                                attrs: { style: 'justify-content: center' },
                                content: 'Роль'
                            },
                            {
                                block: 'b-flex-row',
                                tag: 'div',
                                js: {
                                    width: 100,
                                    height: 32,
                                    paddingTop: 8
                                },
                                cls: 'borderRight',
                                attrs: { style: 'justify-content: center' },
                                content: 'Трудоемкость'
                            },
                            {
                                block: 'b-flex-row',
                                tag: 'div',
                                js: {
                                    width: 122,
                                    height: 32,
                                    paddingTop: 8
                                },
                                attrs: { style: 'justify-content: center' },
                                content: 'Дата'
                            }
                        ]
                    },
                    {
                        block: 'b-flex-column',
                        tag: 'div',
                        js: {},
                        cls: 'borderBottom',
                        attrs: { id: 'to_assess_the_work_table'},
                        content: (function() {
                            var partitions = [];

                            if (! $.isEmptyObject(jdata)) {
                                //console.log(jdata)
                                jdata.map(function(i_item) {
                                    partitions.push(
                                    {
                                        block: 'b-flex-row',
                                        tag: 'div',
                                        js: {},
                                        cls: 'borderBottom table_rowTop',
                                        content: [
                                            {
                                                block: 'b-flex-row',
                                                js: {
                                                    width: 32,
                                                    padding: 6
                                                },
                                                tag: 'div',
                                                cls: 'borderRight',
                                                attrs: { style: 'justify-content: center'},
                                                content: [
                                                    {
                                                        block: 'b-checkbox',
                                                        tag: 'input',
                                                        //mix: { block: 'c-input-integer-sum', js: true },
                                                        js: {
                                                            obligatory: i_item.Obligatory,
                                                            task_id: i_item.TaskID
                                                        },
                                                        attrs: {
                                                            type: 'checkbox',
                                                            name: 'part_'+i_item.ID.toString(),
                                                            value: i_item.Obligatory.toString(),
                                                            'data-id': i_item.ID, 'data-obligatory': i_item.Obligatory,
                                                            'data-task-id': i_item.TaskID },
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'b-flex-row',
                                                js: {
                                                    width: 160,
                                                    padding: 8
                                                },
                                                tag: 'div',
                                                cls: 'borderRight',
                                                content: i_item.Name
                                            },
                                            {
                                                block: 'b-flex-column',
                                                js: {},
                                                tag: 'div',
                                                cls: 'column-Parent',
                                                content: (function() {
                                                    var roles = [];

                                                    if (! $.isEmptyObject(i_item.Roles)) {
                                                        i_item.Roles.map(function(ii_item) {

                                                            roles.push(
                                                                {
                                                                    block: 'b-flex-row',
                                                                    tag: 'div',
                                                                    cls: 'borderBottom row-Parent',
                                                                    attrs: {style: 'height: 100%'},
                                                                    content: [
                                                                        {
                                                                            block: 'b-flex-row',
                                                                                tag: 'div',
                                                                            js: {
                                                                                width: 520,
                                                                                paddingTop: 4,
                                                                                paddingLeft: 8
                                                                            },
                                                                            cls: 'borderRight',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-checkbox-field',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'checkbox',
                                                                                            js: { obligatory: ii_item.Obligatory, task_id: ii_item.TaskID },
                                                                                            mix: { block: 'c-input-integer-sum', js: true },
                                                                                            tag: 'input',
                                                                                            attrs: {
                                                                                                type: 'checkbox',
                                                                                                name: 'role_'+ii_item.ID.toString(),
                                                                                                value: ii_item.Obligatory.toString(),
                                                                                                'data-id': ii_item.ID,
                                                                                                'data-obligatory': ii_item.Obligatory,
                                                                                                'data-partition-id': i_item.ID,
                                                                                                'data-task-id': ii_item.TaskID
                                                                                            }
                                                                                        },
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block: 'b-flex-row',
                                                                                    tag: 'div',
                                                                                    js: {
                                                                                        paddingTop: 4,
                                                                                        paddingBottom: 8,
                                                                                        paddingLeft: 8
                                                                                    },
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'name',
                                                                                            tag: 'span',
                                                                                            content: ii_item.Name
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'b-flex-row',
                                                                            tag: 'div',
                                                                            js: {
                                                                                width: 100,
                                                                                paddingTop: 3.5,
                                                                                paddingLeft: 6
                                                                            },
                                                                            cls: 'borderRight',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-input-field',
                                                                                    content: {
                                                                                        elem: 'checkInput',
                                                                                        tag: 'input',
                                                                                        js: {
                                                                                            width: 84,
                                                                                            height: 26
                                                                                        },
                                                                                        mix: { block: 'c-input-integer-sum', js: true },
                                                                                        mods: { property : 'position'},
                                                                                        cls: 'b-input textAlignCenter numberInput',
                                                                                        attrs: {
                                                                                            type: 'text',
                                                                                            name: 'h_'+ii_item.ID.toString(),
                                                                                            'data-id': ii_item.ID,
                                                                                            'data-partition-id': i_item.ID,
                                                                                            'data-role-id': ii_item.ID,
                                                                                            value: ii_item.H.toString(),
                                                                                            maxlength: 8
                                                                                        },
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'b-flex-row',
                                                                            tag: 'div',
                                                                            js: {
                                                                                width: 122,
                                                                                paddingTop: 3.5,
                                                                                paddingLeft: 18
                                                                            },
                                                                            cls: '',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-date-field',
                                                                                    js: { min_date: -1000 },
                                                                                    mods: { property : 'position'},
                                                                                    content:
                                                                                        {
                                                                                            elem: 'checkInput',
                                                                                            js: true,
                                                                                            mix: {
                                                                                                block: 'c-input-project-template',
                                                                                                js: true
                                                                                            },
                                                                                            cls: 'pdate b-input dateInput',
                                                                                            tag: 'input',
                                                                                            attrs:
                                                                                                {
                                                                                                    type: 'text',
                                                                                                    name: 'd_'+ii_item.ID.toString(),
                                                                                                    'data-id': ii_item.ID,
                                                                                                    'data-partition-id': i_item.ID,
                                                                                                    'data-role-id': ii_item.ID,
                                                                                                    value: ii_item.D,
                                                                                                    maxlength: 10},

                                                                                        }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            );
                                                        }
                                                        );
                                                    } else {
                                                        roles.push(
                                                            {
                                                                block: 'b-flex-row',
                                                                tag: 'div',
                                                                cls: 'borderBottom',
                                                                attrs: {style: 'height: 100%'},
                                                                content: [
                                                                    {
                                                                        block: 'b-flex-row',
                                                                        tag: 'div',
                                                                        js: {
                                                                            width: 520,
                                                                            paddingTop: 4,
                                                                            paddingLeft: 8
                                                                        },
                                                                        cls: 'borderRight',
                                                                        content: [''
                                                                            // {
                                                                            //     block: 'b-checkbox-field',
                                                                            //     content: [
                                                                            //         {
                                                                            //             elem: 'checkbox',
                                                                            //             js: { obligatory: i_item.Obligatory, task_id: i_item.TaskID },
                                                                            //             tag: 'input',
                                                                            //             attrs: { type: 'checkbox', name: 'role_'+i_item.ID.toString(), value: i_item.Obligatory.toString(), 'data-id': i_item.ID, 'data-obligatory': i_item.Obligatory, 'data-partition-id': i_item.ID, 'data-task-id': i_item.TaskID }
                                                                            //         }
                                                                            //     ]
                                                                            // },
                                                                            // {
                                                                            //     elem: 'name',
                                                                            //     tag: 'span',
                                                                            //     content: i_item.Name
                                                                            // }
                                                                        ]
                                                                    },
                                                                    {
                                                                        block: 'b-flex-row',
                                                                        tag: 'div',
                                                                        js: {
                                                                            width: 100,
                                                                            paddingTop: 7,
                                                                            paddingLeft: 6
                                                                        },
                                                                        cls: 'borderRight',
                                                                        content: [
                                                                            {
                                                                                block: 'b-input-field',
                                                                                content: {
                                                                                    elem: 'checkInput',
                                                                                    tag: 'input',
                                                                                    js: {
                                                                                        width: 84,
                                                                                        height: 26
                                                                                    },
                                                                                    mix: { block: 'c-input-integer-sum', js: true },
                                                                                    mods: { property : 'position'},
                                                                                    cls: 'b-input textAlignCenter numberInput',
                                                                                    attrs:
                                                                                        {
                                                                                            type: 'text',
                                                                                            name: 'h_'+i_item.ID.toString(),
                                                                                            'data-id': i_item.ID,
                                                                                            'data-partition-id': i_item.ID,
                                                                                            'data-role-id': 0,
                                                                                            value: i_item.H.toString(),
                                                                                            maxlength: 8
                                                                                        },
                                                                                    attrs: { type: 'text', name: 'h_'+i_item.ID.toString(), 'data-id': i_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': '0', value: i_item.H.toString(), maxlength: 8 },
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        block: 'b-flex-row',
                                                                        tag: 'div',
                                                                        js: {
                                                                            width: 122,
                                                                            paddingTop: 7,
                                                                            paddingLeft: 18
                                                                        },
                                                                        cls: '',
                                                                        content: [
                                                                            // {
                                                                            //     block: 'b-date-field',
                                                                            //     js: { min_date: -1000 },
                                                                            //     mods: { property : 'position'},
                                                                            //     mix: {
                                                                            //         block: 'c-input-project-template',
                                                                            //         js: true
                                                                            //     },
                                                                            //     cls: 'pdate b-input',
                                                                            //     tag: 'input',
                                                                            //     attrs: { type: 'text', name: 'd_'+i_item.ID.toString(), 'data-id': i_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': 0, value: i_item.D },
                                                                            //     content: ''
                                                                            // },
                                                                            {
                                                                                block: 'b-date-field',
                                                                                js: { min_date: -1000 },
                                                                                mods: { property : 'position'},
                                                                                content:
                                                                                    {
                                                                                        elem: 'checkInput',
                                                                                        js: true,
                                                                                        mix: {
                                                                                            block: 'c-input-project-template',
                                                                                            js: true
                                                                                        },
                                                                                        cls: 'pdate b-input dateInput',
                                                                                        tag: 'input',
                                                                                        attrs:
                                                                                            {
                                                                                                type: 'text',
                                                                                                name: 'd_'+i_item.ID.toString(),
                                                                                                'data-id': i_item.ID,
                                                                                                'data-partition-id': i_item.ID,
                                                                                                'data-role-id': 0,
                                                                                                value: i_item.D,
                                                                                                maxlength: 10,
                                                                                            },
                                                                                        attrs: { type: 'text', name: 'd_'+i_item.ID.toString(), 'data-id': i_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': '0', value: i_item.D, maxlength: 10 },
                                                                                    }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        );
                                                    }
                                                    return roles;
                                                })()
                                            },
                                            // {
                                            //     tag: 'td',
                                            //     content: (function() {
                                            //         var roles = [];
                                            //
                                            //         if (! $.isEmptyObject(i_item.Roles)) {
                                            //             i_item.Roles.map(function(ii_item) {
                                            //
                                            //                 roles.push(
                                            //                     {
                                            //                         block: 'b-input',
                                            //                         cls: 'b-input',
                                            //                         js: true,
                                            //                         mods: { property : 'position'},
                                            //                         mix: {
                                            //                             block: 'c-input-project-template',
                                            //                             js: true,
                                            //                             block: 'b-input-integer',
                                            //                             js: true,
                                            //                             block: 'c-input-integer-sum',
                                            //                             js: true
                                            //                         },
                                            //                         tag: 'input',
                                            //                         attrs: { type: 'text', name: 'h_'+ii_item.ID.toString(), 'data-id': ii_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': ii_item.ID, value: ii_item.H.toString() },
                                            //                         content: ''
                                            //                     }
                                            //                 );
                                            //             });
                                            //         } else {
                                            //             roles.push(
                                            //                 {
                                            //                     block: 'b-input',
                                            //                     cls: 'b-input',
                                            //                     js: true,
                                            //                     mods: { property : 'position'},
                                            //                     mix: {
                                            //                         block: 'c-input-project-template',
                                            //                         js: true,
                                            //                         block: 'b-input-integer',
                                            //                         js: true,
                                            //                         block: 'c-input-integer-sum',
                                            //                         js: true
                                            //                     },
                                            //                     tag: 'input',
                                            //                     attrs: { type: 'text', name: 'h_'+i_item.ID.toString(), 'data-id': i_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': 0, value: i_item.H.toString() },
                                            //                     content: ''
                                            //                 }
                                            //             );
                                            //         }
                                            //
                                            //         return roles;
                                            //     })()
                                            // },
                                            // {
                                            //     tag: 'td',
                                            //     content: (function() {
                                            //         var roles = [];
                                            //
                                            //         if (! $.isEmptyObject(i_item.Roles)) {
                                            //             i_item.Roles.map(function(ii_item) {
                                            //
                                            //                 roles.push(
                                            //                     {
                                            //                         block: 'b-date-field',
                                            //                         js: { min_date: -1000 },
                                            //                         mods: { property : 'position'},
                                            //                         mix: {
                                            //                             block: 'c-input-project-template',
                                            //                             js: true
                                            //                         },
                                            //                         cls: 'pdate b-input',
                                            //                         tag: 'input',
                                            //                         attrs: { type: 'text', name: 'd_'+ii_item.ID.toString(), 'data-id': ii_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': ii_item.ID, value: ii_item.D },
                                            //                         content: ''
                                            //                     }
                                            //                 );
                                            //             });
                                            //         } else {
                                            //             roles.push(
                                            //                 {
                                            //                     block: 'b-date-field',
                                            //                     js: { min_date: -1000 },
                                            //                     mods: { property : 'position'},
                                            //                     mix: {
                                            //                         block: 'c-input-project-template',
                                            //                         js: true
                                            //                     },
                                            //                     cls: 'pdate b-input',
                                            //                     tag: 'input',
                                            //                     attrs: { type: 'text', name: 'd_'+i_item.ID.toString(), 'data-id': i_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': 0, value: i_item.D },
                                            //                     content: ''
                                            //                 }
                                            //             );
                                            //         }
                                            //
                                            //         return roles;
                                            //     })()
                                            // }
                                        ]
                                    });
                                });
                            }

                             return partitions;
                         })()
                    }
                ]
            }
        ]
    }));
    // Таблица отрисовалась здесь
    checkTheOccupancyTable();
    function checkTheOccupancyTable() {

    }
});
}
 //                                                                                                             ОЦЕНИТЬ ТРУДОЗАТРАТЫ ТАБЛИЦА СНИЗУ
// function _ProjectLoadPartitions(selector, jdata){
//     var  elem = $(selector);
//
//     elem.empty();
//
//     modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//         bemDom.update(bemDom.doc.find(selector), BEMHTML.apply({
//             content: [
//                 {
//                     block: 'c-laboriousness',
//                     tag: 'table',
//                     cls: 'table table-bordered',
//                     content: [
//                         {
//                             tag: 'thead',
//                             content: [
//                                 {
//                                     tag: 'tr',
//                                     content: [
//                                         {
//                                             tag: 'th',
//                                             cls: 'table__row_property',
//                                             content: ''
//                                         },
//                                         {
//                                             tag: 'th',
//                                             cls: 'table__row_property',
//                                             content: 'Раздел'
//                                         },
//                                         {
//                                             tag: 'th',
//                                             cls: 'table__row_property',
//                                             content: 'Роль'
//                                         },
//                                         {
//                                             tag: 'th',
//                                             cls: 'table__row_property',
//                                             content: 'Трудоемкость'
//                                         },
//                                         {
//                                             tag: 'th',
//                                             cls: 'table__row_property',
//                                             content: 'Дата'
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             tag: 'tbody',
//                             content: (function() {
//                                 var partitions = [];
//
//                                 if (! $.isEmptyObject(jdata)) {
//                                     jdata.map(function(i_item) {
//
//                                         partitions.push({
//                                             tag: 'tr',
//                                             content: [
//                                                 {
//                                                     tag: 'td',
//                                                     content: [
//                                                         {
//                                                             block: 'b-checkbox',
//                                                             tag: 'input',
//                                                             js: { obligatory: i_item.Obligatory, task_id: i_item.TaskID },
//                                                             attrs: { type: 'checkbox', name: 'part_'+i_item.ID.toString(), value: i_item.Obligatory.toString(), 'data-id': i_item.ID, 'data-obligatory': i_item.Obligatory, 'data-task-id': i_item.TaskID }
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     tag: 'td',
//                                                     cls: 'width160px',
//                                                     content: i_item.Name
//                                                 },
//                                                 {
//                                                     tag: 'td',
//                                                     content: (function() {
//                                                         var roles = [];
//
//                                                         if (! $.isEmptyObject(i_item.Roles)) {
//                                                             i_item.Roles.map(function(ii_item) {
//
//                                                                 roles.push(
//                                                                     {
//                                                                         block: 'b-checkbox-field',
//                                                                         mods: { property: 'size'},
//                                                                         content: [
//                                                                             {
//                                                                                 elem: 'checkbox',
//                                                                                 js: { obligatory: ii_item.Obligatory, task_id: ii_item.TaskID },
//                                                                                 tag: 'input',
//                                                                                 attrs: { type: 'checkbox', name: 'role_'+ii_item.ID.toString(), value: ii_item.Obligatory.toString(), 'data-id': ii_item.ID, 'data-obligatory': ii_item.Obligatory, 'data-partition-id': i_item.ID, 'data-task-id': ii_item.TaskID }
//                                                                             },
//                                                                             {
//                                                                                 elem: 'name',
//                                                                                 tag: 'span',
//                                                                                 content: ii_item.Name
//                                                                             }
//                                                                         ]
//                                                                     }
//                                                                 );
//                                                             });
//                                                         }
//
//                                                         return roles;
//                                                     })()
//                                                 },
//                                                 {
//                                                     tag: 'td',
//                                                     content: (function() {
//                                                         var roles = [];
//
//                                                         if (! $.isEmptyObject(i_item.Roles)) {
//                                                             i_item.Roles.map(function(ii_item) {
//
//                                                                 roles.push(
//                                                                     {
//                                                                         block: 'b-input',
//                                                                         cls: 'b-input',
//                                                                         js: true,
//                                                                         mods: { property : 'position'},
//                                                                         mix: {
//                                                                             block: 'c-input-project-template',
//                                                                             js: true,
//                                                                             block: 'b-input-integer',
//                                                                             js: true,
//                                                                             block: 'c-input-integer-sum',
//                                                                             js: true
//                                                                         },
//                                                                         tag: 'input',
//                                                                         attrs: { type: 'text', name: 'h_'+ii_item.ID.toString(), 'data-id': ii_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': ii_item.ID, value: ii_item.H.toString() },
//                                                                         content: ''
//                                                                     }
//                                                                 );
//                                                             });
//                                                         } else {
//                                                             roles.push(
//                                                                 {
//                                                                     block: 'b-input',
//                                                                     cls: 'b-input',
//                                                                     js: true,
//                                                                     mods: { property : 'position'},
//                                                                     mix: {
//                                                                         block: 'c-input-project-template',
//                                                                         js: true,
//                                                                         block: 'b-input-integer',
//                                                                         js: true,
//                                                                         block: 'c-input-integer-sum',
//                                                                         js: true
//                                                                     },
//                                                                     tag: 'input',
//                                                                     attrs: { type: 'text', name: 'h_'+i_item.ID.toString(), 'data-id': i_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': 0, value: i_item.H.toString() },
//                                                                     content: ''
//                                                                 }
//                                                             );
//                                                         }
//
//                                                         return roles;
//                                                     })()
//                                                 },
//                                                 {
//                                                     tag: 'td',
//                                                     content: (function() {
//                                                         var roles = [];
//
//                                                         if (! $.isEmptyObject(i_item.Roles)) {
//                                                             i_item.Roles.map(function(ii_item) {
//
//                                                                 roles.push(
//                                                                     {
//                                                                         block: 'b-date-field',
//                                                                         js: { min_date: -1000 },
//                                                                         mods: { property : 'position'},
//                                                                         mix: {
//                                                                             block: 'c-input-project-template',
//                                                                             js: true
//                                                                         },
//                                                                         cls: 'pdate b-input',
//                                                                         tag: 'input',
//                                                                         attrs: { type: 'text', name: 'd_'+ii_item.ID.toString(), 'data-id': ii_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': ii_item.ID, value: ii_item.D },
//                                                                         content: ''
//                                                                     }
//                                                                 );
//                                                             });
//                                                         } else {
//                                                             roles.push(
//                                                                 {
//                                                                     block: 'b-date-field',
//                                                                     js: { min_date: -1000 },
//                                                                     mods: { property : 'position'},
//                                                                     mix: {
//                                                                         block: 'c-input-project-template',
//                                                                         js: true
//                                                                     },
//                                                                     cls: 'pdate b-input',
//                                                                     tag: 'input',
//                                                                     attrs: { type: 'text', name: 'd_'+i_item.ID.toString(), 'data-id': i_item.ID, 'data-partition-id': i_item.ID, 'data-role-id': 0, value: i_item.D },
//                                                                     content: ''
//                                                                 }
//                                                             );
//                                                         }
//
//                                                         return roles;
//                                                     })()
//                                                 }
//                                             ]
//                                        });
//                                     });
//                                 }
//
//                                 return partitions;
//                             })()
//                         }
//                     ]
//                 }
//             ]
//         }));
//     // Таблица отрисовалась здесь
//     //$('#projectEdit_table_headerElem0').remove();
//     //console.log("Таблица отрисовалась здесь ", $('#projectEdit_table_headerElem0'));
//
//     });
// }
//                                                                                                                ЗАМЕНА НИЖНЕГО COMBOBOX ПО КЛИКУ
function ProjectLoadKinds(answer){

    var jdata = JSON.parse(answer['data']);

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 't-patterns__combobox',
            mix: { block: 'l-project-new__responsible' },
            js: {
                name: jdata.Kinds.Name,
                value_id: jdata.Kinds.FirstID,
                value_name: jdata.Kinds.FirstValue,
                list: jdata.Kinds.List,
                action: 'c-project-show__kind',
                width: 625
            },
            attrs: { id: 'template_kind_id'}
        }));

    });
}
                                                                                                                      //НАЗНАЧИТЬ ИСПОЛНИТЕЛЕЙ
function ProjectShowExecuters(answer){
    var elem = $(answer['selector']);

    elem.empty();

    var jdata = JSON.parse(answer['data']);

    //console.log("НАЗНАЧИТЬ ИСПОЛНИТЕЛЕЙ jdata", jdata);

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
        block: 'c-project-new',
        js: true,
        cls: 'modal-dialog',
        mods: { modal : 'size' },
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
                                                content: 'Назначить исполнителей'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'b-flex-row',
                                        content:[
                                            {
                                                block: 'b-label-field',
                                                js: {
                                                    width: 340,
                                                    marginTop: 8,
                                                    marginLeft: 16
                                                },
                                                cls: 'margin-0-8px',
                                                content: [
                                                    {
                                                        elem: 'l-label',
                                                        tag: 'label',
                                                        js: {
                                                            width: 40,
                                                        },
                                                        content: 'Роль'
                                                    },
                                                    {
                                                        elem: 'label',
                                                        tag: 'label',
                                                        js: { width: 300 },
                                                        cls: 'margin-0-8px',
                                                        //attrs: { id: 'appointExecutorsRole'},
                                                        content: 'text'
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'b-label-field',
                                                js: {
                                                    width: 180,
                                                    marginTop: 8
                                                },
                                                cls: 'margin-0-8px',
                                                content: [
                                                    {
                                                        elem: 'l-label',
                                                        tag: 'label',
                                                        js: { width: 140 },
                                                        content: 'Общая трудоемкость'
                                                    },
                                                    {
                                                        elem: 'label',
                                                        tag: 'label',
                                                        js: { width: 80 },
                                                        cls: 'margin-0-8px',
                                                        attrs: { id: 'appointExecutorsCost'},
                                                        content: '0'
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        cls: 'panel-body',
                                        content: [
                                            {
                                                block: 'messenger'
                                            },
                                            {
                                                block: 'c-executers',
                                                mix: { block: 'b-flex-row' },
                                                js: true,
                                                tag: 'div',
                                                cls: 'flex-row',
                                                content: [
                                                    {
                                                        block: 'c-source',
                                                        js: true,
                                                        tag: 'div',
                                                        attrs: {
                                                            'data-lavel': 1,
                                                            ondragenter: "return dragEnterExecuter(event)",
                                                            ondrop: "return dragDropExecuter(event)",
                                                            ondragover: "return dragOverExecuter(event)"
                                                        },
                                                        content: [
                                                            {
                                                                tag: 'table',
                                                                cls: 'table table-hover',
                                                                content: [
                                                                    {
                                                                        tag: 'tbody',
                                                                        content: (function() {
                                                                            var tr = [];

                                                                            // var arr=[1,2,3,4,5];
                                                                            // var value=4;
                                                                            //
                                                                            // arr.splice( $.inArray(value, arr), 1 );

                                                                            if (! $.isEmptyObject(jdata.Staff)) {
                                                                                jdata.Staff.map(function(item) {
                                                                                    tr.push({
                                                                                        tag: 'tr',
                                                                                        cls: 'table_tr_property',
                                                                                        attrs: {
                                                                                            id: 'team_' + item.ID,
                                                                                            'data-lavel': 1,
                                                                                            'data-id': item.ID,
                                                                                            'data-name': item.Name,
                                                                                            draggable: "true",
                                                                                            ondragstart: "return dragStartExecuter(event)",
                                                                                            ondragend: "return dragEndExecuter(event)"
                                                                                        },
                                                                                        content: [
                                                                                            {
                                                                                                tag: 'td',
                                                                                                content: item.Name
                                                                                            }
                                                                                        ]

                                                                                    });
                                                                                });

                                                                            }

                                                                            return tr;
                                                                        })()
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'c-destination',
                                                        tag: 'div',
                                                        js: true,
                                                        attrs: {
                                                            'data-lavel': 2,
                                                            ondragenter: "return dragEnterExecuter(event)",
                                                            ondrop: "return dragDropExecuter(event)",
                                                            ondragover: "return dragOverExecuter(event)"
                                                        },
                                                        content: [
                                                            {
                                                                tag: 'table',
                                                                cls: 'table table-hover',
                                                                attrs: { id: 'containsAppointExecutorsCost'},
                                                                content: [
                                                                    {
                                                                        tag: 'tbody',
                                                                        content: [
                                                                            (function() {
                                                                                if (! $.isEmptyObject(jdata.Executers)) {
                                                                                    jdata.Executers.map(function(item) {
                                                                                        _ProjectAddExecuter('#containsAppointExecutorsCost tbody', item.ID, item.TaskID, item.Name, item.H, item.DPlan, jdata.Executers);
                                                                                    });
                                                                                }
                                                                            })()
                                                                        ]
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
                                                mix: {
                                                    block: 'c-project-executer',
                                                    js: {
                                                        action_name: "ProjectAssignExecuters",
                                                        source: '#place_modal_form',
                                                        project_id: g_heap['card_id'],
                                                        task_id: answer['task_id'],
                                                        user_id: $('input[name="user_id"]').val(),
                                                        selector: '.__tasks-table',
                                                        builder: 'ProjectUpdateTasks'

                                                    }
                                                },
                                                tag: 'button',
                                                mods: { padding: 'right'},
                                                cls: 'btn btn-primary',
                                                attrs: { type: 'button', id: 'changeButton', disabled: 'disabled' },
                                                content: [
                                                    {
                                                        elem: 'l-glyphicon',
                                                        tag: 'span',
                                                        cls: 'glyphicon glyphicon-ok'
                                                    },
                                                    {
                                                        elem: 'text',
                                                        tag: 'span',
                                                        content: 'Изменить'
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

    $(elem).modal('show');

});
}
//Перетаскивание назначенных
function ProjectAddExecuter(answer){

    var id = parseInt(answer.executer_id), arr = [], count, check = true;
    //получаю массив id уже назначенных ответственных. Находятся в правом блоке окна
    $('#containsAppointExecutorsCost tr ').each(function() {
        count = this.id.split('_');
        arr.push(parseInt(count[1]));
    });
    //сравнивает id перетаскиваемого и уже назначенных ответственных
    for(var i = 0; i <= arr.length; i++) {
        if (arr[i] == id){
            check = false;
            break;
        }
    };
    if(check) {
        _ProjectAddExecuter(answer["selector"], answer['executer_id'], 0, answer['executer_name'], 0, "");
        $('#changeButton').prop('disabled', true);
    }

};


function _ProjectAddExecuter(selector, executer_id, task_id, executer_name, data_h, data_d){
    //console.log("НАЗНАЧИТЬ ИСПОЛНИТЕЛЕЙ jdata", jdata);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply({
        tag: 'tr',
        attrs: {
            id: 'team_' + executer_id,
            'data-lavel': 2,
            'data-id': executer_id,
            'data-task-id': task_id,
            draggable: "true",
            ondragstart: "return dragStartTeam(event)",
            ondragend: "return dragEndTeam(event)"
        },
        content: [
            {
                tag: 'td',
                cls: 'width175px verticalAlignMiddle',
                content: executer_name
            },
            {
                tag: 'td',
                content: [
                    {
                        block: 'b-input',
                        mix: {
                            block: 'c-input-integer-s',
                            js: true
                        },
                        js: {
                            width: 88,
                            paddingLeft: 8,
                            paddingRight: 8,
                            textAlign: 'center'
                        },
                        tag: 'input',
                        attrs: { type: 'number', value: data_h }
                    }
                ]
            },
            {
                block: 'b-date-field',
                js: true,
                tag: 'td',
                content: [
                    {
                        block: 'b-input',
                        mix: {
                            block: 'c-date-field',
                            js: true
                        },
                        js: {
                            width: 88,
                            paddingLeft: 8,
                            paddingRight: 8,
                            marginRight: 8
                        },
                        tag: 'input',
                        cls: 'pdate',
                        attrs: { type: 'text', value: data_d }
                    }
                ]
            }
        ]
    }));
    //setDisabledFullInput(jdataExecuters);
});

}
//Устанавливает disabled для уже заполненных input при загрузке Назначить ответственных
function setDisabledFullInput(jdataExecuters) {

    if(jdataExecuters) {
        for(var i = 0; i <=jdataExecuters.length; i++) {
            //находит все input в правой части таблицы
            $('#containsAppointExecutorsCost input').each(function () {
                //$(this).prop('disabled', true);
            });
        }
    }
};