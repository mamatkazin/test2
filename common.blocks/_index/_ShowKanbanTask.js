function _ShowKanbanTaskForProject(jdata, place_content, builder){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
            
        });
        
    });
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(place_content), BEMHTML.apply({
            block: 'l-kanban',
            content: [
                {
                    elem: 'top',
                    content: [
                        {
                            elem: 'filters',
                            content: [
                                {
                                    block: 'b-fieldset',
                                    tag: 'fieldset',
                                    attrs: { disabled: 'disabled'},
                                    content: [
                                        {
                                            tag: 'legend',
                                            content: 'Фильтр'
                                        },
                                        {
                                            block: 'b-flex-column',
                                            js: {},
                                            content: [
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        marginBottom: '8px'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'b-input',
                                                            js: {},
                                                            tag: 'input',
                                                            attrs: { type: 'text', placeholder: 'Подстрока наименования проекта ...' },
                                                            content: []
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {},
                                                    content: [
                                                        {
                                                            block: 't-patterns__combobox',
                                                            mix: { 
                                                                block: 'c-project-kanban__responsible'

                                                            },
                                                            js: {
                                                                action: 'c-project-kanban__responsible'
                                                            },
                                                            cls: 'c-project-kanban__responsible_sizeBottom c'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {},
                                                    content: [
                                                        {
                                                            block: 't-patterns__combobox',
                                                            mix: { 
                                                                block: 'c-project-kanban__responsible',
                                                                attrs: { style: 'width: 200px!important;'},
                                                            },
                                                            js: {
                                                                name: jdata.FResponsibles.Name,
                                                                value_id: jdata.FResponsibles.FirstID,
                                                                value_name: jdata.FResponsibles.FirstValue,
                                                                list: jdata.FResponsibles.List,
                                                                action: 'c-project-kanban__responsible'
                                                            },
                                                            cls: 'c-project-kanban__responsible_size c-project-kanban__responsible_position'
                                                        },
                                                        {
                                                            block: 'b-input',
                                                            js: {
                                                                height: '27px',
                                                                width: '166px',
                                                                marginLeft: '8px',
                                                                marginRight: '8px'
                                                            },
                                                            tag: 'input',
                                                            attrs: { type: 'text', placeholder: 'Шифр' },
                                                            content: []

                                                        },
                                                        {
                                                            block: 'b-button-call',
                                                            js: {
                                                                width: '120px',
                                                                height: '26px',
                                                                backgroundColor: '#337ab7',
                                                                color: 'white',
                                                                border: '1px solid transparent',
                                                                borderRadius: '4px',
                                                                borderColor: '#2e6da4'
                                                            },
                                                            tag: 'button',
                                                            content: 'Фильтр'

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
                            elem: 'informers',
                            content: [
                                {
                                    block: 'b-fieldset',
                                    tag: 'fieldset',
                                    content: [
                                        {
                                            tag: 'legend',
                                            content: 'Информеры'
                                        },
                                        {
                                            block: 'b-informers',
                                            content: (function() {
                                                _DrawInformers(jdata, '.b-informers')
                                            })()
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'actions',
                            content: [
                                {
                                    block: 'b-fieldset',
                                    tag: 'fieldset',
                                    content: [
                                        {
                                            tag: 'legend',
                                            content: 'Действия'
                                        },
                                        {
                                            block: 'b-button-call',
                                            js: {
                                                action_name: "TaskNewForProject",
                                                project_id: jdata.ID.toString(),
                                                project_name: jdata.Name,
                                                user_id: $('input[name="user_id"]').val(),
                                                selector: '#place_modal_form',
                                                builder: 'NewTaskForProject', 
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
                                                    content: 'Новая задача'
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
                    elem: 'body',
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
                                                                    'data-lavel': j
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
        }));
        
        var scrollHeight = Math.max(
            document.documentElement.offsetHeight, document.documentElement.clientHeight
        );
    
        var cellHeight = (scrollHeight - 480).toString() + 'px';

        $('.c-project-show .c-kanban').css({'height' : cellHeight});
    
        SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.ID.toString(), '1', '.c-project-show .c-kanban td[data-kot-id="1"]', builder, '0', '1');
        SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.ID.toString(), '101', '.c-project-show .c-kanban td[data-kot-id="101"]', builder, '0', '1');
        SendColumnReload(jdata.FResponsibles.FirstID.toString(), jdata.ID.toString(), '2', '.c-project-show .c-kanban td[data-kot-id="2"]', builder, '0', '1');
    });
}

