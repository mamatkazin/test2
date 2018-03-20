'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
function _TaskChildren(jdata, selector){
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(selector), BEMHTML.apply({
            block: 'b-task-children',
            content: [
                {
                    elem: 'data',
                    content: (function() {
                        var selector = '.b-task-children__data';
                        
                        _TaskChildrenUpdate(jdata, selector);
                    })()
                },
                {
                    elem: 'action',
                    content: [
                        {
                            block: 'b-button-call',
                            js: {
                                action_name: 'TaskNew',
                                parent_id: jdata.Task.ID.toString(),
                                parent_name: jdata.Task.Name,
                                project_id: jdata.Task.ProjectID.toString(),
                                project_name: jdata.Task.ProjectName,
                                user_id: $('input[name="user_id"]').val(),
                                selector: '#place_modal_form',
                                builder: 'TaskNewForParent'
                            },
                            tag: 'button',
                            cls: 'btn btn-primary',
                            content: [
                                {
                                    elem: 'l-glyphicon',
                                    tag: 'span',
                                    cls: 'glyphicon glyphicon-plus',
                                    attrs: { 'aria-hidden': "true" }
                                },
                                {
                                    elem: 'name',
                                    tag: 'span',
                                    content: 'Добавить подзадачу'
                                }
                            ]
                        }
                    ]
                }
            ]
        }));
    });
}

function _TaskChildrenUpdate(jdata, selector){
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply({
            tag: 'table',
            cls: 'table table-hover',
            content: [
                {
                    tag: 'thead',
                    content: [
                        {
                            tag: 'tr',
                            content: [
                                {
                                    tag: 'th',
                                    content: 'Задача'
                                },
                                {
                                    tag: 'th',
                                    content: 'Ответсвенный'
                                },
                                {
                                    tag: 'th',
                                    content: 'Дата'
                                },
                                {
                                    tag: 'th'
                                }
                                ,
                                {
                                    tag: 'th'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'tbody',
                    content: (function() {
                        var selector = '.b-task-children';
                        
                        var tasks = [];
        
                        if (! $.isEmptyObject(jdata.Children)) {
                            jdata.Children.map(function(item) {
                                tasks.push({
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: item.Name
                                        },
                                        {
                                            tag: 'td',
                                            content: item.ResponsibleName
                                        }
                                        ,
                                        {
                                            tag: 'td',
                                            content: item.TargetDate
                                        },
                                        {
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'b-button-call',
                                                    js: {
                                                        action_name: 'TaskEdit',
                                                        task_id: item.ID.toString(),
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
                                        ,
                                        {
                                            tag: 'td',
                                            content: [
                                                {
                                                    block: 'b-button-call',
                                                    js: {
//                                                        action_name: 'TaskEdit',
//                                                        task_id: item.ID.toString(),
//                                                        user_id: $('input[name="user_id"]').val(),
//                                                        selector: '#place_modal_form',
//                                                        builder: 'TaskEdit'
                                                    },
                                                    tag: 'button',
                                                    cls: 'btn btn-danger',
                                                    content: [
                                                        {
                                                            elem: 'glyphicon',
                                                            tag: 'span',
                                                            cls: 'glyphicon glyphicon-remove',
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
                                });
                            });
                        }
    
                        return tasks;
                    })()
                }
            ]
        }));
    });
}