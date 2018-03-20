'use strict';
function ReportDepUtilisationShow(answer) {
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });

    $(answer['selector']).empty();

    var jdata = JSON.parse(answer['data']);
    
    //console.log('jdata ReportDepUtilisationShow', jdata);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'b-flex-column',
            js: {},
            content:[
                {
                    block: 'b-flex-column',
                    attrs: {id: 'reportUtilisationShow'},
                    js: {
                        margin: '8px',
                    },
                    content: [
                        {
                            block: 'b-flex-row',
                            js: {
                                justifyContent: 'center',
                                margin: '8px',
                                fontSize: '16px',
                                fontWeight: 'bold'
                            },
                            content: 'Сводная таблица по утилизации'
                        },
                        {
                            block: 'b-flex-row',
                            js: {
                                justifyContent: 'center',
                                margin: '8px',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            },
                            content: 'Внимание! Формирование отчета длительный процесс и занимает несколько минут.'
                        },
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
                                    block: 'b-flex-row',
                                    js: {
                                        width: '30%'
                                    },
                                    content: [
                                        {
                                            block: 'b-combobox-field',
                                            attrs: {style: 'width: 55%;'},
                                            content: [
                                                {
                                                    block: 't-patterns__combobox',
                                                    js: { 
                                                        name: jdata.Departments.Name,
                                                        value_id: jdata.Departments.FirstID,
                                                        value_name: jdata.Departments.FirstValue,
                                                        list: jdata.Departments.List,
                                                        action: 'c-getlist-child-unit'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-button',
                                            tag: 'button',
                                            js: {
                                                height: '26px',
                                                marginLeft: '8px',
                                                backgroundColor: '#337ab7'
                                            },
                                            cls: 'btn btn-default',
                                            attrs: { type: 'button', id: 'buttonReportUtilisationShow', disabled: 'disabled' },
                                            mix: { 
                                                block: 'c-button-content', 
                                                js: {}
                                            },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    tag: 'span',
                                                    attrs: { style: 'position: relative; top: -4px; color: white;'}, 
                                                    content: 'Сформировать'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-button-call',
                                            js: {
                                                border: '0px',
                                                submit: true,
                                                position: 'relative',
                                                top: '2px',
                                                left: '4px',
                                                justifyContent: 'center',
                                                width: '23px',
                                                height: '23px',
                                                cursor: 'pointer',
                                                backgroundImage: 'url(../app/img/exel.png)'
                                            },
                                            tag: 'button',
                                            cls: 'opacityOff',
                                            attrs: { type: 'submit', id: 'buttonExcelReportUtilisationShow', disabled: 'disabled'}
                                        }
                                    ]
                                },
        //                            {
        //                                block: 'b-flex-row',
        //                                js: {
        //                                    width: '30%'
        //                                },
        //                                attrs: { id: 'commonDepartmentList'},
        //                                content: (function() {
        //                                        var selector = '#commonDepartmentList';

        //                                        jdata.Departments.List = null;
        //                                        jdata.Departments.FirstValue = '';

        //                                        _CommonDepartmentsList(selector, jdata.Departments);        
        //                                })()    
        //                            },
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        width: '38%'
                                    },
                                    content: [
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '79%'
                                            },
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
                                                    js: { min_date: -28 },
                                                    mods: { property : 'position'},
                                                    mix: { 
                                                        block: 'c-input-check', 
                                                        js: true
                                                    },
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
                                                                    name: 'start'
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
                                                    js: { min_date: -28 },
                                                    mods: { property : 'position'},
                                                    mix: { 
                                                        block: 'c-input-check', 
                                                        js: true
                                                    },
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
                                                                    name: 'end'
                                                                }
                                                     
                                                        }
                                                    ]
                                                }
                                            ] 
                                        },
                                        // {
                                        //     block: 'b-button',
                                        //     tag: 'button',
                                        //     js: {
                                        //         height: '26px',
                                        //         marginLeft: '8px'
                                        //     },
                                        //     cls: 'btn btn-default',
                                        //     attrs: { type: 'button' },
                                        //     content: [
                                        //         {
                                        //             elem: 'text',
                                        //             tag: 'span',
                                        //             attrs: { style: 'position: relative; top: -4px;'},
                                        //             content: 'Выгрузить в Excel'
                                        //         }
                                        //     ]
                                        // }
                                    ]
                                }
                            ]
                        }
                        
                    ]
                },
                {
                    block: 'b-flex-column',
                    attrs: {id: 'tableReportUtilisationShow'},
                    js: {
                        margin: '8px',
                        border: '1px solid black'
                    },
                    content: [
                        {
                            block: 'b-flex-row',
                            js: {
                                fontWeight: 'bold',
                                background: '#ddd',
                                borderBottom: '1px solid black'
                            },
                            attrs: {id: 'headerReportUtilisationShow'},
                            content: [
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        flexGrow: '1',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    },
                                    content: 'Отдел'
                                },
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        width: '40px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderLeft: '1px solid black'
                                    },
                                    content: 'Сотр.'
                                },
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        width: '88px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderLeft: '1px solid black'
                                    },
                                    content: 'Общий'
                                },  
                                {
                                    block: 'b-flex-column',
                                    js: {
                                        width: '640px'
                                    },
                                    content: [
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderBottom: '1px solid black',
                                                borderLeft: '1px solid black'
                                            },
                                            content: 'Поручения'
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {},
                                            content: [
                                               {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Директора'
                                               },
                                               {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'ДТ'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Руководит.'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Операционн. деятельнос.'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Простой'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Отпуск'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Больничный'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Обучение'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'b-flex-column',
                                    js: {
                                        width: '320px'
                                    },
                                    content: [
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderBottom: '1px solid black',
                                                borderLeft: '1px solid black'
                                            },
                                            content: 'Проекты'
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                height: '34px'
                                            },
                                            content: [
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Предпроект'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Реализация'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Завершение'
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: 'Сопр-ние'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'b-flex-column',
                            attrs: {id: 'bodyReportUtilisationShow'},
                            js: {},
                            content:  (function() {
                                var selector = '#bodyReportUtilisationShow';
                                //_ReportDepUtilisationRun(selector, jdata);
                            })()
                        }
                    ]
                }
            ]
        }));
    });
}

//function CommonDepartmentsList(answer){
//    //console.log('jdata CommonDepartmentsList', answer);
//    var jdata = JSON.parse(answer['data']);
//    //console.log('jdata.Departments CommonDepartmentsList', jdata);
//    _CommonDepartmentsList(answer['selector'], jdata.Departments);
//}

//function _CommonDepartmentsList(selector, jdata){
//    $(selector).empty();
//    //console.log('jdataDepartments', jdataDepartments);
//    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply({

//                block: 'b-combobox-field',
//                attrs: {style: 'width: 76%;'},
//                mix: { 
//                    block: 'c-input-check', 
//                    js: true
//                },
//                content: [
//                    {
//                        block: 't-patterns__combobox',
//                        js: { 
//                            name: jdata.Name,
//                            value_id: jdata.FirstID,
//                            value_name: jdata.FirstValue,
//                            list: jdata.List,
//                            action: ''
//                        }
//                    }
//                ]
//        }));
//    });
//}

function ReportDepUtilisationRun(answer){
    var jdata = JSON.parse(answer['data']);
    _ReportDepUtilisationRun(answer['selector'], jdata.Utilisations);
}

function _ReportDepUtilisationRun(selector, jdata){

    $(selector).empty();

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply(
            {
                block: 'b-flex-column',
                js: {},
                content:(function() {
                        var partitions = [];

                        if (! $.isEmptyObject(jdata)) {
                            //console.log(jdata)
                            

                            jdata.map(function(item, i) {
                                if ((i == 0) && (item.Parent != 0)) {
                                    partitions.push(
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                borderBottom: '1px solid black'
                                            },
                                            content: [
                                            {
                                                block: 'b-flex-row',
                                                js: {},
                                                content: [
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            flexGrow: '1',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                            paddingLeft: '8px'
                                                        },
                                                        mix: [
                                                            {
                                                                block: 'b-button-call',
                                                                js: {
                                                                    action_name: "ReportDepUtilisationRun",
                                                                    selector: "#bodyReportUtilisationShow",
                                                                    department_id: item.Parent.toString(),
                                                                    date_start: $('input[name="start"]').val(),
                                                                    date_finish: $('input[name="end"]').val(), 
                                                                    builder: "ReportDepUtilisationRun"
                                                                }
                                                            },
                                                            {
                                                                block: 'b-link'
                                                            }
                                                        ],
                                                        content: '...'
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '40px',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black'
                                                        }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '88px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content', js: true }
                                                    },
                                                ]
                                            },
                                            {    
                                                block: 'b-flex-row',
                                                js: {width: '640px'},
                                                content: [
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    }
                                                ]
                                            },
                                            {    
                                                block: 'b-flex-row',
                                                js: {width: '320px'},
                                                content: [
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '80px',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            borderLeft: '1px solid black',
                                                            paddingRight: '8px'
                                                        },
                                                        mix: { block: 'c-flex-content__few', js: true }
                                                    }
                                                ]
                                            }
                                            ]
                                        }
                                    );
                                };
                                
                                partitions.push(
                                    {
                                        block: 'b-flex-row',
                                        js: {
                                            borderBottom: '1px solid black'
                                        },
                                        content: [
                                        {
                                            block: 'b-flex-row',
                                            js: { flexGrow: '1' },
                                            content: [
                                                (function(){
                                                    var res = [];
                                                    
                                                    if (item.Parent == -2) {
                                                        res.push(
                                                            {
                                                                block: 'b-flex-row',
                                                                js: {
                                                                    flexGrow: '1',
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center',
                                                                    paddingLeft: '8px'
                                                                },
                                                                content: item.Name
                                                            }
                                                        )
                                                    } else {
                                                        res.push(
                                                            {
                                                                block: 'b-flex-row',
                                                                js: {
                                                                    flexGrow: '1',
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center',
                                                                    paddingLeft: '8px'
                                                                },
                                                                mix: [
                                                                    {
                                                                        block: 'b-button-call',
                                                                        js: {
                                                                            action_name: "ReportDepUtilisationRun",
                                                                            selector: "#bodyReportUtilisationShow",
                                                                            department_id: item.DepID.toString(),
                                                                            date_start: $('input[name="start"]').val(),
                                                                            date_finish: $('input[name="end"]').val(), 
                                                                            builder: "ReportDepUtilisationRun"
                                                                        }
                                                                    },
                                                                    {
                                                                        block: 'b-link'
                                                                    }
                                                                ],
                                                                content: item.Name
                                                            }
                                                        )
                                                    }
                                                    
                                                    return res;
                                                })(),
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '40px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black'
                                                    },
                                                    content: item.Count
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '88px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content', js: true },
                                                    content: item.Util
                                                },
                                            ]
                                        },
                                        {    
                                            block: 'b-flex-row',
                                            js: {width: '640px'},
                                            content: [
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util1
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util2
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util3
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util9
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util5
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util6
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util7
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util8
                                                }
                                            ]
                                        },
                                        {    
                                            block: 'b-flex-row',
                                            js: {width: '320px'},
                                            content: [
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util41
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util43
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util44
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                        width: '80px',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        borderLeft: '1px solid black',
                                                        paddingRight: '8px'
                                                    },
                                                    mix: { block: 'c-flex-content__few', js: true },
                                                    content: item.Util45
                                                }
                                            ]
                                        }
                                        ]
                                    }
                                );
                            });
                        }
                    return partitions;
                })()
            }
        ));
    });
}