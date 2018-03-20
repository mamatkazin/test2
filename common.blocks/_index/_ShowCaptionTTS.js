function ShowCaptionTTS(answer){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });

    });
    var elem = $(answer["selector"])
    elem.empty();

    var jdata = JSON.parse(answer["data"]);
    //console.log("ShowCaptionTTS", jdata);

    sessionStorage.D1 = jdata.D1;

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer["selector"]), BEMHTML.apply({
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
                                        action_name: "ShowCaptionTTS",
                                        date: jdata.D1,
                                        difference: '-',
                                        selector: "#place_content",
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
                                    action_name: "ShowCaptionTTS",
                                    date: jdata.D1,
                                    difference: '+',
                                    selector: "#place_content",
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
                        },
                        {
                            block: 'b-block',
                            js: {
                                margin: '16px 0',
                                fontSize: '16px'
                            },
                            content: jdata.Descr
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
                                            content: jdata.PName
                                        },
                                        {
                                            elem: 'tname',
                                            tag: 'th',
                                            attrs: { rowspan: "2" },
                                            content: jdata.TName
                                        },
                                        {
                                            elem: 't',
                                            tag: 'th',
                                            attrs: { rowspan: "2" },
                                            content: jdata.T
                                        },
                                        {
                                            elem: 'd',
                                            tag: 'th',
                                            attrs: { rowspan: "2" },
                                            content: jdata.D
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
                                            content: jdata.D1
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.D2
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.D3
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.D4
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.D5
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.D6
                                        },
                                        {
                                            elem: 'hour',
                                            tag: 'th',
                                            content: jdata.D7
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'tbody',
                            tag: 'tbody'
                        }
                    ]
                },
                {
                    block: 'b-button-submit',
                    mix: {
                        block: 'l-tts-bt-save-tasks',
                        js: {
                            action_name: "SaveItemTTS",
                            date: jdata.D1,
                            close: jdata.Close,
                            selector: "#place_content",
                        }
                    },
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
                            content: 'Сохранить'
                        }
                    ]
                },
                (function(){
                    if (jdata.State == 2) {
                        var res = [];

                        res.push({
                            block: 'b-button-submit',
                            mix: {
                                block: 'l-tts-bt-save-tasks',
                                js: {
                                    action_name: "tts_accept_send",
                                    date: jdata.D1,
                                    close: jdata.Close,
                                    selector: "#place_content",
                                }
                            },
                            tag: 'button',
                            cls: 'btn btn-success',
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
                                    content: 'Отправить на акцептование'
                                }
                            ]
                        });

                        return res
                    }
                })()
//                {
//                    block: 'b-button-submit',
//                    mix: { block: 'b-new-task', js: true },
//                    tag: 'button',
//                    cls: 'btn btn-primary',
//                    attrs: { type: 'button' },
//                    content: [
//                        {
//                            elem: 'l-glyphicon',
//                            tag: 'span',
//                            cls: 'glyphicon glyphicon-plus'
//                        },
//                        {
//                            elem: 'text',
//                            tag: 'span',
//                            content: 'Создать запись'
//                        }
//                    ]
//                },
//                {
//                    block: 'b-button-submit',
//                    mix: {
//                        block: 'c-tts-save-send',
//                        js: {
//                            action_name: "SaveSendWeekTTS",
//                            date: jdata.D1,
//                            close: jdata.Close,
//                            selector: "#place_content",
//                        }
//                    },
//                    tag: 'button',
//                    cls: 'btn btn-primary pull-right',
//                    attrs: { type: 'button' },
//                    content: [
//                        {
//                            elem: 'l-glyphicon',
//                            tag: 'span',
//                            cls: 'glyphicon glyphicon-plus'
//                        },
//                        {
//                            elem: 'text',
//                            tag: 'span',
//                            content: 'Сохранить и отправить'
//                        }
//                    ]
//                }
            ]
        }));

        var scrollHeight = Math.max(
            document.documentElement.offsetHeight, document.documentElement.clientHeight
        );

        var cellHeight = (scrollHeight - 80).toString() + 'px';

        $('#place_content').css({'height' : cellHeight, 'overflow-y' : 'auto'});


        CallReloadBodyTTS(jdata.D1)

    });
}
