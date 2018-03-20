function TaskShow(answer){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    $(answer['selector']).empty();
    
    var jdata = JSON.parse(answer['data']);
    var action_name, builder, caption;
    
    if (jdata.Task.ParentID == 0) {
        action_name = 'TaskKanban';
        builder = 'TaskKanban';
        caption = 'Вернуться к списку задач';
    } else {
        action_name = 'TaskShow';
        builder = 'TaskShow';
        caption = 'Вернуться к задаче';
    }
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-task-show',
            content: [
                {
                    cls: 'panel-primary',
                    content: [
                        {
                            cls: 'panel-heading',
                            content: [
                                {
                                    block: 'b-button-call',
                                    js: {
                                        action_name: action_name,
                                        task_id: jdata.Task.ID.toString(),
                                        user_id: $('input[name="user_id"]').val(),
                                        f_responsible_id: jdata.FParentResponsibleID.toString(),
                                        f_project_id: jdata.FParentProjectID.toString(),
                                        lavel: jdata.Lavel.toString(),
                                        selector: '#place_content',
                                        builder: builder
                                    },
                                    tag: 'button',
                                    cls: 'btn btn-primary',
                                    content: [
                                        {
                                            elem: 'l-glyphicon',
                                            tag: 'span',
                                            cls: 'glyphicon glyphicon-arrow-left',
                                            attrs: { 'aria-hidden': "true" }
                                        },
                                        {
                                            elem: 'name',
                                            tag: 'span',
                                            content: caption
                                        }
                                    ]
                                },
                                {
                                    tag: 'h3',
                                    cls: 'panel-title modal-title',
                                    content: 'Задача: ' + jdata.Task.ShortName
                                }
                            ]
                        },
                        {
                            block: 'c-task-show__content',
                            content: [
                                {
                                    cls: 'tab-nav',
                                    content: [
                                        {
                                            tag: 'ul',
                                            cls: 'nav nav-tabs',
                                            content: [
                                                {
                                                    tag: 'li',
                                                    cls: 'active',
                                                    content: [
                                                        {
                                                            tag: 'a',
                                                            attrs: { 'data-toggle': "tab", href: "#showTaskTasks" },
                                                            content: 'Задачи'
                                                        }
                                                    ]
                                                },
                                                {
                                                    tag: 'li',
                                                    content: [
                                                        {
                                                            tag: 'a',
                                                            attrs: { 'data-toggle': "tab", href: "#showTaskCommon" },
                                                            content: 'Общие'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    cls: 'tab-content',
                                    content: [
                                        {
                                            cls: 'tab-pane fade in active',
                                            attrs: { id: 'showTaskTasks' },
                                            content: (function() {
                                                var selector = '#showTaskTasks';
                                                
                                               // TaskKanbanForTask(jdata, selector)
                                            })()
                                        },
                                        {
                                            cls: 'tab-pane fade',
                                            attrs: { id: 'showTaskCommon' },
                                            content: [
                                                {
                                                    block: 'c-task-show__common',
                                                    content: [
                                                        {
                                                            block: 'c-task-show__common-data',
                                                            content: (function() {
                                                                var selector = '.c-task-show__common-data';
                                                                
                                                                _TaskUpdate(jdata, selector);
                                                            })()
                                                        },
                                                        {
                                                            block: 'c-task-show__common-action',
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
        
        var scrollHeight = Math.max(
            document.documentElement.offsetHeight, document.documentElement.clientHeight
        );
    
        var cellHeight = (scrollHeight - 230).toString() + 'px';

        $('.tab-content').css({'height' : cellHeight});
    });
}

function TaskUpdate(answer){
    $(answer['selector']).empty();
    
    var jdata = JSON.parse(answer['data']); 
    
    _TaskUpdate(answer['selector'], jdata);
}

function _TaskUpdate(jdata, selector){
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
            {
                block: 'c-task-show__label',
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
                block: 'c-task-show__label',
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
                block: 'c-task-show__label',
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
                block: 'c-task-show__label',
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
                block: 'c-task-show__label',
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