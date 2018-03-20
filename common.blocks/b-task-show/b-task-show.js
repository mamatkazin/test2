'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
function _TaskShow(jdata, selector){
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(selector), BEMHTML.apply({
            block: 'b-task-show',
            content: [
                {
                    elem: 'data',
                    content: (function() {
                        var selector = '.b-task-show__data';
                        
                        _TaskUpdate(jdata, selector);
                    })()
                },
                {
                    elem: 'action',
                    content: [
                        {
                            block: 'b-button-call',
                            js: {
                                action_name: 'TaskEdit',
                                task_id: jdata.Task.ID.toString(),
                                user_id: $('input[name="user_id"]').val(),
                                selector: '#place_modal_form',
                                builder: 'TaskEdit'
                            },
                            tag: 'button',
                            cls: 'btn btn-primary',
                            content: [
                                {
                                    elem: 'glyphicon',
                                    tag: 'span',
                                    cls: 'glyphicon glyphicon-pencil',
                                    attrs: { 'aria-hidden': "true" }
                                },
                                {
                                    elem: 'name',
                                    tag: 'span',
                                    content: ''
                                }
                            ]
                        }
                    ]
                }
            ]
        }));
    });
}

function TaskUpdate(answer){
    $(answer['selector']).empty();
    
    var jdata = JSON.parse(answer['data']); 
    
    _TaskUpdate(jdata, answer['selector']);
}

function _TaskUpdate(jdata, selector){
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
            {
                block: 'b-task-show__label',
                content: [
                    {
                        tag: 'label',
                        content: 'Проект:'
                    },
                    {
                        tag: 'label',
                        content: jdata.Task.ProjectName
                    }
                ]
            },
            {
                block: 'b-task-show__label',
                content: [
                    {
                        tag: 'label',
                        content: 'Задача верхнего уровня:'
                    },
                    {
                        tag: 'label',
                        content: ''
                    }
                ]
            },
            {
                block: 'b-task-show__label',
                content: [
                    {
                        tag: 'label',
                        content: 'Ответственный:'
                    },
                    {
                        tag: 'label',
                        content: jdata.Task.ResponsibleName
                    }
                ]
            },
            {
                block: 'b-task-show__label',
                content: [
                    {
                        tag: 'label',
                        content: 'Наименование:'
                    },
                    {
                        tag: 'label',
                        content: jdata.Task.Name
                    }
                ]
            },
            {
                block: 'b-task-show__label',
                content: [
                    {
                        tag: 'label',
                        content: 'Плановое время:'
                    },
                    {
                        tag: 'label',
                        content: jdata.Task.NormalTime
                    }
                ]
            },
            {
                block: 'b-task-show__label',
                content: [
                    {
                        tag: 'label',
                        content: 'Плановая дата:'
                    },
                    {
                        tag: 'label',
                        content: jdata.Task.TargetDate
                    }
                ]
            }
        ]));
    });
}