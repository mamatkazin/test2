'use strict';
function ProjectFAShow(answer){
    var elem = $(answer['selector']);

    elem.empty();

    var jdata = JSON.parse(answer['data']); 

    
    //console.log('_ProjectFAAction', jdata);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-project-new',
            js: {
                width: 600
            },
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
                                            cls: 'panel-heading',
                                            content: [
                                                {
                                                    tag: 'button',
                                                    cls: 'close',
                                                    attrs: { type: 'button', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
                                                    content: 'x'
                                                },
                                                {
                                                    tag: 'h3',
                                                    cls: 'panel-title modal-title',
                                                    content: 'Корректирующие мероприятия'
                                                }
                                            ]
                                        },
                                        {
                                            cls: 'panel-body',
                                            content: [
                                                {
                                                    block: 'b-combobox-field',
                                                    mix: [
                                                        {
                                                            block: 'c-block__disabled',
                                                            js: {}
                                                        }
                                                    ],
                                                    content: [
                                                        {
                                                            block: 't-patterns__combobox',
                                                            mix: { 
                                                                block: 'l-project-new__responsible'
                                                             },
                                                            js: { 
                                                                name: jdata.FATypes.Name,
                                                                value_id: jdata.FATypes.FirstID,
                                                                value_name: jdata.FATypes.FirstValue,
                                                                list: jdata.FATypes.List,
                                                                action: '',
                                                                marginBottom: '0px!important'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-flex-column',
                                                    js: {},
                                                    cls: 'addRowProjectFAAction',
                                                    content: (function(){
                                                        var selector = '.addRowProjectFAAction';
                                                        _ProjectFAReload(jdata, selector);

                                                    })()
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        paddingTop: '8px',
                                                        justifyContent: 'start'
                                                    },
                                                    mix: [
                                                        {
                                                            block: 'c-block__disabled-this',
                                                            js: {}
                                                        }
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'b-button',
                                                            js: true,
                                                            content: [
                                                                {
                                                                    elem: 'add',
                                                                    js: {
                                                                        width: '40px',
                                                                        height: '26px'
                                                                    },
                                                                    tag: 'button',
                                                                    cls: 'btn btn-primary',
                                                                    content: [
                                                                        {
                                                                            elem: 'glyphicon',
                                                                            tag: 'span',
                                                                            cls: 'glyphicon glyphicon-plus',
                                                                            attrs: { 'aria-hidden': 'true', style: 'position: relative; top: -2px;' }
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
                                            cls: 'panel-footer',
                                            content: [
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        justifyContent: 'space-between'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'b-button-call',
                                                            js: {
                                                                action_name: 'ProjectFAClose',
                                                                fa_id: jdata.FAID.toString(),
                                                                project_id: JSModel.answer['project_id'],
                                                                selector: 'li.b-checkbox-task[name="contract_tasks"][data-task-id="'+answer["task_id"]+'"]',
                                                                builder: 'ProcessCardFAReload'
                                                            },
                                                            mix: [
                                                                {
                                                                    block: 'b-button__modal-close',
                                                                    js: true
                                                                }
                                                            ],
                                                            tag: 'button',
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
                                                                    content: 'Выполнено'
                                                                }
                                                            ] 
                                                        },
                                                        {
                                                            tag: 'button',
                                                            cls: 'btn btn-default',
                                                            attrs: { type: 'button', 'data-dismiss': 'modal' },
                                                            content: [
                                                                {
                                                                    elem: 'text',
                                                                    tag: 'span',
                                                                    content: 'Закрыть'
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
        
        elem.modal('show'); 
    });

}


function ProjectFAReload(answer) {
    var jdata = JSON.parse(answer['data']); 

    _ProjectFAReload(jdata, answer['selector'])
    if (! $.isEmptyObject(answer['type_id'])) {
        ProcessCardFAReload(answer)
    }
}


function _ProjectFAReload(jdata, selector){
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(selector), BEMHTML.apply({
            block: 'b-flex-column',
            js: {},
            cls: 'addRowProjectFAAction',
            mix: [
                {
                    block: 'c-block__disabled-this',
                    js: {}
                }
            ],
            content: (function(){
                var res = [];
                    
                if (! $.isEmptyObject(jdata.FAActions)) {
                    jdata.FAActions.map(function(item) {

                        res.push({
                            block: 'b-flex-row',
                            js: {
                                paddingTop: '8px'
                            },
                            content: [
                                {
                                    block: 'b-checkbox-elem',
                                    js: {
                                        action_name: 'ProjectFACheck',
                                        selector: '.addRowProjectFAAction',
                                        builder: 'ProjectFAReload',
                                        marginTop: '2px',
                                        marginRight: '8px',
                                        width: '25.48px',
                                        height: '22px',
                                        borderRadius: '2px',
                                        border: '1px solid gray',
                                        backgroundColor: '#e2e2e2',
                                        state: item.S,
                                        project_id: JSModel.answer['project_id'],
                                        fa_act_id: item.ID.toString()

                                    }
                                },
                                {
                                    block: 'b-input-string',
                                    cls: 'form-control',
                                    js: {
                                        width: '358px',
                                        height: '26px',
                                        marginRight: '8px'
                                    },
                                    mix:[
                                        { 
                                            block: 'c-fa-action-change',
                                            js: { 
                                                fa_action_id: item.ID,
                                                project_id: JSModel.answer['project_id']
                                            }
                                        }
                                    ],
                                    tag: 'input',
                                    attrs: { type: "text", name: 'act', value: item.Act, 'data-old': item.Act, 'data-check': 'true' }
                                },
                                {
                                    block: 'b-date-field',
                                    js: {
                                        marginRight: '8px',
                                        width: '88px'
                                    },
                                    content: [
                                        {
                                            elem: 'checkInput',
                                            mix:[
                                                { 
                                                    block: 'b-input' 
                                                },
                                                { 
                                                    block: 'c-fa-action-change',
                                                    js: { 
                                                        fa_action_id: item.ID,
                                                        project_id: JSModel.answer['project_id']
                                                    }
                                                }
                                            ],
                                            js: {
                                                width: '88px'
                                            },
                                            tag: 'input',
                                            cls: 'form-control pdate',
                                            attrs: { type: "text", name: 'd', value: item.D, 'data-old': item.D, 'data-check': 'true' }
                                        }
                                    ]
                                },
                                {
                                    block: 'b-button',
                                    js: true,
                                    content: [
                                        {
                                            elem: 'delete',
                                            js: {
                                                project_id: JSModel.answer['project_id'],
                                                fa_act_id: item.ID.toString(),
                                                width: '40px',
                                                height: '26px'
                                            },
                                            tag: 'button',
                                            cls: 'btn btn-danger',
                                            content: [
                                                {
                                                    elem: 'glyphicon',
                                                    tag: 'span',
                                                    cls: 'glyphicon glyphicon-remove',
                                                    attrs: { 'aria-hidden': 'true', style: 'position: relative; top: -2px;' }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        });
                    });
                } else {

                    res.push({
                        block: 'b-flex-row',
                        js: {
                            paddingTop: '8px'
                        },
                        content: (function(){
                            var selector = '.addRowProjectFAAction';
                            createRowProjectFAAction(selector);
                        })()
                    });
                };
  
                return res;
            })()

        }));
    });
}
//здесь создается пустая строка
function createRowProjectFAAction(selector){
    //console.log('createRowProjectFAAction');
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply({
            block: 'b-flex-row',
            js: {
                paddingTop: '8px'
            },
            content: [
                {
                    block: 'b-checkbox-elem',
                    js: {
                        action_name: 'ProjectFACheck',
                        selector: '.addRowProjectFAAction',
                        builder: 'ProjectFAReload',
                        marginTop: '2px',
                        marginRight: '8px',
                        width: '25.48px',
                        height: '22px',
                        borderRadius: '2px',
                        border: '1px solid gray',
                        backgroundColor: '#e2e2e2'
                    },
                    content: []
                },
                {
                    block: 'b-input-string',
                    cls: 'form-control',
                    js: {
                        width: '358px',
                        height: '26px',
                        marginRight: '8px'
                    },
                    mix:[
                        { 
                            block: 'c-fa-action-change',
                            js: { 
                                fa_action_id: "0",
                                project_id: JSModel.answer['project_id']
                            }
                        }
                    ],
                    tag: 'input',
                    attrs: { type: "text" },
                    content: []
                },
                {
                    block: 'b-date-field',
                    js: {
                        width: '88px',
                        marginRight: '8px'
                    },
                    content: [
                        {
                            elem: 'checkInput',
                            mix:[
                                { 
                                    block: 'b-input' 
                                },
                                { 
                                    block: 'c-fa-action-change',
                                    js: { 
                                        fa_action_id: "0",
                                        project_id: JSModel.answer['project_id']
                                    }
                                }
                            ],
                            js: {
                                width: '88px'
                            },
                            tag: 'input',
                            cls: 'form-control pdate',
                            attrs: { type: "text", name: 'target_date' }
                        }
                    ]
                },
                {
                    block: 'b-button',
                    js: {
                            width: '40px',
                            height: '26px'
                        },
                    tag: 'button',
                    cls: 'btn btn-danger',
                    mix: [
                        {
                            block: 'c-button__delete-row',
                            js: {
                                
                            }
                        }
                    ],
                    content: [
                        {
                            elem: 'glyphicon',
                            tag: 'span',
                            cls: 'glyphicon glyphicon-remove',
                            attrs: { 'aria-hidden': 'true', style: 'position: relative; top: -2px;' }
                        }
                    ]
                }
            ]

        }));
    });
}

function ProcessCardFAReload(answer) {
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find('#process_card_'+answer['project_id']+' .c-process-card__cor-action'), BEMHTML.apply({
            block: 'c-process-card__cor-action',
            js: {
                project_id: answer['project_id'],
                faTypeID: answer['type_id']
            },
            tag: 'span',
            cls: 'glyphicon glyphicon-warning-sign',
            attrs: { 'aria-hidden': "true" }

        }));
    });
}