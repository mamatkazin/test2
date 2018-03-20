'use strict';
function WorksheetShow(answer) {
    /*var answer = { 
        selector: '#place_content' 
    };
    $(answer['selector']).empty();
    var jdata = '[{"ID":412,"Name":"Виноградов М. М.","TargetDate":"11","Number":"1"},{"ID":413,"Name":"Cидов М. М.","TargetDate":"12","Number":"2"},{"ID":414,"Name":"Вадов М. М.","TargetDate":"13","Number":"3"}]';
    jdata = JSON.parse(jdata);*/
    $(answer['selector']).empty();
    var jdata = JSON.parse(answer['data']);
    //console.log(JSModel.date);
    console.log(jdata);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'b-flex-column',
            js: {
                marginBottom: '60px'
            },
            content:[
                {
                    block: 'b-flex-column',
                    attr:{},
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
                            content: 'Таблица учета рабочего времени'
                        },
                        {
                            block: 'b-flex-row',
                            js: {
                                width: '30%'
                            },
                            content: [
                                {
                                    block: 'b-combobox-field',
                                    attrs: {style: 'width: 76%;'},
                                    content: [
                                        {
                                            block: 't-patterns__combobox',
                                            js: { 
                                                name: jdata.Departments.Name,
                                                value_id: jdata.Departments.FirstID,
                                                value_name: jdata.Departments.FirstValue,
                                                list: jdata.Departments.List,
                                                action: 'c-getlist-control-hours'
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
                        justifyContent: 'space-around'
                    },
                    content: [
                        {
                            block: 'b-button',
                            js:{ 
                                outline: 'none'
                            },
                            mix: {
                                block: 'c-getlist-control-date',
                                js: {}
                            },
                            tag: 'button',
                            cls: 'btn btn-default',
                            attrs: { type: 'button', id: 'buttonPreviousMonth' },
                            content: [
                                {
                                    elem: 'l-glyphicon',
                                    tag: 'span',
                                    cls: 'glyphicon glyphicon-arrow-left'
                                },
                                {
                                    block: 'c-set-month',
                                    js: {
                                        marginLeft: '8px'
                                    },
                                    tag: 'span',
                                    attrs: { id: 'spanPreviousMonth' },
                                    content: []
                                }
                            ] 
                        },
                        {
                            block: 'b-block',
                            //block: 'b-button',
                            js:{ 
                                fontSize: '14px',
                                outline: 'none',
                                cursor: 'default'
                            },
                            mix: [
                                /*{
                                    block: 'c-getlist-control-date',
                                    js: {}
                                },*/
                                {
                                    block: 'c-set-month',
                                    js: {}
                                }
                            ],
                            //tag: 'button',
                            //cls: 'btn btn-default',
                            //attrs: { type: 'button', id : 'buttonNowMonth'},
                            attrs: { id : 'buttonNowMonth'},
                            content: []
                        },
                        {
                            block: 'b-button',
                            js:{ 
                                outline: 'none'
                            },
                            mix: {
                                block: 'c-getlist-control-date',
                                js: {}
                            },
                            tag: 'button',
                            cls: 'btn btn-default',
                            attrs: { type: 'button',  id: 'buttonNextMonth'  },
                            content: [
                                {
                                    block: 'c-set-month',
                                    js: {
                                        marginRight: '8px'
                                    },
                                    tag: 'span',
                                    attrs: { id: 'spanNextMonth' },
                                    content: []
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
                    block: 'b-flex-column',
                    js: {
                        borderRight: '1px solid black',
                        borderLeft: '1px solid black',
                        margin: '16px 8px'
                    },
                    attrs: { id: 'rowParentWorkingSheetShow'},
                    content:[
                        //Header
                        {
                            block: 'b-flex-row',                     
                            js: {
                                height: '40px',
                                background: '#ddd',
                                borderTop: '1px solid black',
                                borderBottom: '1px solid black'
                            },
                            content: [
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        width: '15%',
                                        paddingLeft: '16px',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        borderRight: '1px solid black'
                                    },
                                    content: 'ФИО'
                                },
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        width: '10%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRight: '1px solid black'
                                    },
                                    content: 'ТН'
                                },
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        width: '69%',
                                        justifyContent: 'space-around',
                                        alignItems: 'center'
                                    },
                                    //Вывод чисел месяца
                                    content: (function() {
                                        var result = [];
                                        console.log(jdata);
                                        /*if (! $.isEmptyObject(jdata)) {
                                            jdata.map(function(item) {
                                                result.push(
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            width: '30px',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderRight: '1px solid ligthgray'
                                                        },
                                                        content: item.TargetDate
                                                    }
                                                );
                                            })
                                        };*/
                                        return result;
                                    })()
                                },
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        width: '3%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderLeft: '1px solid black'
                                    },
                                    content: 'Часы'
                                },
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        width: '3%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderLeft: '1px solid black'
                                    },
                                    content: 'Дни'
                                }
                            ]                               
                        },
                        //Body
                        {
                            block: 'b-block',
                            js: {},
                            content:[
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        height: '40px',
                                        borderBottom: '1px solid black'
                                    },
                                    content: [
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '15%',
                                                paddingLeft: '16px',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                borderRight: '1px solid black'
                                            },
                                            content: '' 
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '10%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRight: '1px solid black'
                                            },
                                            content: ''
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '69%',
                                                justifyContent: 'space-around',
                                                alignItems: 'center'
                                            },
                                            content: ''
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '3%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderLeft: '1px solid black'
                                            },
                                            content: '' 
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '3%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderLeft: '1px solid black'
                                            },
                                            content: '' 
                                        }
                                    ]                               
                                }
                            ]
                        }
                    ]
                },//Footer
                {
                    block: 'b-flex-row',
                    js: {
                        justifyContent: 'flex-end'
                    },
                    content: [
                        {
                            block: 'b-button',
                            tag: 'button',
                            mix: {
                                block: 'c-setList-control-hours-change',
                                js: {}
                            },
                            js: {
                                width: '200px',
                                height: '26px',
                                marginRight: '8px',
                                backgroundColor: '#337ab7'
                            },
                            cls: 'btn btn-default',
                            attrs: { type: 'button' },
                            content: [
                                {
                                    elem: 'text',
                                    tag: 'span',
                                    attrs: { style: 'position: relative; top: -5px; color: white;'}, 
                                    content: 'Сохранить изменения'
                                }
                            ]
                        }
                    ]
                }
            ]
        }));
    });
}


function WorksheetList(answer) {
    $(answer['selector']).empty();
    var jdata = JSON.parse(answer['data']), 
        selector = answer['selector'];
    _WorkingSheetList(jdata, selector);
}
function _WorkingSheetList(jdata, selector) {
    //console.log('WorksheetList here jdata', jdata);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(selector), BEMHTML.apply(
            {
                block: 'b-block',
                js: {
                    borderRight: '1px solid black',
                    borderLeft: '1px solid black',
                    margin: '16px 8px'
                },
                attrs: { id: 'rowParentWorkingSheetShow'},
                content:[ 
                {
                    block: 'b-flex-row',                     
                    js: {
                        height: '40px',
                        background: '#ddd',
                        borderTop: '1px solid black',
                        borderBottom: '1px solid black'
                    },
                    content: [
                        {
                            block: 'b-flex-row',
                            js: {
                                width: '15%',
                                paddingLeft: '16px',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                borderRight: '1px solid black'
                            },
                            content: 'ФИО'
                        },
                        {
                            block: 'b-flex-row',
                            js: {
                                width: '10%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRight: '1px solid black'
                            },
                            content: 'ТН'
                        },
                        {
                            block: 'b-flex-row',
                            js: {
                                width: '69%',
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            },
                            //Вывод чисел месяца
                            content: (function() {
                                var result = [];
                                if (! $.isEmptyObject(jdata)) {
                                    jdata.Days.map(function(item) {
                                        result.push(
                                            {
                                                block: 'b-flex-row',
                                                js: {
                                                    width: '30px',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRight: '1px solid ligthgray'
                                                },
                                                content: setDay(item.Day)
                                            }
                                        );
                                    })
                                };
                                return result;
                            })()
                        },
                        {
                            block: 'b-flex-row',
                            js: {
                                width: '3%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderLeft: '1px solid black'
                            },
                            content: 'Часы'
                        },
                        {
                            block: 'b-flex-row',
                            js: {
                                width: '3%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderLeft: '1px solid black'
                            },
                            content: 'Дни'
                        }
                    ]                               
                },
                (function() {
                    var result = [];
                    if (! $.isEmptyObject(jdata)) {
                        jdata.Wsl.map(function(item) {
                            result.push(
                                {
                                    block: 'b-flex-row',
                                    js: {
                                        height: '40px',
                                        borderBottom: '1px solid black'
                                    },
                                    content: [
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '15%',
                                                paddingLeft: '16px',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                borderRight: '1px solid black'
                                            },
                                            content: item.FIO  
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '10%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRight: '1px solid black'
                                            },
                                            content: item.TN 
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '69%',
                                                justifyContent: 'space-around',
                                                alignItems: 'center'
                                            },
                                            attrs: { id : item.ID },
                                            content: 
                                            (function() {
                                                var res = [],
                                                    countId = item.ID;
                                                if (! $.isEmptyObject(item.Days)) {
                                                    item.Days.map(function(item) {
                                                        res.push(
                                                            {
                                                                block: 'b-block',
                                                                tag: 'input',
                                                                mix: [{
                                                                    block: 'c-block__input-sum',
                                                                    js: {}
                                                                    },
                                                                    {
                                                                        block: 'c-set-array-change-data',
                                                                        js: {}
                                                                    }
                                                                ],
                                                                js: {
                                                                    width: '30px',
                                                                    textAlign: 'center',
                                                                    borderRadius: '3px',
                                                                    border: '1px solid #ccc',
                                                                    outline: '0px'
                                                                },
                                                                attrs: { value: item.Value, 'data-date' : item.Day, 'data-id' : countId }
                                                            }
                                                        );
                                                    })
                                                };
                                                return res;
                                            })()
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '3%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderLeft: '1px solid black'
                                            },
                                            content: '' 
                                        },
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                width: '3%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderLeft: '1px solid black'
                                            },
                                            content: '' 
                                        }
                                    ]                               
                                }
                            );
                        })
                    };
                    return result;
                })()
                ]
            }
        ));
    });
    function setDay(str) {
        var str = str.split('.');
        return str[0] +'.' + str[1];
    }
}