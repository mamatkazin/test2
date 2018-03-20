function TaskNew(answer){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var  elem = $(answer['selector'])
      , jdata = JSON.parse(answer['data'])
      ; 
    
    elem.empty();
    
    g_heap['task_lavel'] = 1;
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-task-new',
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
                                                    content: 'Новая задача'
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
                                                    block: 'b-combobox-field',
                                                    mix: { block: 'l-task-new__projects' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Проект'
                                                        },
                                                        {
                                                            block: 't-patterns__combobox',
                                                            js: { 
                                                                name: jdata.Projects.Name,
                                                                value_id: jdata.Projects.FirstID,
                                                                value_name: jdata.Projects.FirstValue,
                                                                list: jdata.Projects.List,
                                                                action: 'c-task-new__project'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-input-field',
                                                    mix: { block: 'l-task-new__responsible' },
                                                    attrs: { id: 'TaskNewTeamList'},
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Ответственный'
                                                        },
                                                        {
                                                            elem: 'string',
                                                            mix: { block: 'b-input' },
                                                            tag: 'input',
                                                            cls: 'form-control',
                                                            attrs: { type: "text", readonly: 'readonly' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-textarea-field',
                                                    mix: { block: 'l-task-new__name' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Наименование'
                                                        },
                                                        {
                                                            elem: 'name',
                                                            mix: { block: 't-need-save' },
                                                            tag: 'textarea',
                                                            cls: 'form-control',
                                                            attrs: { rows: '5', name: 'name' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-input-field',
                                                    mix: { block: 'l-task-new__normal-time' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Планируемое количество часов'
                                                        },
                                                        {
                                                            elem: 'integer',
                                                            mix: { block: 'b-input t-need-save' },
                                                            js: true,
                                                            tag: 'input',
                                                            cls: 'form-control',
                                                            attrs: { type: "text", name: 'normal_time' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-date-field',
                                                    mix: { block: 'l-task-new__target-date'},
                                                    js: true,
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Плановая дата завершения'
                                                        },
                                                        {
                                                            elem: 'date',
                                                            mix: { block: 'b-input t-need-save' },
                                                            tag: 'input',
                                                            cls: 'form-control pdate',
                                                            attrs: { type: "text", readonly: "readonly", name: 'target_date' }
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
                                                        action_name: 'TaskCreate1',
                                                        source: '#place_modal_form',
                                                        f_responsible_id: g_heap["f_responsible_id"].toString(),
                                                        f_project_id: g_heap["f_project_id"].toString(),
                                                        parent_id: '0',
                                                        kot_id: '1',
                                                        context: '0',
                                                        user_id: $('input[name="user_id"]').val(),
                                                        selector: '.c-kanban td[data-kot-id="1"]',
                                                        builder: 'ReloadColumn'
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
        
        elem.modal('show'); 
    });
}

function TaskNewForParent(answer){
    var  elem = $(answer['selector'])
      , jdata = JSON.parse(answer['data'])
      ; 
    
    elem.empty();
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-task-new-for-parent',
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
                                                    content: 'Новая задача'
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
//                                                {
//                                                    block: 'b-textarea-field',
//                                                    mix: { block: 'l-task-new__name' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Проект'
//                                                        },
//                                                        {
//                                                            elem: 'name',
//                                                            tag: 'textarea',
//                                                            cls: 'form-control',
//                                                            attrs: { rows: '5', disabled: 'disabled' },
//                                                            content: jdata.ProjectName
////                                                            elem: 'string',
////                                                            mix: { block: 'b-input' },
////                                                            tag: 'input',
////                                                            cls: 'form-control',
////                                                            attrs: { type: "text", value: jdata.ProjectName, disabled: 'disabled' }
//                                                        }
//                                                    ]
//                                                },
//                                                {
//                                                    block: 'b-textarea-field',
//                                                    mix: { block: 'l-task-new__name' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Родительская задача'
//                                                        },
//                                                        {
//                                                            elem: 'name',
//                                                            tag: 'textarea',
//                                                            cls: 'form-control',
//                                                            attrs: { rows: '5', disabled: 'disabled' },
//                                                            content: jdata.ParentName
                                                            
////                                                            elem: 'string',
////                                                            mix: { block: 'b-input' },
////                                                            tag: 'input',
////                                                            cls: 'form-control',
////                                                            attrs: { type: "text", value: jdata.ParentName, disabled: 'disabled' }
//                                                        }
//                                                    ]
//                                                },
                                                {
                                                    block: 'b-combobox-field',
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Ответственный'
                                                        },
                                                        {
                                                            block: 't-patterns__combobox',
                                                            mix:{ block: 'c-task-new-for-parent__responsible' },
                                                            js: { 
                                                                name: jdata.Responsibles.Name,
                                                                value_id: jdata.Responsibles.FirstID,
                                                                value_name: jdata.Responsibles.FirstValue,
                                                                list: jdata.Responsibles.List,
                                                                action: ''
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-textarea-field',
                                                    mix: { block: 'l-task-new__name' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Наименование'
                                                        },
                                                        {
                                                            elem: 'name',
                                                            mix: { block: 't-need-save' },
                                                            tag: 'textarea',
                                                            cls: 'form-control',
                                                            attrs: { rows: '5', name: 'name' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-input-field',
                                                    mix: { block: 'l-task-new__normal-time' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Планируемое количество часов'
                                                        },
                                                        {
                                                            elem: 'integer',
                                                            mix: { block: 'b-input t-need-save' },
                                                            js: true,
                                                            tag: 'input',
                                                            cls: 'form-control',
                                                            attrs: { type: "text", name: 'normal_time' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-date-field',
                                                    mix: { block: 'l-task-new__target-date'},
                                                    js: true,
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Плановая дата завершения'
                                                        },
                                                        {
                                                            elem: 'date',
                                                            mix: { block: 'b-input t-need-save' },
                                                            tag: 'input',
                                                            cls: 'form-control pdate',
                                                            attrs: { type: "text", readonly: "readonly", name: 'target_date' }
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
                                                        action_name: 'TaskCreate',
                                                        source: '#place_modal_form',
                                                        parent_id: jdata.ParentID.toString(),
                                                        project_id: jdata.ProjectID.toString(),
                                                        user_id: $('input[name="user_id"]').val(),
                                                        builder: 'TaskShow'
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
        
        elem.modal('show'); 
    });
}

function NewTaskForProject(answer){
    var  elem = $(answer['selector'])
      , jdata = JSON.parse(answer['data'])
      ; 
    
    elem.empty();
    
    g_heap['task_lavel'] = 1;
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-task-new',
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
                                                    content: 'Новая задача'
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
                                                    mix: { block: 'l-task-new__projects' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Проект'
                                                        },
                                                        {
                                                            elem: 'string',
                                                            mix: { block: 'b-input' },
                                                            tag: 'input',
                                                            cls: 'form-control',
                                                            attrs: { type: "text", value: jdata.ProjectName, disabled: 'disabled' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-combobox-field',
                                                    mix: { block: 'l-task-new__responsible' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Ответственный'
                                                        },
                                                        {
                                                            block: 't-patterns__combobox',
                                                            js: { 
                                                                name: jdata.Responsibles.Name,
                                                                value_id: jdata.Responsibles.FirstID,
                                                                value_name: jdata.Responsibles.FirstValue,
                                                                list: jdata.Responsibles.List,
                                                                action: ''
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-textarea-field',
                                                    mix: { block: 'l-task-new__name' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Наименование'
                                                        },
                                                        {
                                                            elem: 'name',
                                                            mix: { block: 't-need-save' },
                                                            tag: 'textarea',
                                                            cls: 'form-control',
                                                            attrs: { rows: '5', name: 'name' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-input-field',
                                                    mix: { block: 'l-task-new__normal-time' },
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Планируемое количество часов'
                                                        },
                                                        {
                                                            elem: 'integer',
                                                            mix: { block: 'b-input t-need-save' },
                                                            js: true,
                                                            tag: 'input',
                                                            cls: 'form-control',
                                                            attrs: { type: "text", name: 'normal_time' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-date-field',
                                                    mix: { block: 'l-task-new__target-date'},
                                                    js: true,
                                                    content: [
                                                        {
                                                            elem: 'l-label',
                                                            tag: 'label',
                                                            cls: 'control-label',
                                                            content: 'Плановая дата завершения'
                                                        },
                                                        {
                                                            elem: 'date',
                                                            mix: { block: 'b-input t-need-save' },
                                                            tag: 'input',
                                                            cls: 'form-control pdate',
                                                            attrs: { type: "text", readonly: "readonly", name: 'target_date' }
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
                                                        action_name: 'TaskCreate1',
                                                        source: '#place_modal_form',
                                                        selector: '.c-project-show .c-kanban td[data-kot-id="1"]',
                                                        builder: 'ReloadColumn',
                                                        f_responsible_id: g_heap["f_responsible_id"].toString(),
                                                        f_project_id: jdata.ProjectID.toString(),
                                                        project_id: jdata.ProjectID.toString(),
                                                        parent_id: '0',
                                                        kot_id: '1',
                                                        context: '1',
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
        
        elem.modal('show'); 
    });
}