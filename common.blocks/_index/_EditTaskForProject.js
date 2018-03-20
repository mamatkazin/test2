//function EditTaskForProject(answer){
//    var elem = $(answer['selector']);
    
//    elem.empty();
    
//    var jdata = JSON.parse(answer['data']);  
    
//    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
//            block: 'c-task-edit',
//            cls: 'modal-dialog',
//            content: [
//                {
//                    cls: 'modal-content',
//                    content: [
//                        {
//                            cls: 'modal-body',
//                            content: [
//                                {
//                                    cls: 'panel panel-primary',
//                                    content: [
//                                        {
//                                            block: 't-patterns__mform-panel-header',
//                                            js: { title: 'Изменение задачи' }
//                                        },
//                                        {
//                                            cls: 'panel-body',
//                                            content: [
//                                                {
//                                                    block: 'messenger',
//                                                    content: []
//                                                },
//                                                {
//                                                    block: 'b-combobox-field',
//                                                    mix: { block: 'l-task-edit__responsible' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Ответственный'
//                                                        },
//                                                        {
//                                                            block: 't-patterns__combobox',
//                                                            js: { 
//                                                                name: jdata.Responsibles.Name,
//                                                                value_id: jdata.Responsibles.FirstID,
//                                                                value_name: jdata.Responsibles.FirstValue,
//                                                                list: jdata.Responsibles.List,
//                                                                action: ''
//                                                            }
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
//                                                            content: 'Наименование'
//                                                        },
//                                                        {
//                                                            elem: 'name',
//                                                            tag: 'textarea',
//                                                            mix: { block: 't-need-save' },
//                                                            cls: 'form-control',
//                                                            attrs: { rows: '5', name: 'name'},
//                                                            content: jdata.Task.Name
//                                                        }
//                                                    ]
//                                                },
//                                                {
//                                                    block: 'b-input-field',
//                                                    mix: { block: 'l-task-edit__normal-time' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Планируемое количество часов'
//                                                        },
//                                                        {
//                                                            elem: 'integer',
//                                                            mix: { block: 'b-input t-need-save' },
//                                                            js: true,
//                                                            tag: 'input',
//                                                            cls: 'form-control',
//                                                            attrs: { type: "text", name: 'normal_time', value: jdata.Task.NormalTime }
//                                                        }
//                                                    ]
//                                                },
//                                                {
//                                                    block: 'b-date-field',
//                                                    mix: { block: 'l-task-new__target-date'},
//                                                    js: true,
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Плановая дата завершения'
//                                                        },
//                                                        {
//                                                            elem: 'date',
//                                                            mix: { block: 'b-input t-need-save' },
//                                                            tag: 'input',
//                                                            cls: 'form-control pdate',
//                                                            attrs: { type: "text", value: jdata.Task.TargetDate, readonly: "readonly", name: 'target_date' }
//                                                        }
//                                                    ]
//                                                }
//                                            ]
//                                        },
//                                        {
//                                            block: 'c-modal-form__panel-footer',
//                                            cls: 'panel-footer',
//                                            content: [
//                                                {
//                                                    block: 'b-button-submit',
//                                                    js: {
//                                                        action_name: 'TaskUpdate',
//                                                        source: '#place_modal_form',
//                                                        builder: 'ReloadColumn',
//                                                        task_id: jdata.Task.ID.toString(),
//                                                        user_id: $('input[name="user_id"]').val(),
//                                                        project_id: jdata.Task.ProjectID.toString(),
//                                                        selector: '.c-project-show .c-kanban td[data-kot-id="'+g_heap['task_lavel']+'"]'
//                                                    },
//                                                    tag: 'button',
//                                                    mods: { padding: 'right'},
//                                                    cls: 'btn btn-primary',
//                                                    attrs: { type: 'button' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-glyphicon',
//                                                            tag: 'span',
//                                                            cls: 'glyphicon glyphicon-ok'
//                                                        },
//                                                        {
//                                                            elem: 'text',
//                                                            tag: 'span',
//                                                            content: 'Изменить'
//                                                        }
//                                                    ] 
//                                                },
//                                                {
//                                                    block: 'c-button-cancel',
//                                                    tag: 'button',
//                                                    cls: 'btn btn-default',
//                                                    attrs: { type: 'button', 'data-dismiss': 'modal' },
//                                                    content: [
//                                                        {
//                                                            elem: 'text',
//                                                            tag: 'span',
//                                                            content: 'Отмена'
//                                                        }
//                                                    ] 
//                                                }
//                                            ]
//                                        }
//                                    ]
//                                }
//                            ]
//                        }
//                    ]
//                }
//            ]
//        }));
        
//        elem.modal('show'); 
//    });
//}
//function EditTaskForProject(answer){
//    var elem = $(answer["selector"])
//    elem.empty();

//    var jdata = JSON.parse(answer["data"]); 
    
//    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//        bemDom.append(bemDom.doc.find(answer["selector"]), BEMHTML.apply({
//            block: 'c-task-new',
//            cls: 'modal-dialog',
//            content: [
//                {
//                    cls: 'modal-content',
//                    content: [
//                        {
//                            cls: 'modal-body',
//                            content: [
//                                {
//                                    cls: 'panel panel-primary',
//                                    content: [
//                                        {
//                                            cls: 'panel-heading',
//                                            content: [
//                                                {
//                                                    tag: 'button',
//                                                    cls: 'close',
//                                                    attrs: { type: 'button', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
//                                                    content: 'x'
//                                                },
//                                                {
//                                                    tag: 'h3',
//                                                    cls: 'panel-title modal-title',
//                                                    content: 'Изменение задачи'
//                                                }
//                                            ]
//                                        },
//                                        {
//                                            cls: 'panel-body',
//                                            content: [
//                                                {
//                                                    block: 'messenger',
//                                                    content: []
//                                                },
//                                                {
//                                                    block: 't-need-save',
//                                                    tag: 'input',
//                                                    attrs: { type: 'hidden', name:'task_id', value: jdata.ID }
//                                                },
//                                                {
//                                                    block: 't-need-save',
//                                                    tag: 'input',
//                                                    attrs: { type: 'hidden', name:'lavel', value: jdata.Lavel }
//                                                },
//                                                {
//                                                    block: 't-need-save',
//                                                    tag: 'input',
//                                                    attrs: { type: 'hidden', name:'project_id', value: jdata.Projects.FirstID }
//                                                },
//                                                {
//                                                    block: 'b-input-field',
//                                                    mix: { block: 'l-task-new__projects' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Проект'
//                                                        },
//                                                        {
//                                                            elem: 'integer',
//                                                            mix: { block: 'b-input' },
//                                                            tag: 'input',
//                                                            cls: 'form-control',
//                                                            attrs: { type: "text", value: jdata.Projects.FirstValue, disabled: 'disabled' }
//                                                        }
//                                                    ]
//                                                },
//                                                {
//                                                    block: 'b-combobox-field',
//                                                    mix: { block: 'l-task-new__responsible' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Ответственный'
//                                                        },
//                                                        {
//                                                            block: 't-patterns__combobox',
//                                                            js: { 
//                                                                name: jdata.Responsibles.Name,
//                                                                value_id: jdata.Responsibles.FirstID,
//                                                                value_name: jdata.Responsibles.FirstValue,
//                                                                list: jdata.Responsibles.List,
//                                                                action: ''
//                                                            }
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
//                                                            content: 'Наименование'
//                                                        },
//                                                        {
//                                                            elem: 'name',
//                                                            mix: { block: 't-need-save' },
//                                                            tag: 'textarea',
//                                                            cls: 'form-control',
//                                                            attrs: { rows: '5', name: 'name' },
//                                                            content: jdata.Name
//                                                        }
//                                                    ]
//                                                },
//                                                {
//                                                    block: 'b-input-field',
//                                                    mix: { block: 'l-task-new__normal-time' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Планируемое количество часов'
//                                                        },
//                                                        {
//                                                            elem: 'integer',
//                                                            mix: { block: 'b-input t-need-save' },
//                                                            js: true,
//                                                            tag: 'input',
//                                                            cls: 'form-control',
//                                                            attrs: { type: "text", name: 'normal_time', value: jdata.NormalTime }
//                                                        }
//                                                    ]
//                                                },
//                                                {
//                                                    block: 'b-date-field',
//                                                    mix: { block: 'l-task-new__target-date'},
//                                                    js: true,
//                                                    content: [
//                                                        {
//                                                            elem: 'l-label',
//                                                            tag: 'label',
//                                                            cls: 'control-label',
//                                                            content: 'Плановая дата завершения'
//                                                        },
//                                                        {
//                                                            elem: 'date',
//                                                            mix: { block: 'b-input t-need-save' },
//                                                            tag: 'input',
//                                                            cls: 'form-control pdate',
//                                                            attrs: { type: "text", value: jdata.TargetDate, readonly: "readonly", name: 'target_date' }
//                                                        }
//                                                    ]
//                                                }
//                                            ]
//                                        },
//                                        {
//                                            block: 'l-panel-footer',
//                                            mods: { 'type-form': 'edit' },
//                                            tag: 'div',
//                                            cls: 'panel-footer',
//                                            content: [
//                                                {
//                                                    block: 'b-button-submit',
//                                                    js: {
//                                                        action_name: 'TaskUpdate',
//                                                        source: '#place_modal_form',
//                                                        selector: '.c-project-show .c-kanban td[data-kot-id="'+jdata.Lavel+'"]',
//                                                        builder: 'ReloadTaskColumnForProject',
//                                                        f_responsible_id: $('.c-project-show input[name="f_responsible_id"]').val(),
//                                                        f_project_id: jdata.Projects.FirstID.toString(),
//                                                        user_id: $('input[name="user_id"]').val()
                                                        
//                                                    },
//                                                    mix: { block: "l-edit-process-bt-submit" },
//                                                    tag: 'button',
//                                                    cls: 'btn btn-primary',
//                                                    attrs: { type: 'button' },
//                                                    content: [
//                                                        {
//                                                            elem: 'l-glyphicon',
//                                                            tag: 'span',
//                                                            cls: 'glyphicon glyphicon-ok'
//                                                        },
//                                                        {
//                                                            elem: 'text',
//                                                            tag: 'span',
//                                                            content: 'Изменить'
//                                                        }
//                                                    ] 
//                                                },
//                                                {
//                                                    block: 'c-button-cancel',
//                                                    tag: 'button',
//                                                    cls: 'btn btn-default',
//                                                    attrs: { type: 'button', 'data-dismiss': 'modal' },
//                                                    content: [
//                                                        {
//                                                            elem: 'text',
//                                                            tag: 'span',
//                                                            content: 'Отмена'
//                                                        }
//                                                    ] 
//                                                }
//                                            ]
//                                        }
//                                    ]
//                                }
//                            ]
//                        }
//                    ]
//                }
//            ]
//        }));
        
//        elem.modal('show'); 
//    });
//}