function TaskEdit(answer){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var elem = $(answer['selector']);
    
    elem.empty();
    
    var jdata = JSON.parse(answer['data']);  
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-task-edit',
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
                                            block: 't-patterns__mform-panel-header',
                                            js: { title: 'Изменение задачи' }
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
                                                    mix: { block: 'l-task-edit__responsible' },
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
                                                            tag: 'textarea',
                                                            mix: { block: 't-need-save' },
                                                            cls: 'form-control',
                                                            attrs: { rows: '10', name: 'name'},
                                                            content: jdata.Task.Name
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-input-field',
                                                    mix: { block: 'l-task-edit__normal-time' },
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
                                                            attrs: { type: "text", name: 'normal_time', value: jdata.Task.NormalTime }
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
                                                            attrs: { type: "text", value: jdata.Task.TargetDate, readonly: "readonly", name: 'target_date' }
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
                                                        action_name: 'TaskUpdate',
                                                        source: answer['selector'],
                                                        builder: 'TaskShow',
                                                        task_id: jdata.Task.ID.toString(),
                                                        user_id: $('input[name="user_id"]').val(),
                                                        project_id: jdata.Task.ProjectID.toString(),
                                                        selector: '#place_content'
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
                                                            content: 'Изменить'
                                                        }
                                                    ] 
                                                },
                                                {
                                                    block: 'c-button-cancel',
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