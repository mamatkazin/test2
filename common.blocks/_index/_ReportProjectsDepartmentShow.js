function ReportProjectsDepartmentShow(answer){
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
        block: 'b-flex-row',
        js: true,
        cls: 'modal-dialog',
        mods: { modal : 'size' },
        content: [
            {
                cls: 'modal-content',
                content: [
                    {
                        cls: 'modal-body',
                        content: [
                            {
                                tag: 'form',
                                attrs: {
                                    role: "form", 
                                    enctype: "multipart/form-data", 
                                    action: "/", 
                                    method: "post"
                                },
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
                                                        content: 'Выгрузить данные'
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'b-flex-column',
                                                js: {
                                                	width: '354px',
                                                	height: '152px',
                                                	//justifyContent: 'space-around',
                                                	alignItems: 'center'
                                                },
                                                cls: 'modal-panel-body',
                                                content: [ 
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {},
                                                        content: [
                                                            {
                                                                block: 't-patterns__combobox',
                                                                mix: { block: 'l-project-new__responsible' },
                                                                js: { 
                                                                    width: '330px',
                                                                    margin: '8px',
                                                                    name: jdata.Departments.Name,
                                                                    value_id: jdata.Departments.FirstID,
                                                                    value_name: jdata.Departments.FirstValue,
                                                                    list: jdata.Departments.List,
                                                                    action: ''
                                                                }
                                                            }
                                                        ]
                                                    },
        	                                        {
        	                                        	block: 'b-flex-row',
        	                                        	js: {
        	                                        		color: 'black',
        	                                        		fontSize: '14px',
            												fontWeight: 'normal'
        	                                        	},
                                                        cls: 'modal-panel-body__row-data',
        	                                        	content: [
                                                            {
                                                                block: 'b-flex-row',
                                                                js: {},
                                                                content: [
                                                                    {
                                                                        block: 'b-flex-row',
                                                                        js: {
                                                                            alignItems: 'center',
                                                                            marginRight: '8px'
                                                                        },
                                                                        content: 'Задайте период с '
                                                                    },
                                                                    {
                                                                        block: 'b-date-field',
                                                                        js: { min_date: -1000 },
                                                                        mods: { property : 'position'},
                                                                        content:
                                                                        [
                                                                            {
                                                                                elem: 'checkInput',
                                                                                js: true,
                                                                                mix: {
                                                                                    block: 'c-input-project-template',
                                                                                    js: true
                                                                                },
                                                                                cls: 'pdate b-input dateInput',
                                                                                tag: 'input',
                                                                                attrs:
                                                                                    {
                                                                                        type: 'text',
                                                                                        maxlength: 10,
                                                                                        name: 'start',
                                                                                        id: 'modalDateBegin'
                                                                                    }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        block: 'b-flex-row',
                                                                        js: {
                                                                            alignItems: 'center',
                                                                            marginLeft: '8px',
                                                                            marginRight: '8px'
                                                                        },
                                                                        content: 'по'
                                                                    },
                                                                    {
                                                                        block: 'b-date-field',
                                                                        js: { min_date: -1000 },
                                                                        mods: { property : 'position'},
                                                                        content:
                                                                        [
                                                                            {
                                                                                elem: 'checkInput',
                                                                                js: true,
                                                                                mix: {
                                                                                    block: 'c-input-project-template',
                                                                                    js: true
                                                                                },
                                                                                cls: 'pdate b-input dateInput',
                                                                                tag: 'input',
                                                                                attrs:
                                                                                    {
                                                                                        type: 'text',
                                                                                        maxlength: 10,
                                                                                        name: 'end',
                                                                                        id: 'modalDateFinish'
                                                                                    }
                                                                         
                                                                            }
                                                                        ]
                                                                    }
        
                                                                ] 
                                                            }
                                                        ] 
        	                                        },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            alignItems: 'center',
                                                            marginTop: '26px',
                                                            marginLeft: '8px',
                                                            marginRight: '8px'
                                                        },
                                                        content:[
                                                            {
                                                                block: 'b-checkbox',
                                                                content: [
                                                                    {
                                                                        elem: 'modal',
                                                                        tag: 'input',
                                                                        attrs: { type: 'checkbox', name: 'Report1'},
                                                                        content: []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                block: 'b-flex-row',
                                                                js: {
                                                                    width: '300px',
                                                                    height: '26px',
                                                                    alignItems: 'center',
                                                                    marginLeft: '8px',
                                                                    marginRight: '8px',
                                                                    fontSize: '14px'
                                                                },
                                                                content: 'Утилизация по проектам'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            alignItems: 'center',
                                                            marginLeft: '8px',
                                                            marginRight: '8px'
                                                        },
                                                        content:[
                                                            {
                                                                block: 'b-checkbox',
                                                                content: [
                                                                    {
                                                                        elem: 'modal',
                                                                        tag: 'input',
                                                                        attrs: { type: 'checkbox', name: 'Report2'},
                                                                        content: []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                block: 'b-flex-row',
                                                                js: {
                                                                    width: '300px',
                                                                    height: '26px',
                                                                    alignItems: 'center',
                                                                    marginLeft: '8px',
                                                                    marginRight: '8px',
                                                                    marginBottom: '2px',
                                                                    fontSize: '14px'
                                                                },
                                                                content: 'Утилизация по блоку'
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
                                                        block: 'b-button-call',
                                                        mix: {
                                                            block: 'c-project-executer',
                                                            
                                                        },
                                                        js: {
                                                            submit: true
                                                        },
                                                        tag: 'button',
                                                        mods: { padding: 'right'},
                                                        cls: 'btn btn-primary',
                                                        attrs: { type: 'submit', id: 'modal-window__button_download', disabled: 'disabled'},
                                                        content: [
                                                            {
                                                                elem: 'l-glyphicon',
                                                                tag: 'span',
                                                                cls: 'glyphicon glyphicon-ok'
                                                            },
                                                            {
                                                                elem: 'text',
                                                                tag: 'span',
                                                                content: 'Выгрузить'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                    	block: 'b-button',
                                                        tag: 'button',
                                                        js: {
                                                        	marginLeft: '8px'
                                                        },
                                                        cls: 'btn btn-default',
                                                        attrs: { type: 'button', 'data-dismiss': 'modal' },
                                                        content: [
                                                            {
                                                                elem: 'text',
                                                                tag: 'span',
                                                                content: 'Отменить'
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

    $(elem).modal('show');

});

}