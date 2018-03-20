function ProjectTaskScriptShow(answer){
    /*var elem = $(answer['selector']);

    elem.empty();

    var jdata = JSON.parse(answer['data']); 
    //console.log('ProjectTaskScriptShow', jdata);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'b-flex-row',
            js: {
                width: '900px'
            },
            cls: 'modal-dialog',
            mods: { modal : 'size' },
            content: [
                {
                    cls: 'modal-content modal-content-size',
                    content: [
                        {
                            cls: 'modal-body',
                            content: [
                                {
                                    cls: 'panel panel-primary',
                                    content: [
                                        {
                                            tag: 'form',
                                            attrs: {
                                                role: "form", 
                                                enctype: "multipart/form-data", 
                                                action: "/request-task-execute", 
                                                method: "post"
                                            },
                                            content: [
                                                {
                                                    tag: 'input',
                                                    attrs: { type: 'hidden', name: 'kot_id', value: g_heap['kot_id'].toString() }
                                                },
                                                {
                                                    tag: 'input',
                                                    attrs: { type: 'hidden', name: 'task_id', value: answer['task_id'] }
                                                },
                                                {
                                                    tag: 'input',
                                                    attrs: { type: 'hidden', name: 'script_value', value: '' }
                                                },
                                                {
                                                    tag: 'input',
                                                    attrs: { type: 'hidden', name: 'request_id', value: answer['request_id'] }
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        padding: '4px 4px 4px 8px',
                                                        height: '31px',
                                                        justifyContent: 'space-between',
                                                        color: '#fff',
                                                        background: '#337ab7'
                                                    },
                                                    content: [
                                                        {
                                                            tag: 'h3',
                                                            cls: 'panel-title modal-title',
                                                            content: 'Задача: ' + JSModel.text
                                                        },
                                                        {
                                                            tag: 'button',
                                                            
                                                            cls: 'close',
                                                            attrs: { type: 'button', 'data-dismiss': 'modal', 'aria-hidden': 'true', style: 'padding-bootom: 2px; padding-right: 4px;' },
                                                            content: 'x'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-flex-column',
                                                    js: {
                                                        justifyContent: 'center'
                                                    },
                                                    attrs: { id: 'modalWindowRequestCanban' },
                                                    cls: 'modalWindowRequestEdit',
                                                    content: [ 
                                                        (function(){
                                                            var res = [];
                                                            if(jdata.Script !=4) {
                                                                res.push([
                                                                    {
                                                                        block: 'b-fex-column',
                                                                        content: [                                                                {
                                                                                block: 'b-flex-column',
                                                                                js: {
                                                                                    margin: '8px'
                                                                                },
                                                                                content: [
                                                                                    {
                                                                                        block: 'b-textarea-field',
                                                                                        content: [
                                                                                            {
                                                                                                elem: 'name',
                                                                                                js: {
                                                                                                    width: '100%'
                                                                                                },
                                                                                                tag: 'textarea',
                                                                                                cls: 'form-control',
                                                                                                attrs: { rows:'5', name: 'reason', type: 'textarea', placeholder: 'Комментарий' },
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                block: 'b-flex-row',
                                                                                js: {
                                                                                    marginRight: '8px',
                                                                                    marginLeft: '8px',
                                                                                    height: '30px'
                                                                                },
                                                                                content: [
                                                                                    {
                                                                                        tag: 'h5',
                                                                                        content: 'Загрузить файл'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                block: 'b-fex-column',
                                                                                js: {},
                                                                                cls: 'downloadFiles',
                                                                                attrs: { id: 'downloadFiles'},
                                                                                content:[
                                                                                    {
                                                                                        block: 'b-flex-row',
                                                                                        js: {
                                                                                            margin: '8px'
                                                                                        },
                                                                                        
                                                                                        content: [
                                                                                            {
                                                                                                block: 'b-input-file',
                                                                                                mix:{
                                                                                                    block: 'с-input-file',
                                                                                                    js: true
                                                                                                },
                                                                                                js: {},
                                                                                                tag: 'input',
                                                                                                attrs: { type: "file", name: "file_upload"}
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    ])
                                                            }
                                                            return res;
                                                        })(),
                                                        {
                                                            block: 'b-flex-column',
                                                            js: {
                                                                margin: '8px'
                                                            },
                                                            cls: 'c-history-tasks',
                                                            content: [
                                                                {
                                                                    tag: 'table',
                                                                    cls: 'table table-bordered',
                                                                    content: [
                                                                        {
                                                                            tag: 'thead',
                                                                            content: [
                                                                                {
                                                                                    tag: 'tr',
                                                                                    content: [
                                                                                        {
                                                                                            tag: 'th',
                                                                                            content: 'Дата'
                                                                                        },
                                                                                        {
                                                                                            tag: 'th',
                                                                                            content: 'Пользователь'
                                                                                        },
                                                                                        {
                                                                                            tag: 'th',
                                                                                            content: 'Действие'
                                                                                        },
                                                                                        {
                                                                                            tag: 'th',
                                                                                            content: 'Комментарий'
                                                                                        },
                                                                                        {
                                                                                            tag: 'th',
                                                                                            content: 'Файлы'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'c-body-history',
                                                                        content: [
                                                                        {
                                                                            tag: 'table',
                                                                            cls: 'table table-bordered table-hover',
                                                                            content: [
                                                                                {
                                                                                    tag: 'tbody',
                                                                                    content: (function(){
                                                                                        var res = [];
                                                                                        
                                                                                        if (! $.isEmptyObject(jdata.History)) {
                                                                                            jdata.History.map(function(i_item) {
                                                                                                
                                                                                                res.push({
                                                                                                    tag: 'tr',
                                                                                                    content: [
                                                                                                        {
                                                                                                            tag: 'td',
                                                                                                            content: i_item.D
                                                                                                        },
                                                                                                        {
                                                                                                            tag: 'td',
                                                                                                            content: i_item.FIO
                                                                                                        },
                                                                                                        {
                                                                                                            tag: 'td',
                                                                                                            content: i_item.Act
                                                                                                        },
                                                                                                        {
                                                                                                            tag: 'td',
                                                                                                            content: i_item.Descr
                                                                                                        },
                                                                                                        {
                                                                                                            tag: 'td',
                                                                                                            content: (function(){
                                                                                                                var doc = [];
                                                                                        
                                                                                                                if (! $.isEmptyObject(i_item.Documents)) {
                                                                                                                    i_item.Documents.map(function(ii_item) {
                                                                                                                        var link = createLink(ii_item.Name);
                                                                                                                        doc.push([
                                                                                                                            {
                                                                                                                                tag: 'input',
                                                                                                                                attrs: { type: "hidden", name: 'file_id', value: ii_item.ID }
                                                                                                                            },
                                                                                                                            {
                                                                                                                                block: 'b-input-link',
                                                                                                                                tag: 'input',
                                                                                                                                attrs: { type: "submit", name: 'file_name', value: link, title: ii_item.Name }
                                                                                                                            }
                                                                                                                        ])
                                                                                                         
                                                                                                                    });
                                                                                                                };
                                                                                                    
                                                                                                                return doc;
                                                                                                                
                                                                                                            })()
                                                                                                        }
                                                                                                    ]
                                                                                                });
                                                                                            });
                                                                                
                                                                                            return res;
                                                                                        }
                                                                                    })()
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
                                                    block: 'c-modal-form__panel-footer',
                                                    js: {
                                                        paddingRight: '8px!important'
                                                    },
                                                    cls: 'panel-footer',
                                                    content: (function() {
                                                        var res = [];
                                                            
                                                        if (jdata.Script == 1) {
                                                            res.push([
                                                                {
                                                                    block: 'b-button',
                                                                    mix: {
                                                                        block: 'c-request-task-execute',
                                                                        js: {
                                                                            value: "1"
                                                                        }
                                                                        
                                                                    },
                                                                    tag: 'button',
                                                                    mods: { padding: 'right'},
                                                                    js: {
                                                                        marginRight: '8px',
                                                                        height: '32px'
                                                                    },
                                                                    cls: 'btn btn-primary',
                                                                    attrs: { type: 'submit' },
                                                                    content: [
                                                                        {
                                                                            elem: 'l-glyphicon',
                                                                            tag: 'span',
                                                                            cls: 'glyphicon glyphicon-ok'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            js: { paddingLeft: '8px' },
                                                                            tag: 'span',
                                                                            content: 'Согласовать'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-button',
                                                                    tag: 'button',
                                                                    js: {
                                                                        marginLeft: '8px',
                                                                        height: '32px'
                                                                    },
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
                                                            ]);
                                                        } else if (jdata.Script == 2) {
                                                            res.push([
                                                                {
                                                                    block: 'b-button',
                                                                    mix: {
                                                                        block: 'c-request-task-execute',
                                                                        js: {
                                                                            value: "1"
                                                                        }
                                                                        
                                                                    },
                                                                    tag: 'button',
                                                                    mods: { padding: 'right'},
                                                                    js: {
                                                                        marginRight: '4px',
                                                                        height: '32px'
                                                                    },
                                                                    cls: 'btn btn-primary',
                                                                    attrs: { type: 'submit' },
                                                                    content: [
                                                                        {
                                                                            elem: 'l-glyphicon',
                                                                            tag: 'span',
                                                                            cls: 'glyphicon glyphicon-ok'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            js: { paddingLeft: '8px' },
                                                                            tag: 'span',
                                                                            content: 'Согласовать'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-button',
                                                                    tag: 'button',
                                                                    js: {
                                                                        marginLeft: '4px',
                                                                        backgroundColor: 'red',
                                                                        height: '32px'
                                                                    },
                                                                    mix: {
                                                                        block: 'c-request-task-execute',
                                                                        js: {
                                                                            value: "2"
                                                                        }
                                                                        
                                                                    },
                                                                    cls: 'btn btn-danger',
                                                                    attrs: { type: 'submit' },
                                                                    content: [
                                                                        {
                                                                            elem: 'text',
                                                                            tag: 'span',
                                                                            js: {
                                                                                color: 'white'
                                                                            },
                                                                            content: 'Отклонить'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-button',
                                                                    tag: 'button',
                                                                    js: {
                                                                        marginLeft: '16px',
                                                                        height: '32px'
                                                                    },
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
                                                            ])
                                                        } else if (jdata.Script == 3) {
                                                            res.push([
                                                                {
                                                                    block: 'b-button',
                                                                    mix: {
                                                                        block: 'c-request-task-execute',
                                                                        js: {
                                                                            value: "0"
                                                                        }
                                                                        
                                                                    },
                                                                    tag: 'button',
                                                                    mods: { padding: 'right'},
                                                                    js: {
                                                                        marginRight: '8px',
                                                                        height: '32px'
                                                                    },
                                                                    cls: 'btn btn-primary',
                                                                    attrs: { type: 'submit' },
                                                                    content: [
                                                                        {
                                                                            elem: 'l-glyphicon',
                                                                            tag: 'span',
                                                                            cls: 'glyphicon glyphicon-ok'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            js: { paddingLeft: '8px' },
                                                                            tag: 'span',
                                                                            content: 'Передал/Отправил'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-button',
                                                                    tag: 'button',
                                                                    js: {
                                                                        marginLeft: '8px',
                                                                        height: '32px'
                                                                    },
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
                                                            ])
                                                        };
                                                        return res;
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
    
        $(elem).modal('show');
    });*/
}