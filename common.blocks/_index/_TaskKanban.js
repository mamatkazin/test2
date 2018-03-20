function TaskKanban(answer){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
            
    var jdata = JSON.parse(answer['data']);
    $(answer['selector']).empty();
    
    g_heap['f_responsible_id'] = jdata.FResponsibles.FirstID;
    g_heap['f_project_id'] = jdata.FProjects.FirstID;
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'l-kanban',
            mix: { block: 'c-task-kanban' },
            content: [
//                {
//                    elem: 'top',
//                    content: [
//                        {
//                            elem: 'filters',
//                            content: [
//                                {
//                                    block: 'b-fieldset',
//                                    tag: 'fieldset',
//                                    content: [
//                                        {
//                                            tag: 'legend',
//                                            content: 'Фильтр'
//                                        },
//                                        {
//                                            block: 't-patterns__combobox',
//                                            mix: { block: 'c-task-kanban__responsible' },
//                                            js: { 
//                                                name: jdata.FResponsibles.Name,
//                                                value_id: jdata.FResponsibles.FirstID,
//                                                value_name: jdata.FResponsibles.FirstValue,
//                                                list: jdata.FResponsibles.List,
//                                                action: 'c-task-kanban__responsible'
//                                            }
//                                        },
//                                        {
//                                            block: 't-patterns__combobox',
//                                            mix: { block: 'c-task-kanban__project' },
//                                            js: { 
//                                                name: jdata.FProjects.Name,
//                                                value_id: jdata.FProjects.FirstID,
//                                                value_name: jdata.FProjects.FirstValue,
//                                                list: jdata.FProjects.List,
//                                                action: 'c-task-kanban__projects'
//                                            }
//                                        }
//                                    ]
//                                }
//                            ]
//                        },
//                        {
//                            elem: 'informers',
//                            content: [
//                                {
//                                    block: 'b-fieldset',
//                                    tag: 'fieldset',
//                                    content: [
//                                        {
//                                            tag: 'legend',
//                                            content: 'Информеры'
//                                        },
//                                        {
//                                            block: 'b-informers',
//                                            content: (function() {
//                                                _DrawInformers(jdata, '.b-informers')
//                                            })()
//                                        }
//                                    ]
//                                }
//                            ]
//                        },
//                        {
//                            elem: 'actions',
//                            content: [
//                                {
//                                    block: 'b-fieldset',
//                                    tag: 'fieldset',
//                                    content: [
//                                        {
//                                            tag: 'legend',
//                                            content: 'Действия'
//                                        },
//                                        {
//                                            block: 'b-button-call',
//                                            js: {
//                                                action_name: "TaskNew",
//                                                user_id: $('input[name="user_id"]').val(),
//                                                parent_id: '0',
//                                                project_id: '0',
//                                                selector: '#place_modal_form',
//                                                builder: 'TaskNew', 
//                                            },
//                                            tag: 'button',
//                                            cls: 'btn btn-primary',
//                                            content: [
//                                                {
//                                                    elem: 'l-glyphicon',
//                                                    tag: 'span',
//                                                    cls: 'glyphicon glyphicon-plus',
//                                                    attrs: { 'aria-hidden': "true" }
//                                                },
//                                                {
//                                                    elem: 'name',
//                                                    tag: 'span',
//                                                    content: 'Новая задача'
//                                                }
//                                            ]
//                                        }
//                                    ]
//                                }
//                            ]
//                        }
                        
//                    ]
//                },
                {
                    elem: 'body',
                    content: [
                        {
                            elem: 'left',
                            content: [
                                {
                                    block: 'c-f-projets',
                                    tag: 'ul',
                                    content: (function() {
                                        var li = [];
                                        if (! $.isEmptyObject(jdata.FProjects.List)) {
                                            jdata.FProjects.List.map(function(item) {
                                                li.push({
                                                    elem: 'item',
                                                    js: {
                                                        wordWrap : 'break-word',
                                                        verticalAlign: 'middle',
                                                        whiteSpace: 'nowrap',
                                                        width: 460,
                                                        height: 45,
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        name: item.Name
                                                    },
                                                    mix: {
                                                        block: 'c-task-kanban__projects',
                                                        js: {
                                                            first_id: jdata.FProjects.FirstID.toString(),
                                                            id: item.ID.toString()
                                                        }
                                                    },
                                                    tag: 'div',
                                                    attrs: {
                                                        'data-id': item.ID,
                                                        // style: 'cursor: help',
                                                        title: item.Name
                                                    },
                                                    content: item.Name
                                                });
                                            });

                                        }

                                        return li;
                                    })()

                                },
                                {
                                    block: 'c-f-responsibles',
                                    tag: 'ul',
                                    content: (function() {
                                        var li = [];
                                        if (! $.isEmptyObject(jdata.FResponsibles.List)) {
                                            jdata.FResponsibles.List.map(function(item) {
                                                li.push({
                                                    elem: 'item',
                                                    mix: {
                                                        block: 'c-task-kanban__responsible',
                                                        js: {
                                                            first_id: jdata.FResponsibles.FirstID.toString(),
                                                            id: item.ID.toString()
                                                        }
                                                    },
                                                    tag: 'li',
                                                    attrs: { 'data-id': item.ID },
                                                    content: item.Name
                                                });
                                            });

                                        }

                                        return li;
                                    })()
                                }
                            ]
                        },
                        {
                            elem: 'right',
                            content: [
                                {
                                    block: 'c-life-cycle',
                                    content: (function() {
                                        var res = [];
                                        var j = 0;
                                        jdata['Captions'].map(function(item, i) {
                                            j = i + 1;
                                            
                                            res.push({
                                                elem: 'item',
                                                mix: { elem: 'round' },
                                                content: i + 1
                                            });
                                            
                                            res.push({
                                                elem: 'item',
                                                elemMods: { width: 'fixed' },
                                                content: [
                                                    {
                                                        elem: 'text',
                                                        content: item.Name
                                                    },
                                                    {
                                                        elem: 'line',
                                                        tag: 'hr'
                                                    }
                                                ]
                                            });
                                        });
                                        
                                        res.push({
                                            elem: 'item',
                                            mix: { elem: 'round' },
                                            content: 'X'
                                        });
                                        
                                        return res;
                                    })()
                                },
                                {
                                    block: 'c-kanban',
                                    content: [
                                        {
                                            elem: 'table',
                                            tag: 'table',
                                            attrs: { 'data-type': 'task'},
                                            content: [
                                                {
                                                    tag: 'tbody',
                                                    content: [
                                                        {
                                                            tag: 'tr',
                                                            content: (function() {
                                                                var columns = [];
                                                                var j = 1;
                                                                var kot_id;
                                                                
                                                                jdata['Captions'].map(function(item, i) {
                                                                    j = i + 1;
                                                                    kot_id = 'kot_id_' + item.ID;
                                                                    
                                                                    columns.push({
                                                                        elem: 'column',
                                                                        cls: 'stage',
                                                                        tag: 'td',
                                                                        attrs: {
                                                                            id: kot_id,
                                                                            'data-kot-id': item.ID,
                                                                            'data-lavel': j,
                                                                            ondragenter: "return dragEnter(event)",
                                                                            ondrop: "return dragDrop(event)",
                                                                            ondragover: "return dragOver(event)"
                                                                        }
                                                                    });
                                                                });
                                                                
                                                                return columns;
                                                            })()
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
    
        //var cellHeight = (scrollHeight - 322).toString() + 'px';
        var cellHeight = (scrollHeight - 156).toString() + 'px';
        var heightProjets = Math.round((scrollHeight - 156)*0.65).toString() + 'px';
        var heightResponsibles = Math.round((scrollHeight - 156)*0.35).toString() + 'px';

        $('.c-kanban').css({'height' : cellHeight});
        
        $('.c-f-projets').css({'height' : cellHeight});
        $('.c-f-responsibles').css({'height' : cellHeight});
        
        // setTimeout(function() { 
        //     var elem = $(answer['selector']).find('.b-button-call_js_inited');
            
        //     if (elem.length == 0) {
        //         window.location.reload(true);
        //     }
        // }, 500);
    
        SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.FProjects.FirstID.toString(), '1', '.c-kanban td[data-kot-id="1"]', 'ReloadColumn', answer['task_id'], '0');
        SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.FProjects.FirstID.toString(), '101', '.c-kanban td[data-kot-id="101"]', 'ReloadColumn', answer['task_id'], '0');
        SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.FProjects.FirstID.toString(), '2', '.c-kanban td[data-kot-id="2"]', 'ReloadColumn', answer['task_id'], '0');

//        var elem = $(answer['selector']).find('.b-button-call_js_inited');
    
//        if (elem.length == 0) {
//            window.location.reload(true);
//        }
    });
}

// function TaskKanbanForTask(jdata, selector){
//     modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//         bemDom.append(bemDom.doc.find(selector), BEMHTML.apply({
//             block: 'l-kanban',
//             content: [
//                 {
//                     elem: 'top',
//                     content: [
//                         {
//                             elem: 'filters',
//                             content: [
//                                 {
//                                     block: 'b-fieldset',
//                                     tag: 'fieldset',
//                                     content: [
//                                         {
//                                             tag: 'legend',
//                                             content: 'Фильтр'
//                                         },
//                                         {
//                                             block: 't-patterns__combobox',
//                                             js: { 
//                                                 name: jdata.FResponsibles.Name,
//                                                 value_id: jdata.FResponsibles.FirstID,
//                                                 value_name: jdata.FResponsibles.FirstValue,
//                                                 list: jdata.FResponsibles.List,
//                                                 action: 'c-task-kanban__responsible'
//                                             }
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             elem: 'informers',
//                             content: [
//                                 {
//                                     block: 'b-fieldset',
//                                     tag: 'fieldset',
//                                     content: [
//                                         {
//                                             tag: 'legend',
//                                             content: 'Информеры'
//                                         },
//                                         {
//                                             block: 'b-informers',
//                                             content: (function() {
//                                                 _DrawInformers(jdata, '.b-informers')
//                                             })()
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             elem: 'actions',
//                             content: [
//                                 {
//                                     block: 'b-fieldset',
//                                     tag: 'fieldset',
//                                     content: [
//                                         {
//                                             tag: 'legend',
//                                             content: 'Действия'
//                                         },
//                                         {
//                                             block: 'b-button-call',
//                                             js: {
//                                                 action_name: "TaskNewForParent",
//                                                 project_id: jdata.Task.ProjectID.toString(),
//                                                 project_name: jdata.Task.ProjectName,
//                                                 parent_name: jdata.Task.Name,
//                                                 parent_id: jdata.Task.ID.toString(),
//                                                 f_responsible_id: $('input[name="f_responsible_id"]').val(),
//                                                 selector: '#place_modal_form',
//                                                 builder: 'TaskNewForParent',
//                                                 user_id: $('input[name="user_id"]').val()
//                                             },
//                                             tag: 'button',
//                                             cls: 'btn btn-primary',
//                                             content: [
//                                                 {
//                                                     elem: 'l-glyphicon',
//                                                     tag: 'span',
//                                                     cls: 'glyphicon glyphicon-plus',
//                                                     attrs: { 'aria-hidden': "true" }
//                                                 },
//                                                 {
//                                                     elem: 'name',
//                                                     tag: 'span',
//                                                     content: 'Новая задача'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
                        
//                     ]
//                 },
//                 {
//                     elem: 'body',
//                     content: [
//                         {
//                             block: 'c-life-cycle',
//                             content: (function() {
//                                 var res = [];
//                                 var j = 0;
//                                 jdata['Captions'].map(function(item, i) {
//                                     j = i + 1;
                                    
//                                     res.push({
//                                         elem: 'item',
//                                         mix: { elem: 'round' },
//                                         content: i + 1
//                                     });
                                    
//                                     res.push({
//                                         elem: 'item',
//                                         elemMods: { width: 'fixed' },
//                                         content: [
//                                             {
//                                                 elem: 'text',
//                                                 content: item.Name
//                                             },
//                                             {
//                                                 elem: 'line',
//                                                 tag: 'hr'
//                                             }
//                                         ]
//                                     });
//                                 });
                                
//                                 res.push({
//                                     elem: 'item',
//                                     mix: { elem: 'round' },
//                                     content: 'X'
//                                 });
                                
//                                 return res;
//                             })()
//                         },
//                         {
//                             block: 'c-kanban',
//                             content: [
//                                 {
//                                     elem: 'table',
//                                     tag: 'table',
//                                     attrs: { 'data-type': 'task'},
//                                     content: [
//                                         {
//                                             tag: 'tbody',
//                                             content: [
//                                                 {
//                                                     tag: 'tr',
//                                                     content: (function() {
//                                                         var columns = [];
//                                                         var j = 1;
//                                                         var kot_id;
                                                        
//                                                         jdata['Captions'].map(function(item, i) {
//                                                             j = i + 1;
//                                                             kot_id = 'kot_id_' + item.ID;

//                                                             columns.push({
//                                                                 elem: 'column',
//                                                                 cls: 'stage',
//                                                                 tag: 'td',
//                                                                 attrs: {
//                                                                     id: kot_id,
//                                                                     'data-kot-id': item.ID,
//                                                                     'data-lavel': j
//                                                                 }
//                                                             });
//                                                         });
                                                        
//                                                         return columns;
//                                                     })()
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }));
        
//         var scrollHeight = Math.max(
//             document.documentElement.offsetHeight, document.documentElement.clientHeight
//         );
    
//         var cellHeight = (scrollHeight - 420).toString() + 'px';

//         $('.c-task-show .c-kanban').css({'height' : cellHeight});
    
//         SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.Task.ProjectID.toString(), '1', '.c-kanban td[data-kot-id="1"]', 'ReloadColumn', '0');
//         SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.Task.ProjectID.toString(), '101', '.c-kanban td[data-kot-id="101"]', 'ReloadColumn', '0');
//         SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.Task.ProjectID.toString(), '2', '.c-kanban td[data-kot-id="2"]', 'ReloadColumn', '0');
//     });
// }