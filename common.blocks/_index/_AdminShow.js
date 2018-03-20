function AdminShow(answer){
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
            block: 'l-admin',
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
                                            cls: 'panel-body',
                                            content: [
                                                {
                                                    block: 'messenger'
                                                },
                                                {
                                                    tag: 'h3',
                                                    content: 'Список подразделений'
                                                },
                                                {
                                                    block: 'b-css-table',
                                                    content: [
                                                        {
                                                            elem: 'cell',
                                                            js: { width: '20%' },
                                                            elemMods: { right: '24' },
                                                            content: [
                                                                {
                                                                    block: 'l-admin-deps',
                                                                    content: [
                                                                        {
                                                                            tag: 'table',
                                                                            cls: 'table table-hover',
                                                                            content: [
                                                                                {
                                                                                    tag: 'tbody',
                                                                                    content: (function() {
                                                                                        var tr = [];
        
                                                                                        if (! $.isEmptyObject(jdata.Deps)) {
                                                                                            jdata.Deps.map(function(item) {
                                                                                                tr.push({
                                                                                                    block: 'c-admin-deps',
                                                                                                    tag: 'tr',
                                                                                                    js: { 
                                                                                                        action_name: 'AdminDepsUserLoad',
                                                                                                        dep_id: item.ID.toString(),
                                                                                                        user_id: $('input[name="user_id"]').val(),
                                                                                                        selector: '.l-admin-deps-userload',
                                                                                                        builder: 'AdminDepsUserLoad',
                                                                                                    },
                                                                                                    attrs: {
                                                                                                        id: 'dep_' + item.ID,
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
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            js: { width: '80%' },
                                                            content: [
                                                                {
                                                                    block: 'l-admin-deps-userload',
                                                                    content: ''
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    tag: 'h3',
                                                    content: 'Список Пользователей'
                                                },
                                                {
                                                    block: 'b-css-table',
                                                    content: [
                                                        {
                                                            elem: 'cell',
                                                            js: { width: '20%' },
                                                            elemMods: { right: '24' },
                                                            content: [
                                                                {
                                                                    block: 'l-admin-users',
                                                                    content: [
                                                                        {
                                                                            tag: 'table',
                                                                            cls: 'table table-hover',
                                                                            content: [
                                                                                {
                                                                                    tag: 'tbody',
                                                                                    content: (function() {
                                                                                        var tr = [];
        
                                                                                        if (! $.isEmptyObject(jdata.Users)) {
                                                                                            jdata.Users.map(function(item) {
                                                                                                tr.push({
                                                                                                    block: 'c-admin-users',
                                                                                                    tag: 'tr',
                                                                                                    js: { 
                                                                                                        action_name: 'AdminUsersLoad',
                                                                                                        emploeer_id: item.ID.toString(),
                                                                                                        user_id: $('input[name="user_id"]').val(),
                                                                                                        date: (new Date()).toLocaleDateString(),
                                                                                                        selector: '.l-admin-usersload',
                                                                                                        builder: 'AdminUsersLoad',
                                                                                                    },
                                                                                                    attrs: {
                                                                                                        id: 'user_' + item.ID,
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
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            js: { width: '80%' },
                                                            content: [
                                                                {
                                                                    block: 'l-admin-usersload',
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
        }));
    });
}

function AdminDepsUserLoad(answer){
    var elem = $(answer['selector']);
    
    elem.empty();
    
    var jdata = JSON.parse(answer['data']);
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'l-admin-deps-userload',
            content: [
                {
                    tag: 'table',
                    cls: 'table table-hover',
                    content: [
                        {
                            tag: 'tbody',
                            content: (function() {
                                var tr = [];
        
                                if (! $.isEmptyObject(jdata)) {
                                    jdata.map(function(item) {
                                        tr.push({
                                            tag: 'tr',
                                            content: [
                                                {
                                                    tag: 'td',
                                                    content: item.Name
                                                },
                                                {
                                                    tag: 'td',
                                                    content: item.Inf
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

        }));
    });
}

function AdminUsersLoad(answer){
    var elem = $(answer['selector']);
    
    elem.empty();
    
    var jdata = JSON.parse(answer['data']);
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'l-admin-usersload',
            content: [
                {
                    block: 'b-css-table',
                    content: [
                        {
                            elem: 'cell',
                            elemMods: { right: '24' },
                            content: 'Загрузка пользователя на 30 дней вперед: ' + jdata.Name + ' - ' + jdata.Inf
                        }
                    ]
                },
                {
                    block: 'l-task-timesheet',
                    content: (function() {
                        var selector = '.l-task-timesheet';
                        
                        _AdminShowCaptionTTS(selector, jdata, answer['emploeer_id']);
                    })()

                }
            ]

        }));
    });
}

function AdminShowCaptionTTS(answer){
    var elem = $(answer['selector']);
    
    elem.empty();
    
    var jdata = JSON.parse(answer['data']);
    
    _AdminShowCaptionTTS(answer['selector'], jdata, answer['emploeer_id']);
}    
    
function _AdminShowCaptionTTS(selector, jdata, emploeer_id){
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(selector), BEMHTML.apply({

            block: 'l-task-timesheet',
            content: [
                {
                    block: 'l-tts-change-week',
                    content: [
                        {
                            block: 'b-button-submit',
                            mix: [
                                { 
                                    block: 'c-tts-change-week', 
                                    js: {
                                        action_name: "AdminShowCaptionTTS",
                                        date: jdata.CaptionTTS.D1,
                                        difference: '-',
                                        emploeer_id: emploeer_id,
                                        selector: ".l-task-timesheet",
                                        builder: "AdminShowCaptionTTS"
                                    } 
                                },
                                { 
                                    block: 'l-app__space_right-8px', 
                                }
                            ],
                            tag: 'button',
                            cls: 'btn btn-default',
                            attrs: { type: 'button' },
                            content: [
                                {
                                    elem: 'l-glyphicon',
                                    tag: 'span',
                                    cls: 'glyphicon glyphicon-arrow-left'
                                },
                                {
                                    elem: 'text',
                                    tag: 'span',
                                    content: 'Предыдущая неделя'
                                }
                            ] 
                        },
                        {
                            block: 'b-button-submit',
                            mix: { 
                                block: 'c-tts-change-week', 
                                js: {
                                    action_name: "AdminShowCaptionTTS",
                                    date: jdata.CaptionTTS.D1,
                                    difference: '+',
                                    emploeer_id: emploeer_id,
                                    selector: ".l-task-timesheet",
                                    builder: "AdminShowCaptionTTS"
                                } 
                            },
                            tag: 'button',
                            cls: 'btn btn-default',
                            attrs: { type: 'button' },
                            content: [
                                {
                                    elem: 'text',
                                    tag: 'span',
                                    content: 'Следующая неделя'
                                },
                                {
                                    elem: 'r-glyphicon',
                                    tag: 'span',
                                    cls: 'glyphicon glyphicon-arrow-right'
                                }
                            ] 
                        }
                    ]
                },
                {
                    block: 'b-task-timesheet',
                    tag: 'table',
                    cls: 'table table-bordered',
                    content: [
                        {
                            elem: 'thead',
                            tag: 'thead',
                            content: [
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            elem: 'pname',
                                            tag: 'th',
                                            attrs: { rowspan: "2" },
                                            content: jdata.CaptionTTS.PName
                                        },
                                        {
                                            elem: 'tname',
                                            tag: 'th',
                                            attrs: { rowspan: "2" },
                                            content: jdata.CaptionTTS.TName
                                        },
                                        {
                                            elem: 't',
                                            tag: 'th',
                                            attrs: { rowspan: "2" },
                                            content: jdata.CaptionTTS.T
                                        },
                                        {
                                            elem: 'd',
                                            tag: 'th',
                                            attrs: { rowspan: "2" },
                                            content: jdata.CaptionTTS.D
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: "ПН"
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: "ВТ"
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: "СР"
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: "ЧТ"
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: "ПТ"
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: "СБ"
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: "ВС"
                                        }
                                    ]
                                },
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.CaptionTTS.D1
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.CaptionTTS.D2
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.CaptionTTS.D3
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.CaptionTTS.D4
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.CaptionTTS.D5
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.CaptionTTS.D6
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.CaptionTTS.D7
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'tbody',
                            tag: 'tbody',
                            content: (function() {
                                var task = [];
                                
                                if (! $.isEmptyObject(jdata.BodyTTS)) {
                                    jdata.BodyTTS.map(function(item) {
                            
                                        task.push({
                                            tag: 'tr',
                                            attrs: { 'data-id': item.TaskID },
                                            content: [
                                                {
                                                    block: 'pname',
                                                    mix: { block: 'b-task-timesheet-pname', js: { text: item.PName } },
                                                    tag: 'td'
                                                },
                                                {
                                                    block: 'tname',
                                                    mix: { block: 'b-task-timesheet-tname', js: { text: item.TName } },
                                                    tag: 'td'
                                                },
                                                {
                                                    elem: 't',
                                                    tag: 'td',
                                                    content: item.T
                                                },
                                                {
                                                    elem: 'd',
                                                    tag: 'td',
                                                    content: item.D
                                                },
                                                {
                                                    elem: 'hour',
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            block: 'b-input',
                                                            mix: { block: 'b-input-time', js: { number: 1 } },
                                                            tag: 'input',
                                                            attrs: { type: 'text', value: item.H1, 'data-id': item.TaskID, 'data-date': item.D1, 'data-old-val': item.H1, disabled: 'disabled' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'hour',
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            block: 'b-input',
                                                            mix: { block: 'b-input-time', js: { number: 2 } },
                                                            tag: 'input',
                                                            attrs: { type: 'text', value: item.H2, 'data-id': item.TaskID, 'data-date': item.D2, 'data-old-val': item.H2, disabled: 'disabled' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'hour',
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            block: 'b-input',
                                                            mix: { block: 'b-input-time', js: { number: 3 } },
                                                            tag: 'input',
                                                            attrs: { type: 'text', value: item.H3, 'data-id': item.TaskID, 'data-date': item.D3, 'data-old-val': item.H3, disabled: 'disabled' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'hour',
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            block: 'b-input',
                                                            mix: { block: 'b-input-time', js: { number: 4 } },
                                                            tag: 'input',
                                                            attrs: { type: 'text', value: item.H4, 'data-id': item.TaskID, 'data-date': item.D4, 'data-old-val': item.H4, disabled: 'disabled' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'hour',
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            block: 'b-input',
                                                            mix: { block: 'b-input-time', js: { number: 5 } },
                                                            tag: 'input',
                                                            attrs: { type: 'text', value: item.H5, 'data-id': item.TaskID, 'data-date': item.D5, 'data-old-val': item.H5, disabled: 'disabled' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'hour',
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            block: 'b-input',
                                                            mix: { block: 'b-input-time', js: { number: 6 } },
                                                            tag: 'input',
                                                            attrs: { type: 'text', value: item.H6, 'data-id': item.TaskID, 'data-date': item.D6, 'data-old-val': item.H6, disabled: 'disabled' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'hour',
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            block: 'b-input',
                                                            mix: { block: 'b-input-time', js: { number: 7 } },
                                                            tag: 'input',
                                                            attrs: { type: 'text', value: item.H7, 'data-id': item.TaskID, 'data-date': item.D7, 'data-old-val': item.H7, disabled: 'disabled' }
                                                        }
                                                    ]
                                                }
                                            ]
                                        });
                                    })
                                };
                                
                                task.push({
                                    block: 'c-tts-get-summa',
                                    tag: 'tr',
                                    content: [
                                        {
                                            elem: 'descr',
                                            tag: 'td',
                                            attrs: { colspan: "4" },
                                            content: 'Итого, затраченно времени за день:'
                                        },
                                        {
                                            elem: 'time', 
                                            js: { number: 1 },
                                            tag: 'td'
                                        },
                                        {
                                            elem: 'time', 
                                            js: { number: 2 },
                                            tag: 'td'
                                        },
                                        {
                                            elem: 'time', 
                                            js: { number: 3 },
                                            tag: 'td'
                                        },
                                        {
                                            elem: 'time',
                                            js: { number: 4 },
                                            tag: 'td'
                                        },
                                        {
                                            elem: 'time', 
                                            js: { number: 5 },
                                            tag: 'td'
                                        },
                                        {
                                            elem: 'time', 
                                            js: { number: 6 },
                                            tag: 'td'
                                        },
                                        {
                                            elem: 'time', 
                                            js: { number: 7 },
                                            tag: 'td'
                                        }
                                    ]
                                });
                                    
                                return task;
                            })()
                        }
                    ]
                }
            ]

        }));
        
        
    });
}