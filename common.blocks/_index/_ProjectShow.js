'use strict';
function ProjectShow(answer){
    var elem = $(answer['selector']) ;
    var jdata = JSON.parse(answer['data']);

    elem.empty();

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-project-show-1',
            content: [
                {
                    elem: 'header',
                    content: [
                        {
                            block: 'b-button-call',
                            js: {
                                action_name: 'ProjectKanban',
                                project_id: jdata.Project.ID.toString(),
                                user_id: $('input[name="user_id"]').val(),

                                f_sub_name:  g_heap['f_sub_name'],
                                f_template_id: g_heap['f_template_id'],
                                f_responsible_id: g_heap['f_responsible_id'],
                                f_code: g_heap['f_code'],

                                selector: '#place_content',
                                builder: 'ProjectKanban'
                            },
                            mods: {'size': 'height'},
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
                                    content: 'Вернуться к списку проектов'
                                }
                            ]
                        },
                        {
                            tag: 'form',
                            attrs: { role: "form", action: "/report-1", method: "post" },
                            content: [
                                {
                                    tag: 'input',
                                    attrs: { type: 'hidden',name: 'project_id', value: jdata.Project.ID.toString() }
                                },
                                {
                                    block: 'b-date-field',
                                    js: {},
                                    mods: { property : 'position'},
                                    content:
                                    [
                                        {
                                            elem: 'checkInput',
                                            js: true,
                                            cls: 'pdate b-input dateInput',
                                            tag: 'input',
                                            attrs:
                                                {
                                                    type: 'text',
                                                    maxlength: 10,
                                                    name: 'start'
                                                }
                                        }
                                    ]
                                },
                                {
                                    block: 'b-button',
                                    tag: 'button',
                                    cls: 'btn btn-primary',
                                    attrs: { type: 'submit' },
                                    content: [
                                        {
                                            tag: 'img',
                                            attrs: { src: "app/img/exel.png" },
                                        },
                                        'Получить отчет 1'

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'header',
                    //attrs: { style: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'},
                    content: [
                        {
                            block: 'b-toggle',
                            tag: 'div',
                            js: {
                                width: 1128,
                                height: 41,
                                marginLeft: 8
                            },
                            cls: 'cursorPointer borderFlex',
                            content: [
                                {
                                    elem: 'label',
                                    tag: 'label',
                                    js: {
                                        width: 500,
                                        marginBottom: 0,
                                        marginTop: 8,
                                        marginLeft: 8
                                    },
                                    cls: 'cursorPointer',
                                    content: 'Реквизиты проекта'
                                },
                                {
                                    tag: 'div',
                                    //cls: 'arrow up'
                                }
                            ]
                        },
//                        {
//                            elem: 'label',
//                            tag: 'label',
//                            js: {
//                                width: 950,
//                                marginBottom: 0,
//                                marginTop: 8
//                            },
//                            cls: 'cursorPointer',
//                            content: jdata.Project.Code
//                        },
                        {
                            tag: 'div',
                            cls: '',
                            content: [
                                {
                                    elem: 'common',
                                    content: [
                                        {
                                            elem: 'common-data',
                                            content: (function() {
                                                var selector = '.c-project-show-1__common-data';
                                                _ProjectUpdate(selector, jdata.Project);
                                            })()
                                        },
                                        {
                                            elem: 'common-action',
                                            content: [
                                                {
                                                    block: 'b-button-call',
                                                    js: {
                                                        action_name: 'ProjectEdit',
                                                        project_id: jdata.Project.ID.toString(),
                                                        user_id: $('input[name="user_id"]').val(),
                                                        selector: '#place_modal_form',
                                                        builder: 'ProjectEdit'
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
                                },
                            ]
                        },
                        {
                            block: 'b-toggle',
                            tag: 'div',
                            js: {
                                width: 1128,
                                height: 41,
                                marginLeft: 8
                            },
                            cls: 'cursorPointer borderFlex closeBlockProject',
                            content: [
                                {
                                    elem: 'label',
                                    tag: 'label',
                                    js: {
                                        width: 500,
                                        marginBottom: 0,
                                        marginTop: 8,
                                        marginLeft: 8
                                    },
                                    cls: 'cursorPointer',
                                    content: 'Оценка трудозатрат'
                                },
                                {
                                    tag: 'div',
                                    //cls: 'arrow'
                                }
                            ]
                        },
//                        {
//                            elem: 'label',
//                            tag: 'label',
//                            js: {
//                                width: 950,
//                                marginBottom: 0,
//                                marginTop: 8
//                            },
//                            cls: 'cursorPointer',
//                            content: jdata.Project.TemplateName
//                        },
                        {
                            tag: 'div',
                            content: [
                                {
                                    elem: 'tasks',
                                    tag: 'div',
                                    js: true,
                                    content: (function() {
                                        var selector = '.c-project-show-1__tasks';

                                        if (jdata.Project.TemplateID !== 0) {
                                            _ProjectUpdateTemplate(jdata.Project.ID.toString(), selector, jdata, 'ProjectEditTasks');
                                        } else {
                                            _ProjectUpdateTemplate(jdata.Project.ID.toString(), selector, jdata, 'ProjectTemplate');
                                        }
                                    })()
                                }
                            ]
                        }
                        // {
                        //     block: 'b-toggle',
                        //     tag: 'div',
                        //     js: {
                        //         width: 1128,
                        //         height: 41,
                        //         marginLeft: 8
                        //     },
                        //     cls: 'cursorPointer borderFlex closeBlockProject',
                        //     content: [
                        //         {
                        //             elem: 'label',
                        //             tag: 'label',
                        //             js: {
                        //                 width: 188,
                        //                 marginBottom: 0,
                        //                 marginTop: 8
                        //             },
                        //             cls: 'cursorPointer',
                        //             content: 'Внешнее согласование'
                        //         },
                        //         {
                        //             elem: 'label',
                        //             tag: 'label',
                        //             js: {
                        //                 width: 840,
                        //                 marginBottom: 0,
                        //                 marginTop: 8
                        //             },
                        //             cls: 'cursorPointer',
                        //             content: jdata.Project.TemplateName
                        //         },
                        //         {
                        //             tag: 'div',
                        //             //cls: 'arrow'
                        //         }
                        //     ]
                        // },
                        // {
                        //     tag: 'div',
                        //     content: [
                        //         {
                        //             block: 'b-flex-column',
                        //             js: {
                        //                 width: 1128,
                        //                 background: '#e2e2e2',
                        //                 marginLeft: 8
                        //             },
                        //             content: [
                        //                 {
                        //                     elem: 'header',
                        //                     js: {
                        //                         width: '100%',
                        //                         justifyContent: 'end'
                        //                     },
                        //                     cls: 'flex-row',
                        //                     content: [
                        //                         {
                        //                             tag: 'div',
                        //                             content: [
                        //                                 {
                        //                                     block: 'b-button-call',
                        //                                     js: {
                        //                                         action_name: 'ProjectEdit',
                        //                                         project_id: jdata.Project.ID.toString(),
                        //                                         user_id: $('input[name="user_id"]').val(),
                        //                                         selector: '#place_modal_form',
                        //                                         builder: 'ProjectEdit'
                        //                                     },
                        //                                     tag: 'button',
                        //                                     cls: 'btn btn-primary',
                        //                                     content: [
                        //                                         {
                        //                                             elem: 'glyphicon',
                        //                                             tag: 'span',
                        //                                             cls: 'glyphicon glyphicon-pencil',
                        //                                             attrs: { 'aria-hidden': "true" }
                        //                                         },
                        //                                         {
                        //                                             elem: 'name',
                        //                                             tag: 'span',
                        //                                             content: ''
                        //                                         }
                        //                                     ]
                        //                                 }
                        //                             ]
                        //                         }
                        //                     ]
                        //                 },
                        //                 {
                        //                     elem: 'body',
                        //                     js: {
                        //                         width: '100%'
                        //                     },
                        //                     cls: 'flex-row',
                        //                     content: [
                        //                         {
                        //                             block: 'b-flex-column',
                        //                             js: {
                        //                                 width: '50%',
                        //                                 border: '1px solid #cccccc',
                        //                                 margin: '8px',
                        //                                 padding: '8px'
                        //                             },
                        //                             content: [
                        //                                 {
                        //                                     elem: 'header',
                        //                                     js: {

                        //                                     },
                        //                                     content: 'Наименование'
                        //                                 },
                        //                                 {
                        //                                     elem: 'body',
                        //                                     js: {},
                        //                                     content: 'Данные'
                        //                                 }
                        //                             ]
                        //                         },
                        //                         {
                        //                             block: 'b-flex-column',
                        //                             js: {
                        //                                 width: '50%',
                        //                                 border: '1px solid #cccccc',
                        //                                 margin: '8px',
                        //                                 padding: '8px'
                        //                             },
                        //                             cls: '',
                        //                             content: [
                        //                                 {
                        //                                     elem: 'header',
                        //                                     js: {},
                        //                                     content: 'Дата'
                        //                                 },
                        //                                 {
                        //                                     elem: 'body',
                        //                                     js: {},
                        //                                     content: 'Данные'
                        //                                 }
                        //                             ]
                        //                         }
                        //                     ]
                        //                 }
                        //             ]
                        //         }
                        //     ]
                        // },

                    ]
                }

            ]
        }));

    var scrollHeight = Math.max(
        document.documentElement.offsetHeight, document.documentElement.clientHeight
    );

    var cellHeight = (scrollHeight - 530).toString() + 'px';

     $('.c-project-template-table').css({'height' : cellHeight});
    });
}

//function ShowProject(answer){
//    $(answer['selector']).empty();

//    var jdata = JSON.parse(answer['data']);

//    g_heap['project_id'] = jdata.ID;

//    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
//            block: 'c-project-show',
//            content: [
//                {
//                    cls: 'panel-primary',
//                    content: [
//                        {
//                            cls: 'panel-heading',
//                            content: [
//                                {
//                                    block: 'b-button-call',
//                                    js: {
//                                        action_name: 'ShowKanbanProject',
//                                        project_id: jdata.ID.toString(),
//                                        user_id: $('input[name="user_id"]').val(),
//                                        f_responsible_id: jdata.ProjectFRID,
//                                        selector: '#place_content',
//                                        builder: 'ShowKanbanProject'
//                                    },
//                                    cls: 'btn btn-primary',
//                                    content: [
//                                        {
//                                            elem: 'l-glyphicon',
//                                            tag: 'span',
//                                            cls: 'glyphicon glyphicon-arrow-left',
//                                            attrs: { 'aria-hidden': "true" }
//                                        },
//                                        {
//                                            elem: 'name',
//                                            tag: 'span',
//                                            content: 'Вернуться к списку проектов'
//                                        }
//                                    ]
//                                },
//                                {
//                                    tag: 'h3',
//                                    cls: 'panel-title modal-title',
//                                    content: 'Проект: ' + jdata.ShortName
//                                }
//                            ]
//                        },
//                        {
//                            tag: 'input',
//                            attrs: { type: 'hidden', name:'project_id', value: jdata.ID }
//                        },
//                        {
//                            tag: 'input',
//                            attrs: { type: 'hidden', name:'lavel', value: jdata.Lavel }
//                        },
//                        {
//                            block: 'c-project-show__content',
//                            content: [
//                                {
//                                    cls: 'tab-nav',
//                                    content: [
//                                        {
//                                            tag: 'ul',
//                                            cls: 'nav nav-tabs',
//                                            content: [
//                                                {
//                                                    tag: 'li',
//                                                    cls: 'active',
//                                                    content: [
//                                                        {
//                                                            tag: 'a',
//                                                            attrs: { 'data-toggle': "tab", href: "#editProjectTasks" },
//                                                            content: 'Задачи'
//                                                        }
//                                                    ]
//                                                },
//                                                {
//                                                    tag: 'li',
//                                                    content: [
//                                                        {
//                                                            tag: 'a',
//                                                            attrs: { 'data-toggle': "tab", href: "#editProjectCommon" },
//                                                            content: 'Общие'
//                                                        }
//                                                    ]
//                                                },
//                                                {
//                                                    tag: 'li',
//                                                    content: [
//                                                        {
//                                                            tag: 'a',
//                                                            attrs: { 'data-toggle': "tab", href: "#editProjectTeam" },
//                                                            content: 'Команда проекта'
//                                                        }
//                                                    ]
//                                                }
//                                            ]
//                                        }
//                                    ]
//                                },
//                                {
//                                    cls: 'tab-content',
//                                    content: [
//                                        {
//                                            cls: 'tab-pane fade in active',
//                                            attrs: { id: 'editProjectTasks' },
//                                            content: (function() {
//                                                var place_content = '#editProjectTasks';

//                                                _ShowKanbanTaskForProject(jdata, place_content, 'ReloadColumn')
//                                            })()
//                                        },
//                                        {
//                                            cls: 'tab-pane fade',
//                                            attrs: { id: 'editProjectCommon' },
//                                            content: [
//                                                {
//                                                    block: 'c-project-show__common',
//                                                    content: [
//                                                        {
//                                                            block: 'c-project-show__common-data',
//                                                            content: (function() {
//                                                                var selector = '.c-project-show__common-data';

//                                                                _ProjectUpdate(selector, jdata);
//                                                            })()
//                                                        },
//                                                        {
//                                                            block: 'c-project-show__common-action',
//                                                            content: [
//                                                                {
//                                                                    block: 'b-button-call',
////                                                                    js: {
////                                                                        action_name: 'ProjectEdit',
////                                                                        project_id: jdata.ID.toString(),
////                                                                        user_id: $('input[name="user_id"]').val(),
////                                                                        selector: '#place_modal_form',
////                                                                        builder: 'ProjectEdit'
////                                                                    },
//                                                                    tag: 'button',
//                                                                    cls: 'btn btn-primary',
//                                                                    content: [
//                                                                        {
//                                                                            elem: 'glyphicon',
//                                                                            tag: 'span',
//                                                                            cls: 'glyphicon glyphicon-pencil',
//                                                                            attrs: { 'aria-hidden': "true" }
//                                                                        },
//                                                                        {
//                                                                            elem: 'name',
//                                                                            tag: 'span',
//                                                                            content: ''
//                                                                        }
//                                                                    ]
//                                                                }
//                                                            ]
//                                                        }
//                                                    ]
//                                                }
//                                            ]
//                                        },
//                                        {
//                                            cls: 'tab-pane fade',
//                                            attrs: { id: 'editProjectTeam' },
//                                            content: [
//                                                {
//                                                    block: 'c-project-show__table-team',
//                                                    cls: 'table table-bordered',
//                                                    tag: 'table',
//                                                    content: [
//                                                        {
//                                                            tag: 'thead',
//                                                            content: [
//                                                                {
//                                                                    tag: 'tr',
//                                                                    content: [
//                                                                        {
//                                                                            tag: 'th',
//                                                                            content: 'Список пользователей'
//                                                                        },
//                                                                        {
//                                                                            tag: 'th',
//                                                                            content: 'Проектная команда'
//                                                                        }
//                                                                    ]
//                                                                }
//                                                            ]
//                                                        },
//                                                        {
//                                                            tag: 'tbody',
//                                                            content: [
//                                                                {
//                                                                    tag: 'tr',
//                                                                    content: [
//                                                                        {
//                                                                            block: 'source',
//                                                                            tag: 'td',
//                                                                            attrs: {
//                                                                                'data-lavel': 1,
//                                                                                ondragenter: "return dragEnterTeam(event)",
//                                                                                ondrop: "return dragDropTeam(event)",
//                                                                                ondragover: "return dragOverTeam(event)"
//                                                                            },
//                                                                            content: [
//                                                                                {
//                                                                                    tag: 'table',
//                                                                                    cls: 'table table-hover',
//                                                                                    content: [
//                                                                                        {
//                                                                                            tag: 'tbody',
//                                                                                            content: (function() {
//                                                                                                var tr = [];

//                                                                                                if (! $.isEmptyObject(jdata.Departments)) {
//                                                                                                    jdata.Departments.map(function(item) {
//                                                                                                        tr.push({
//                                                                                                            tag: 'tr',
//                                                                                                            attrs: {
//                                                                                                                id: 'team_' + item.ID,
//                                                                                                                'data-lavel': 1,
//                                                                                                                'data-id': item.ID,
//                                                                                                                draggable: "true",
//                                                                                                                ondragstart: "return dragStartTeam(event)",
//                                                                                                                ondragend: "return dragEndTeam(event)"
//                                                                                                            },
//                                                                                                            content: [
//                                                                                                                {
//                                                                                                                    tag: 'td',
//                                                                                                                    content: item.Name
//                                                                                                                },
//                                                                                                                {
//                                                                                                                    tag: 'td',
//                                                                                                                    content: item.DName
//                                                                                                                }
//                                                                                                            ]

//                                                                                                        });
//                                                                                                    });

//                                                                                                }

//                                                                                                return tr;
//                                                                                            })()
//                                                                                        }
//                                                                                    ]
//                                                                                }
//                                                                            ]
//                                                                        },
//                                                                        {
//                                                                            block: 'destination',
//                                                                            tag: 'td',
//                                                                            attrs: {
//                                                                                'data-lavel': 2,
//                                                                                ondragenter: "return dragEnterTeam(event)",
//                                                                                ondrop: "return dragDropTeam(event)",
//                                                                                ondragover: "return dragOverTeam(event)"
//                                                                            },
//                                                                            content: [
//                                                                                {
//                                                                                    tag: 'table',
//                                                                                    cls: 'table table-hover',
//                                                                                    content: [
//                                                                                        {
//                                                                                            tag: 'tbody',
//                                                                                            content: (function() {
//                                                                                                var tr = [];

//                                                                                                if (! $.isEmptyObject(jdata.Team)) {
//                                                                                                    jdata.Team.map(function(item) {
//                                                                                                        tr.push({
//                                                                                                            tag: 'tr',
//                                                                                                            attrs: {
//                                                                                                                id: 'team_' + item.ID,
//                                                                                                                'data-lavel': 2,
//                                                                                                                'data-id': item.ID,
//                                                                                                                draggable: "true",
//                                                                                                                ondragstart: "return dragStartTeam(event)",
//                                                                                                                ondragend: "return dragEndTeam(event)"
//                                                                                                            },
//                                                                                                            content: [
//                                                                                                                {
//                                                                                                                    tag: 'td',
//                                                                                                                    content: item.Name
//                                                                                                                },
//                                                                                                                {
//                                                                                                                    tag: 'td',
//                                                                                                                    content: item.DName
//                                                                                                                }
//                                                                                                            ]

//                                                                                                        });
//                                                                                                    });

//                                                                                                }

//                                                                                                return tr;
//                                                                                            })()
//                                                                                        }
//                                                                                    ]
//                                                                                }
//                                                                            ]
//                                                                        }
//                                                                    ]
//                                                                }
//                                                            ]
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

//        var scrollHeight = Math.max(
//            document.documentElement.offsetHeight, document.documentElement.clientHeight
//        );

//        var cellHeight = (scrollHeight - 213).toString() + 'px';

//        $('.tab-content').css({'height' : cellHeight});

//        cellHeight = (scrollHeight - 200).toString() + 'px';

//         $('.c-project-show__table-team').css({'height' : cellHeight});

//    });
//}

function ProjectUpdate(answer){
    $(answer['selector']).empty();

    var jdata = JSON.parse(answer['data']);

    _ProjectUpdate(answer['selector'], jdata);
}

function _ProjectUpdate(selector, jdata){

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
            {
                block: 'b-label-field',
                content: [
                    {
                        elem: 'l-label',
                        mix: { block: 'l-project-new__width-label' },
                        tag: 'label',
                        cls: 'control-label',
                        content: 'Ответственный'
                    },
                    {
                        elem: 'label',
                        elemMods: { width: 'full'},
                        tag: 'label',
                        content: jdata.Responsible
                    }
                ]
            },
            {
                block: 'b-label-field',
                content: [
                    {
                        elem: 'l-label',
                        mix: { block: 'l-project-new__width-label' },
                        tag: 'label',
                        cls: 'control-label',
                        content: 'Наименование'
                    },
                    {
                        elem: 'label',
                        elemMods: { width: 'full'},
                        tag: 'label',
                        content: jdata.Name
                    }
                ]
            },
            {
                block: 'b-label-field',
                content: [
                    {
                        elem: 'l-label',
                        mix: { block: 'l-project-new__width-label' },
                        tag: 'label',
                        cls: 'control-label',
                        content: 'Заказчик'
                    },
                    {
                        elem: 'label',
                        elemMods: { width: 'full'},
                        tag: 'label',
                        content: jdata.Customer
                    }
                ]
            },
            {
                block: 'b-label-field',
                mods: { flex: 'line'},
                content: [
                    {
                        elem: 'l-label',
                        mix: { block: 'l-project-new__width-label' },
                        tag: 'label',
                        cls: 'control-label',
                        content: 'Шифр'
                    },
                    {
                        elem: 'label',
                        elemMods: { width: 'size'},
                        tag: 'label',
                        content: jdata.Code
                    },

                    {
                        elem: 'l-label',
                        mix: { block: 'l-project-new__width-label' },
                        tag: 'label',
                        cls: 'control-label',
                        content: 'Стоимость'
                    },
                    {
                        elem: 'label',
                        js: true,
                        elemMods: { width: 'size'},
                        tag: 'label',
                        content:(function() {
                            if (! $.isEmptyObject(jdata.Cost)) {
                                return enterExitCost(jdata);
                            } else {
                                return '0';
                            }
                        })()
                    }
                ]
            },
            {
                block: 'b-label-field',
                content: [
                    {
                        elem: 'l-label',
                        mix: { block: 'l-project-new__width-label' },
                        tag: 'label',
                        cls: 'control-label',
                        content: 'Тип'
                    },
                    {
                        elem: 'label',
                        elemMods: { width: 'size'},
                        tag: 'label',
                        content: jdata.Type
                    },

                    {
                        elem: 'l-label',
                        mix: { block: 'l-project-new__width-label' },
                        tag: 'label',
                        cls: 'control-label',
                        content: 'Плановая дата'
                    },
                    {
                        elem: 'label',
                        elemMods: { width: 'size'},
                        tag: 'label',
                        content: jdata.TargetDate
                    }
                ]
            }
        ]));
    });
}

function ProjectUpdateTemplate(answer){
    $(answer['selector']).empty();

    var jdata = JSON.parse(answer['data']);

    _ProjectUpdateTemplate(answer['project_id'], answer['selector'], jdata, 'ProjectEditTasks');
}

function _ProjectUpdateTemplate(project_id, selector, jdata, action){
    //console.log('_ProjectUpdateTemplate', jdata);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
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
                        content: jdata.Project.TemplateName
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
                        attrs: { id: 'b-label-field_TotalWork'},
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
                        content: jdata.Project.KindName
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
                            if (! $.isEmptyObject(jdata.Cost)) {
                                return enterExitCost(jdata);
                            } else {
                                return '0';
                            }
                        })(),
                    }
                ]
            },
            {
                elem: 'tasks-table',
                content: (function() {
                    var selector = '.__tasks-table';
                    //Разнесено добавление шапки и таблицы
                    if (! $.isEmptyObject(jdata.Tasks)) {
                        _ProjectUpdateTasks(selector, jdata);
                    }
                })()
            },
            {
                elem: 'tasks-action',
                content: [
                    {
                        block: 'b-button-call',
                        js: {
                            action_name: action,
                            project_id: project_id,
                            user_id: $('input[name="user_id"]').val(),
                            selector: '#place_modal_form',
                            template_id: jdata.Project.TemplateID.toString(),
                            kind_id: jdata.Project.KindID.toString(),
                            builder: action
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
        ]));
    });
}

function ProjectUpdateTasks(answer){
    $(answer['selector']).empty();

    var jdata = JSON.parse(answer['data']);

    _ProjectUpdateTasks(answer['selector'], jdata);
}

function _ProjectUpdateTasks(selector, jdata){                                                                        //Таблица - содержание
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([

        {
            block: 'b-flex-column',
            js: {},
            tag: 'div',
            cls: 'table table-bordered',
            content: [
                {
                    block: 'b-flex-row',
                    js: {
                        //padding: 8
                    },
                    tag: 'div',
                    cls: 'border',
                    attrs: {
                        style: 'cursor: default',
                    },
                    content: [
                        {
                            block: 'b-flex-column',
                            js: {
                                width: 265,
                                padding: 8
                            },
                            tag: 'div',
                            cls: 'borderRight',
                            attrs: { style: 'text-align: center' },
                            content: 'Раздел'
                        },
                        {
                            block: 'b-flex-column',
                            js: {
                                width: 540,
                                padding: 8
                            },
                            tag: 'div',
                            cls: 'borderRight',
                            attrs: { style: 'text-align: center' },
                            content: 'Роль'
                        },
                        {
                            block: 'b-flex-column',
                            js: {
                                width: 100,
                                padding: 8
                            },
                            tag: 'div',
                            cls: 'borderRight',
                            attrs: { style: 'text-align: center' },
                            content: 'Трудоемкость'
                        },
                        {
                            block: 'b-flex-column',
                            js: {
                                width: 99,
                                padding: 8
                            },
                            tag: 'div',
                            cls: 'borderRight',
                            attrs: { style: 'text-align: center' },
                            content: 'Дата'
                        },
                        {
                            tag: 'div',
                            cls: 'width58px',
                            content: ' '
                        }
                    ]
                },
                {
                    block: 'b-flex-column',
                    js: {},
                    tag: 'div',
                    cls: 'borderLeft borderRight  borderBottomImperative',
                    attrs: {
                        style: 'cursor: default',
                    },
                    content: (function() {
                        //console.log(jdata)
                        var partitions = [];
                        if (! $.isEmptyObject(jdata.Tasks)) {
                            jdata.Tasks.map(function(item) {

                                partitions.push({
                                    block: 'b-flex-row',
                                    js: {
                                        //padding: 8
                                    },
                                    tag: 'div',
                                    cls: 'borderBottom',
                                    content: [
                                        {
                                            block: 'b-flex-column',
                                            js: {
                                                width: 264,
                                                //height: 100,
                                                padding: 8
                                            },
                                            cls: 'showProjectTableColumn',
                                            tag: 'div',
                                            content: item.Name
                                        },
                                        {
                                            tag: 'div',
                                            cls: 'borderLeft',
                                            content: (function() {
                                                var roles = [];
                                                if (! $.isEmptyObject(item.Roles)) {
                                                    item.Roles.map(function(i_item) {
                                                        roles.push(
                                                            {
                                                                block: 'b-flex-row',
                                                                js: {
                                                                    width: 804,
                                                                    //padding: 8
                                                                },
                                                                tag: 'div',
                                                                cls: 'borderBottom',
                                                                content: [
                                                                    {
                                                                        block: 'b-flex-column',
                                                                        js: {
                                                                            width: 540,
                                                                            padding: 8
                                                                        },
                                                                        tag: 'div',
                                                                        //cls: 'borderLeft',
                                                                        // attrs: {
                                                                        //     style: 'cursor: help',
                                                                        //     title: i_item.Name
                                                                        // },

                                                                        content: i_item.Name
                                                                    },
                                                                    {
                                                                        block: 'b-flex-column',
                                                                        js: {
                                                                            width: 100,
                                                                            padding: 8
                                                                        },
                                                                        tag: 'div',
                                                                        cls: 'borderLeft',
                                                                        attrs: { style: 'text-align: center'},
                                                                        content: i_item.H
                                                                    },
                                                                    {
                                                                        block: 'b-flex-column',
                                                                        js: {
                                                                            width: 100,
                                                                            padding: 8
                                                                        },
                                                                        tag: 'div',
                                                                        cls: 'borderLeft borderRight',
                                                                        attrs: { style: 'text-align: center'},
                                                                        content: i_item.D
                                                                    },
                                                                    (function(){
                                                                        var block = [];

                                                                        if (i_item.ID > 0) {
                                                                            block.push({
                                                                                block: 'b-button-call',
                                                                                js: {
                                                                                    action_name: 'ProjectShowExecuters',
                                                                                    task_id: i_item.ID.toString(),
                                                                                    templ_id: i_item.TemplID.toString(),
                                                                                    user_id: $('input[name="user_id"]').val(),
                                                                                    project_id: jdata.Project.ID.toString(),
                                                                                    selector: '#place_modal_form',
                                                                                    builder: 'ProjectShowExecuters',
                                                                                    top: 7,
                                                                                    left: 11,
                                                                                    height: 21

                                                                                },
                                                                                tag: 'button',
                                                                                cls: 'btn btn-primary',
                                                                                attrs: { style: 'position: relative'},
                                                                                content: [
                                                                                    {
                                                                                        elem: 'glyphicon',
                                                                                        js: {
                                                                                          position: 'relative',
                                                                                          top: -5
                                                                                        },
                                                                                        tag: 'span',
                                                                                        elemMods: { width: 'fixed' },
                                                                                        cls: 'glyphicon glyphicon-pencil',
                                                                                        attrs: { 'aria-hidden': "true" }
                                                                                    }
                                                                                ]
                                                                            })

                                                                        }

                                                                        return block;

                                                                    })()

                                                                ]
                                                            }
                                                        );
                                                    });
                                                } else {

                                                    roles.push(
                                                        {
                                                            block: 'b-flex-row',
                                                            js: {
                                                                //padding: 8
                                                            },
                                                            tag: 'div',
                                                            content: [
                                                                {
                                                                    block: 'b-flex-column',
                                                                    js: {
                                                                        width: 540,
                                                                        padding: 8
                                                                    },
                                                                    tag: 'div',
                                                                    //cls: 'borderLeft',
                                                                    content: ' '
                                                                },
                                                                {
                                                                    block: 'b-flex-column',
                                                                    js: {
                                                                        width: 100,
                                                                        padding: 8
                                                                    },
                                                                    tag: 'div',
                                                                    cls: 'borderLeft',
                                                                    attrs: { style: 'text-align: center'},
                                                                    content: item.H
                                                                },
                                                                {
                                                                    block: 'b-flex-column',
                                                                    js: {
                                                                        width: 100,
                                                                        padding: 8
                                                                    },
                                                                    tag: 'div',
                                                                    cls: 'borderLeft borderRight',
                                                                    attrs: { style: 'text-align: center'},
                                                                    content: item.D
                                                                },
                                                                (function(){
                                                                    var block = [];

                                                                    if (item.ID > 0) {
                                                                        block.push({
                                                                            block: 'b-button-call',
                                                                            js: {
                                                                                action_name: 'ProjectShowExecuters',
                                                                                task_id: item.ID.toString(),
                                                                                templ_id: item.TemplID.toString(),
                                                                                user_id: $('input[name="user_id"]').val(),
                                                                                project_id: jdata.Project.ID.toString(),
                                                                                selector: '#place_modal_form',
                                                                                builder: 'ProjectShowExecuters',
                                                                                top: 7,
                                                                                left: 11,
                                                                                height: 21
                                                                            },
                                                                            tag: 'button',
                                                                            cls: 'btn btn-primary',
                                                                            attrs: { style: 'position: relative'},
                                                                            content: [
                                                                                {
                                                                                    elem: 'glyphicon',
                                                                                    js: {
                                                                                        position: 'relative',
                                                                                        top: -5
                                                                                    },
                                                                                    tag: 'span',
                                                                                    cls: 'glyphicon glyphicon-pencil',
                                                                                    attrs: { 'aria-hidden': "true" }
                                                                                }
                                                                            ]
                                                                        })
                                                                    };

                                                                    return block;
                                                                })()
                                                            ]
                                                        }
                                                    );
                                                }
                                                return roles;
                                            })()
                                        }
                                    ]
                                })
                            })
                        };
                        return partitions;
                    })()
                }
            ]
        }
    ]));

    function sumTotalWork() {
        var sum = 0;
        $(jdata.Tasks).each(function() {
            sum +=  parseInt(this.H.split('/')[0]);

            $(this.Roles).each(function() {
                sum +=  parseInt(this.H.split('/')[0]);
            })
        })
        document.getElementById('b-label-field_TotalWork').innerHTML = sum;
    };

    sumTotalWork()

});
}

// function _ProjectUpdateTasks(selector, jdata){
//     modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//         bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
//
//             {
//                 tag: 'table',
//                 cls: 'table table-bordered',
//                 content: [
//                     {
//                         tag: 'thead',
//                         content: [
//                             {
//                                 tag: 'th',
//                                 attrs: { style: 'text-align: center' },
//                                 content: 'Раздел'
//                             },
//                             {
//                                 tag: 'th',
//                                 attrs: { style: 'text-align: center' },
//                                 content: 'Роль'
//                             },
//                             {
//                                 tag: 'th',
//                                 attrs: { style: 'text-align: center' },
//                                 content: 'Трудоемкость'
//                             },
//                             {
//                                 tag: 'th',
//                                 attrs: { style: 'text-align: center' },
//                                 content: 'Дата'
//                             },
//                             {
//                                 tag: 'th'
//                             }
//                         ]
//                     },
//                     {
//                         tag: 'tbody',
//                         content: (function() {
//                             var partitions = [];
//                             console.log('jdata.Tasks', jdata.Tasks);
//                             if (! $.isEmptyObject(jdata.Tasks)) {
//                                 jdata.Tasks.map(function(item) {
//
//                                     partitions.push({
//                                         tag: 'tr',                                                                    //РАЗДЕЛ
//                                         content: [
//                                             {
//                                                 tag: 'td',
//                                                 cls: 'projectShow___projectUpdateTasks_td-center',
//                                                 content: item.Name
//                                             },
//                                             {                                                                         //РОЛЬ
//                                                 tag: 'td',
//                                                 content: (function() {
//                                                     var roles = [];
//                                                     if (! $.isEmptyObject(item.Roles)) {
//                                                         item.Roles.map(function(i_item) {
//
//                                                             roles.push(
//                                                                 {
//                                                                     block: 'b-checkbox-field',
//                                                                     mods: { text: 'position' },
//                                                                     content: [
//                                                                         /*{
//                                                                             elem: 'checkbox',
//                                                                             tag: 'input',
//                                                                             attrs: { type: 'checkbox', readonly: 'readonly' }
//                                                                         },*/
//                                                                         {
//                                                                             elem: 'name',
//                                                                             tag: 'span',
//                                                                             attrs: {
//                                                                                 style: 'cursor: help',
//                                                                                 title: i_item.Name
//                                                                             },
//
//                                                                             content: i_item.Name
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             );
//                                                         });
//                                                     }
//
//                                                     return roles;
//                                                 })()
//                                             },
//                                             {                                                                         //ТРУДОЁМКОСТЬ
//                                                 tag: 'td',
//                                                 content: (function() {
//                                                     var roles = [];
//
//                                                     if (! $.isEmptyObject(item.Roles)) {
//                                                         item.Roles.map(function(i_item) {
//
//                                                             roles.push(
//                                                                 /*{
//                                                                     block: 'b-input',
//                                                                     content: i_item.H
//                                                                 }*/
//                                                                 {
//                                                                     block: 'b-checkbox-field',
//                                                                     mods: { txt: 'pos-center' },
//                                                                     content: [
//                                                                         {
//                                                                             elem: 'name',
//                                                                             tag: 'span',
//                                                                             content: i_item.H
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             );
//                                                         });
//                                                     } else {
//                                                         roles.push(
//                                                             {
//                                                                 block: 'b-checkbox-field',
//                                                                 mods: { txt: 'pos-center' },
//                                                                 content: [
//                                                                     {
//                                                                         elem: 'name',
//                                                                         tag: 'span',
//                                                                         content: item.H
//                                                                     }
//                                                                 ]
//                                                             }
//                                                         );
//                                                     }
//
//                                                     return roles;
//                                                 })()
//                                             },
//                                             {                                                                           //ДАТА
//                                                 tag: 'td',
//                                                 content: (function() {
//                                                     var roles = [];
//
//                                                     if (! $.isEmptyObject(item.Roles)) {
//                                                         item.Roles.map(function(i_item) {
//
//                                                             roles.push(
//                                                                 /*{
//                                                                     block: 'b-input',
//                                                                     content: i_item.D
//                                                                 }*/
//                                                                 {
//                                                                     block: 'b-checkbox-field',
//                                                                     mods: { txt: 'pos-center' },
//                                                                     content: [
//                                                                         {
//                                                                             elem: 'name',
//                                                                             tag: 'span',
//                                                                             content: i_item.D
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             );
//                                                         });
//                                                     } else {
//                                                         roles.push(
//                                                             {
//                                                                 block: 'b-checkbox-field',
//                                                                 mods: { txt: 'pos-center' },
//                                                                 content: [
//                                                                     {
//                                                                         elem: 'name',
//                                                                         tag: 'span',
//                                                                         content: item.D
//                                                                     }
//                                                                 ]
//                                                             }
//                                                         );
//                                                     }
//
//                                                     return roles;
//                                                 })()
//                                             },
//                                             {                                                                         //РЕДАКТИРОВАНИЕ
//                                                 tag: 'td',
//                                                 cls: 'text-align-center',
//                                                 content: (function() {
//                                                     var roles = [];
//
//                                                     if (! $.isEmptyObject(item.Roles)) {
//                                                         item.Roles.map(function(i_item) {
//
//                                                             roles.push(
//                                                                 {
//                                                                     block: 'b-button-call',
//                                                                     mods: { height: 'slim', property: 'position' },
//                                                                     js: {
//                                                                         action_name: 'ProjectShowExecuters',
//                                                                         task_id: i_item.ID.toString(),
//                                                                         user_id: $('input[name="user_id"]').val(),
//                                                                         selector: '#place_modal_form',
//                                                                         builder: 'ProjectShowExecuters'
//                                                                     },
//                                                                     tag: 'button',
//                                                                     cls: 'btn btn-primary',
//                                                                     content: [
//                                                                         {
//                                                                             elem: 'glyphicon',
//                                                                             tag: 'span',
//                                                                             cls: 'glyphicon glyphicon-pencil',
//                                                                             attrs: { 'aria-hidden': "true" }
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             );
//                                                         });
//                                                     } else {
//                                                         roles.push(
//                                                             {
//                                                                 block: 'b-button-call',
//                                                                 mods: { height: 'slim' },
//                                                                 js: {
//                                                                     action_name: 'ProjectShowExecuters',
//                                                                     task_id: item.ID.toString(),
//                                                                     user_id: $('input[name="user_id"]').val(),
//                                                                     selector: '#place_modal_form',
//                                                                     builder: 'ProjectShowExecuters'
//                                                                 },
//                                                                 tag: 'button',
//                                                                 cls: 'btn btn-primary',
//                                                                 content: [
//                                                                     {
//                                                                         elem: 'glyphicon',
//                                                                         tag: 'span',
//                                                                         cls: 'glyphicon glyphicon-pencil',
//                                                                         attrs: { 'aria-hidden': "true" }
//                                                                     }
//                                                                 ]
//                                                             }
//                                                         );
//                                                     }
//
//                                                     return roles;
//                                                 })()
//                                             }
//                                         ]
//                                     })
//                                 })
//                             };
//                             return partitions;
//                         })()
//                     }
//                 ]
//             }
//         ]));
//
//         function sumTotalWork() {
//             var sum = 0;
//             $(jdata.Tasks).each(function() {
//                 $(this.Roles).each(function() {
//                     sum +=  parseInt(this.H.split('/')[0]);
//                 })
//             })
//             document.getElementById('b-label-field_TotalWork').innerHTML = sum;
//         };
//
//         sumTotalWork()
//
//     });
// }

function enterExitCost(jdata) {
    var val = jdata.Cost;
    val = val.replace(/[^\d.,]/g, '');
    val = changeCommaPoint(val);
    var arrStr = val.split('.');
    if(arrStr[0].length == 0) {
        arrStr[0] = '0';
    };
    if(arrStr.length > 1 && arrStr[1].length > 0) {
        return getStrRes(arrStr[0]) + '.' + String(arrStr[1]).slice(0, 2);
    } else {
        return getStrRes(arrStr[0]);
    }

    function changeCommaPoint(val) {
        val = val.split('');
        val.forEach(function(item, i ,val) {
            if(val[i] == ',') {
                val[i] = '.';
            }
        })
        return val.join().replace(/[/,]*/g, '');
    }

    function getStrRes(val) {
        var arr, arrRes = [];
        arr = val.replace(/\s/g, '').split('').reverse();
        arr.forEach(function(item, i, arr) {
            if(i % 3 == 0 && i > 0) {
                arrRes.push(' ');
            };
            arrRes.push(arr[i]);
        })
        arrRes = arrRes.reverse().join().replace(/[/,]*/g, '');
        return arrRes;
    }
}
