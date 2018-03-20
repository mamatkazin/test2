'use strict';
function ShowCharts(answer) {
    var selector = '#place_content';
    $(selector).empty();
    // var answer = { data:'[{"name":"Корректировка","fact":"299","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"199","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"499","plan":"600", "sum":"299"},{"name":"Корректировка","fact":"299","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"199","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"499","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"299","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"199","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"499","plan":"600", "sum":"299"},{"name":"Корректировка","fact":"299","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"199","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"499","plan":"600", "sum":"299"}]' };

    var jdata = JSON.parse(answer['data']);
    console.log('ShowLabourIntensity jdata', jdata);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
    bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
        {
            block: 'b-flex-column',
            js: {
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%)'
            },
            attrs: { id: 'id_showCharts' },
            content: [
                {
                    block: 'b-flex-row',
                    js: {
                        height: '64px',
                    },
                    content: []
                },
                //Нижний header с combobox
                {
                    block: 'b-flex-row',
                    js: {
                        height: '64px',
                        width: '1057px',
                        opacity: '0.2',
                        backgroundColor: '#EBEBEB'
                    },
                    content: [
                        {
                            block: 'b-flex-row',
                            js: {
                                alignItems: 'center',
                                marginLeft: '16px',
                                alignItems: 'center',
                                width: '240px',
                            },
                            content: [
                                {
                                    block: 'b-combobox-field',
                                    content: [
                                        {
                                            block: 't-patterns__combobox',
                                            js: {
                                                name: jdata.hd.Name,
                                                value_id: jdata.hd.FirstID,
                                                value_name: jdata.hd.FirstValue,
                                                list: jdata.hd.List,
                                                action: 'c-hd-select'
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                //главный блок
                {
                    block: 'b-flex-row',
                    js: {
                        padding: '18px'
                    },
                    content: [
                        //левая колонка
                        {
                            block: 'b-flex-column',
                            js: {
                                width: '502px',
                                border: '1px solid #EBEBEB',
                                borderRadius: '3px',
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0 4px 10px 0 rgba(95,95,95,0.1)',
                                marginRight: '16px',
                                padding: '16px 0 16px 16px',
                                overflowY: 'scroll'
                            },
                            content: [
                                {
                                    block: 'b-flex-row',
                                    js: {
                                    },
                                    content: [
                                        (function(){
                                            var res = [];

                                            if (! $.isEmptyObject(jdata.project_gip_fact)) {
                                                res.push(
                                                {
                                                    block: 'b-block',
                                                    js: {
                                                        height: '23px',
                                                        width: '191px',
                                                        color: '#333333',
                                                        fontFamily: "Roboto",
                                                        fontSize: '18px',
                                                        fontWeight: '500',
                                                        lineHeight: '23px'
                                                    },
                                                    content: 'Проектов: ' + jdata.project_gip_fact.length,
                                                },
                                                {
                                                    block:'b-flex-row',
                                                    js: {
                                                        width: '100%',
                                                        justifyContent: 'space-around',
                                                        padding: '3px 21px 0 21px'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'b-block',
                                                            js: {
                                                                height: '8px',
                                                                width: '8px',
                                                                borderRadius: '8px',
                                                                marginTop: '6px',
                                                                marginRight: '4px',
                                                                backgroundColor: '#7FD5B1'
                                                            },
                                                            content: ''
                                                        },
                                                        {
                                                            block: 'b-block',
                                                            js: {
                                                                height: '18px',
                                                                width: '67px',
                                                                opacity: '0.5',
                                                                color: '#232425',
                                                                fontFamily: 'Roboto',
                                                                fontSize: '14px',
                                                                lineHeight: '18px'
                                                            },
                                                            content: 'Затрачено'
                                                        },
                                                        {
                                                            block: 'b-block',
                                                            js: {
                                                                height: '8px',
                                                                width: '8px',
                                                                borderRadius: '8px',
                                                                marginTop: '6px',
                                                                marginRight: '4px',
                                                                backgroundColor: '#EBEBEB'
                                                            },
                                                            content: ''
                                                        },
                                                        {
                                                            block: 'b-block',
                                                            js: {
                                                                height: '18px',
                                                                width: '67px',
                                                                opacity: '0.5',
                                                                color: '#232425',
                                                                fontFamily: 'Roboto',
                                                                fontSize: '14px',
                                                                lineHeight: '18px'
                                                            },
                                                            content: 'Остаток'
                                                        },
                                                        {
                                                            block: 'b-block',
                                                            js: {
                                                                height: '8px',
                                                                width: '8px',
                                                                borderRadius: '8px',
                                                                marginTop: '6px',
                                                                marginRight: '4px',
                                                                backgroundColor: '#E07D96;'
                                                            },
                                                            content: ''
                                                        },
                                                        {
                                                            block: 'b-block',
                                                            js: {
                                                                height: '18px',
                                                                width: '67px',
                                                                opacity: '0.5',
                                                                color: '#232425',
                                                                fontFamily: 'Roboto',
                                                                fontSize: '14px',
                                                                lineHeight: '18px'
                                                            },
                                                            content: 'Переписано'
                                                        }
                                                    ]
                                                }
                                                );
                                            }
                                            else {
                                                res.push({
                                                    block: 'b-block',
                                                    js: {
                                                        color: '#333333',
                                                        fontFamily: "Roboto",
                                                        fontSize: '18px',
                                                        fontWeight: '500',
                                                    },
                                                    content: 'Проектов: 0'
                                                });
                                            }

                                            return res;
                                        })(),
                                        {

                                        }
                                    ]
                                },
                                {
                                    block: 'b-flex-column',
                                    js: {
                                        height: '616px',
                                        overflowY: 'scroll',
                                        paddingRight: '16px'
                                    },
                                    content: (function(){
                                        var res = [];

                                        if (! $.isEmptyObject(jdata.project_gip_fact)) {

                                            var svgId = 0;
                                            jdata.project_gip_fact.map(function(item) {

                                                res.push([
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {margin: '34px 0px 24px 0'},
                                                        mix: {
                                                            block: 'c-db-project-click',
                                                            js: {
                                                                project_id: item.id
                                                            },
                                                        },
                                                        content: (function(){
                                                            var res = [];

                                                            if (item.cor_action == 1) {
                                                                res.push({
                                                                    tag: 'i',
                                                                    cls: 'fa fa-exclamation-circle',
                                                                    attrs: { 'aria-hidden': 'true' }
                                                                })
                                                            };

                                                            res.push({
                                                                block: 'b-block',
                                                                js: {
                                                                    height: '16px',
                                                                    height: '22px',
                                                                    width: '426px',
                                                                    color: '#333333',
                                                                    fontFamily: 'Roboto',
                                                                    fontSize: '14px',
                                                                    lineHeight: '22px'

                                                                },
                                                                tag: 'p',
                                                                attrs: { title: item.name },
                                                                content: item.name
                                                            })

                                                            return res;
                                                        })()
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            justifyContent: 'space-between',
                                                            margin: '0 0 8px 0',
                                                            //minHeight: '16px',
                                                        },
                                                        content: [
                                                            {
                                                                block: 'b-flex-column',
                                                                js: {
                                                                    height: '14px',
                                                                    width: '61px',
                                                                    color: '#9E9E9E',
                                                                    fontFamily: 'Roboto',
                                                                    fontSize: '12px',
                                                                    fontSeight: '500',
                                                                    lineHeight: '14px',
                                                                    textAlign: 'right'
                                                                },
                                                                content: item.date_start
                                                            },
                                                            {
                                                                block: 'b-flex-column',
                                                                js: {
                                                                    height: '14px',
                                                                    width: '61px',
                                                                    color: '#9E9E9E',
                                                                    fontFamily: 'Roboto',
                                                                    fontSize: '12px',
                                                                    fontSeight: '500',
                                                                    lineHeight: '14px',
                                                                    textAlign: 'right'
                                                                },
                                                                content: item.date_finish
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'b-flex-row',
                                                        js: {
                                                            margin: '8px 0 24px 0'

                                                        },
                                                        content: [
                                                            {
                                                                block: 'b-flex-column',
                                                                js: {
                                                                    height: '30px',
                                                                    width: '100%',
                                                                    backgroundColor: '#cccccc'
                                                                },
                                                                content: {
                                                                    tag: 'svgbar_forbem',
                                                                    attrs: { fact: item.fact, plan: item.plan, delta: item.delta, svgid: 'gipfactsvg'+svgId }
                                                                }
                                                            }/*,
                                                            {
                                                                block: 'b-flex-column',
                                                                js: {
                                                                    height: '30px',
                                                                    width: '100%',
                                                                },
                                                                content: item.fact+' '+item.plan+' '+item.delta

                                                            }*/
                                                        ]
                                                    },
                                                ])
                                                svgId++;
                                            });
                                        }

                                        return res;

                                    })()
                                },
                            ]
                        },
                        //правая колонка

                        {
                            block: 'b-flex-column',
                            js: {
                                //border: 'solid 1px red'
                            },
                            content: [
                                {

/*------ 1 block ----------------------------------------------------*/

                                    block: 'b-block',
                                    js: {
                                        width: '502px',
                                        minHeight: '300px',
                                        border: '1px solid #EBEBEB',
                                        borderRadius: '3px',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0 4px 10px 0 rgba(95,95,95,0.1)',
                                        margin: '0 0 24px',
                                        padding: '16px',
                                        boxSizing: 'border-box'
                                    },
                                    content: [
                                        //здесь вертикальные графики
                                        (function(){
                                            var res = [];
                                        if (! $.isEmptyObject(jdata.project_plan_close)) {

                                                res.push([
                                            {
                                                block: 'b-flex-row',
                                                js: {
                                                    marginBottom: '24px',
                                                },
                                                content: [
                                                    {
                                                        block: 'b-inline-block',
                                                        js: {
                                                            //height: '23px',
                                                            width: '50%',
                                                            color: '#333333',
                                                            fontFamily: "Roboto",
                                                            fontSize: '16px',
                                                            fontWeight: '500',
                                                            //lineHeight: '23px'
                                                            verticalAlign: 'middle',
                                                        },
                                                        content: 'Предпроектов: '
                                                    },
                                                    {
                                                        block:'b-inline-block',
                                                        js: {
                                                            width: '50%',
                                                            verticalAlign: 'middle',
                                                            textAlign: 'right',
                                                            //justifyContent: 'space-around',
                                                            //padding: '5px 21px 0px 21px',
                                                        },
                                                        content: [
                                                            {
                                                                block: 'b-inline-block',
                                                                js: {
                                                                    verticalAlign: 'middle',
                                                                    height: '8px',
                                                                    width: '8px',
                                                                    borderRadius: '8px',
                                                                    margin: '0 8px 0 16px',
                                                                    backgroundColor: '#7FD5B1'
                                                                },
                                                                content: ''
                                                            },
                                                            {
                                                                block: 'b-inline-block',
                                                                js: {
                                                                    verticalAlign: 'middle',
                                                                    //height: '18px',
                                                                    //width: '67px',
                                                                    //opacity: '0.5',
                                                                    color: '#232425',
                                                                    fontFamily: 'Roboto',
                                                                    fontSize: '14px',
                                                                    //lineHeight: '18px'
                                                                },
                                                                content: 'Закрытые'
                                                            },
                                                            {
                                                                block: 'b-inline-block',
                                                                js: {
                                                                    verticalAlign: 'middle',
                                                                    height: '8px',
                                                                    width: '8px',
                                                                    borderRadius: '8px',
                                                                    margin: '0 8px 0 16px',
                                                                    backgroundColor: '#FFC100;'
                                                                },
                                                                content: ''
                                                            },
                                                            {
                                                                block: 'b-inline-block',
                                                                js: {
                                                                    verticalAlign: 'middle',
                                                                    //height: '18px',
                                                                    //width: '67px',
                                                                    //opacity: '0.5',
                                                                    color: '#232425',
                                                                    fontFamily: 'Roboto',
                                                                    fontSize: '14px',
                                                                    //lineHeight: '18px'
                                                                },
                                                                content: 'Открытые'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }])
                                        return res;
                                        }})(),
                                        {
                                            block: 'b-flex-row',
                                            js: {
                                                //height: '242px',
                                                justifyContent: 'space-between'
                                            },
                                            content: (function(){
                                                var res = [];
                                                if (! $.isEmptyObject(jdata.project_plan_close.items)) {

                                                    var svgId = 0;
                                                    jdata.project_plan_close.items.map(function(item) {
                                                        res.push([
                                                            {
                                                                block: 'b-flex-column',
                                                                js: {
                                                                    height: '200px',
                                                                    width: '15%'
                                                                    //padding: '0 24px'
                                                                },
                                                                content: [
                                                                    {
                                                                        tag: 'svgbar_v_forbem',
                                                                        attrs: { quot: '0', fact: item.fact, plan: item.plan + item.fact, max: jdata.project_plan_close.max, svgid: 'planclosesvg'+svgId }
        /*                                                                tag: 'bar',
                                                                        attrs: { fact: item.fact, plan: item.plan + item.fact, delta: 0, type: 'v' }*/
                                                                    },
                                                                    {
                                                                        block: 'b-block',
                                                                        js: {
                                                                            height: '18px',
                                                                            width: '70px',
                                                                            color: '#333333',
                                                                            fontFamily: 'Roboto',
                                                                            fontSize: '14px',
                                                                            lineHeight: '18px',
                                                                            textAlign: 'center'
                                                                        },
                                                                        content: item.name
                                                                    },
/*                                                                    {
                                                                        block: 'b-block',
                                                                        content: item.fact+' '+item.plan+item.fact+' '+item.delta
                                                                  }*/
                                                                ]
                                                            }
                                                        ])
                                                        svgId++;
                                                    });


                                                }
                                                return res;
                                            })()
                                        },
                                    ],

/*------ /1 block ----------------------------------------------------*/
                                },
                                {
/*------- 2 block ---------------------------------------------------*/
                                    block: 'b-block',
                                    js: {
                                        width: '502px',
                                        minHeight: '300px',
                                        border: '1px solid #EBEBEB',
                                        borderRadius: '3px',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0 4px 10px 0 rgba(95,95,95,0.1)',
                                        padding: '16px 0 16px 16px',
                                        boxSizing: 'border-box'
                                    },
                                    content: [

                                        //здесь горизонтальные графики
                                        {
                                            block: 'b-flex-column',
                                            js: {
                                            },
                                            content: [
                                                {
                                                    block: 'b-flex-row',
                                                    js: {
                                                    },
                                                    content: [
                                                        (function(){

                                                            var res = [];
                                                            //console.log('справа внизу', jdata);
                                                            if (! $.isEmptyObject(jdata.loading_employees.items)) {
                                                                res.push({
                                                                    block: 'b-block',
                                                                    js: {
                                                                        height: '23px',
                                                                        width: '363px',
                                                                        color: '#333333',
                                                                        fontFamily: 'Roboto',
                                                                        fontSize: '18px',
                                                                        fontWeight: '500',
                                                                        lineHeight: '23px',
                                                                        //margin: '16px 0px 0px 16px'
                                                                    },
                                                                    content: 'Загрузка сотрудников, кол: ' + jdata.loading_employees.items.length
                                                                });
                                                            }
                                                            else {
                                                                res.push({
                                                                    block: 'b-block',
                                                                    js: {
                                                                        height: '23px',
                                                                        width: '363px',
                                                                        color: '#333333',
                                                                        fontFamily: 'Roboto',
                                                                        fontSize: '18px',
                                                                        fontWeight: '500',
                                                                        lineHeight: '23px',
                                                                        //margin: '16px 0px 0px 16px'
                                                                    },
                                                                    content: 'Загрузка сотрудников, кол: 0'
                                                                });
                                                            }

                                                            return res;
                                                        })()
                                                    ]
                                                },
                                                {
                                                    block: 'b-flex-column',
                                                    js: {
                                                        height: '300px',
                                                        overflowY: 'scroll',
                                                        padding: '16px 16px 0 0',
                                                        boxSizing: 'border-box',
                                                    },
                                                    content: (function(){
                                                        var res = [];
                                                        if (! $.isEmptyObject(jdata.loading_employees.items)) {

                                                            var svgId = 0;
                                                            jdata.loading_employees.items.map(function(item) {
                                                                res.push([
                                                                    {
                                                                        block: 'b-flex-row',
                                                                        js: {
                                                                            margin: '0',
                                                                            minHeight: '30px',
                                                                        },
                                                                        content: [
                                                                            {
                                                                                block: 'b-block',
                                                                                js: {
                                                                                    //height: '30px',
                                                                                    width: '100%',
                                                                                    color: '#333333',
                                                                                    fontFamily: 'Roboto',
                                                                                    fontSize: '14px',
                                                                                    //lineHeight: '16px',
                                                                                    margin: '0',

                                                                                },
                                                                                content: [
                                                                                    {
                                                                                        block: 'b-inline-block',
                                                                                        js: {
                                                                                            //display: 'inline-block',
                                                                                            height: '30px',
                                                                                            width: '32%',
                                                                                            lineHeight: '30px',
                                                                                            //fontSize: '12px',
                                                                                            borderRight: 'solid 1px #ccc',
                                                                                            //backgroundColor: '#cccccc'
                                                                                        },
                                                                                        content: item.name
                                                                                    },
                                                                                    {
                                                                                        block: 'b-inline-block',
                                                                                        js: {
                                                                                            //display: 'inline-block',
                                                                                            height: '8px',
                                                                                            width: '68%',
                                                                                            //backgroundColor: '#cccccc'
                                                                                        },
                                                                                        content: {
                                                                                            tag: 'time_chart_forbem',
                                                                                            attrs: { svgid: 'employeessvg'+svgId, time: item.fact, max_time: jdata.loading_employees.max }
                                                                                            //attrs: { fact: 0, plan: item.fact, delta: item.delta, type: 'g' }
                                                                                        }
                                                                                    }
                                                                                ]

                                                                            },
                                                                        ]
                                                                    },
                                                                ])
                                                                svgId++;
                                                            });

                                                        }
                                                        return res;
                                                    })()
                                                }
                                            ]
                                        }
                                    ]


/*------- /2 block---------------------------------------------------*/
                                }
                            ]

                        }
                    ]
                }
            ]
        },

        {
            tag: 'script',
            attrs: { src: "app/build.js" }
        },

    ]))});
}
