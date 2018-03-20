function CallReloadBodyTTS(date) {
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });

    });
    var msg = {
        action_name: "ReloadBodyTTS",
        date: date,
        user_id: $('input[name="user_id"]').val()
    };

    WSSend(msg);
}

function ReloadBodyTTS(answer) {
    var elem = $(answer["selector"])
    elem.empty();
    //console.log('ReloadBodyTTS', answer);
    var jdata = JSON.parse(answer["data"]);

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer["selector"]), BEMHTML.apply(
            function() {
                var task = [];
                if (! $.isEmptyObject(jdata)) {
                    jdata.map(function(item) {
                        if (item.Close == 0) {
                            var list = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'];


                            task.push({
                                tag: 'tr',
                                attrs: { 'data-id': item.TaskID},
                                content: [
                                    {
                                        block: 'pname',
                                        mix: { block: 'b-task-timesheet-pname', js: { text: item.PName } },
                                        tag: 'td'
                                    },
                                    {
                                        block: 'tname',
                                        mix: [
                                            {
                                                block: 'c-task-timesheet-tname-openModalWindow',
                                                js: {}
                                            },
                                            {
                                                block: 'b-task-timesheet-tname',
                                                js: { text: item.TName }
                                            }
                                        ],
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
                                                block: 'b-combobox',
                                                js: {
                                                    id: 'b_combobox_1_' + item.TaskID.toString()
                                                },
                                                content: [
                                                    {
                                                        elem: 'no-button',
                                                        cls: 'dropdown-toggle',
                                                        attrs: { 'data-toggle': 'dropdown' },
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                tag: 'input',
                                                                mix: { block: 'b-input-time', js: { number: 1 } },
                                                                cls: 'b-input',
                                                                attrs: { type: 'text', value: item.H1, 'data-id': item.TaskID, 'data-date': item.D1, 'data-old-val': item.H1, 'data-tplan': item.T, readonly: 'readonly' }

                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'list',
                                                        tag: 'ul',
                                                        js: true,
                                                        cls: 'dropdown-menu',
                                                        content: (function() {
                                                            var li = [];

                                                            if (! $.isEmptyObject(list)) {
                                                                list.map(function(item) {

                                                                    li.push({
                                                                        elem: 'item',
                                                                        mix: { block: 'c-combobox-no-button', js: { number: 1 } },
                                                                        tag: 'li',
                                                                        content: item
                                                                    });


                                                                });

                                                            }

                                                            return li;
                                                        })()
                                                    }

                                                ]

                                            }
                                        ]
                                    },
                                    {
                                        elem: 'hour',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'b-combobox',
                                                js: {
                                                    id: 'b_combobox_2_' + item.TaskID.toString()
                                                },
                                                content: [
                                                    {
                                                        elem: 'no-button',
                                                        cls: 'dropdown-toggle',
                                                        attrs: { 'data-toggle': 'dropdown' },
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                tag: 'input',
                                                                mix: { block: 'b-input-time', js: { number: 2 } },
                                                                cls: 'b-input',
                                                                attrs: { type: 'text', value: item.H2, 'data-id': item.TaskID, 'data-date': item.D2, 'data-old-val': item.H2, 'data-tplan': item.T, readonly: 'readonly' }

                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'list',
                                                        tag: 'ul',
                                                        js: true,
                                                        cls: 'dropdown-menu',
                                                        content: (function() {
                                                            var li = [];

                                                            if (! $.isEmptyObject(list)) {
                                                                list.map(function(item) {

                                                                    li.push({
                                                                        elem: 'item',
                                                                        mix: { block: 'c-combobox-no-button', js: { number: 2 } },
                                                                        tag: 'li',
                                                                        content: item
                                                                    });


                                                                });

                                                            }

                                                            return li;
                                                        })()
                                                    }

                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'hour',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'b-combobox',
                                                js: {
                                                    id: 'b_combobox_3_' + item.TaskID.toString()
                                                },
                                                content: [
                                                    {
                                                        elem: 'no-button',
                                                        cls: 'dropdown-toggle',
                                                        attrs: { 'data-toggle': 'dropdown' },
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                tag: 'input',
                                                                mix: { block: 'b-input-time', js: { number: 3 } },
                                                                cls: 'b-input',
                                                                attrs: { type: 'text', value: item.H3, 'data-id': item.TaskID, 'data-date': item.D3, 'data-old-val': item.H3, 'data-tplan': item.T, readonly: 'readonly' }

                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'list',
                                                        tag: 'ul',
                                                        js: true,
                                                        cls: 'dropdown-menu',
                                                        content: (function() {
                                                            var li = [];

                                                            if (! $.isEmptyObject(list)) {
                                                                list.map(function(item) {

                                                                    li.push({
                                                                        elem: 'item',
                                                                        mix: { block: 'c-combobox-no-button', js: { number: 3 } },
                                                                        tag: 'li',
                                                                        content: item
                                                                    });


                                                                });

                                                            }

                                                            return li;
                                                        })()
                                                    }

                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'hour',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'b-combobox',
                                                js: {
                                                    id: 'b_combobox_4_' + item.TaskID.toString()
                                                },
                                                content: [
                                                    {
                                                        elem: 'no-button',
                                                        cls: 'dropdown-toggle',
                                                        attrs: { 'data-toggle': 'dropdown' },
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                tag: 'input',
                                                                mix: { block: 'b-input-time', js: { number: 4 } },
                                                                cls: 'b-input',
                                                                attrs: { type: 'text', value: item.H4, 'data-id': item.TaskID, 'data-date': item.D4, 'data-old-val': item.H4, 'data-tplan': item.T, readonly: 'readonly' }

                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'list',
                                                        tag: 'ul',
                                                        js: true,
                                                        cls: 'dropdown-menu',
                                                        content: (function() {
                                                            var li = [];

                                                            if (! $.isEmptyObject(list)) {
                                                                list.map(function(item) {

                                                                    li.push({
                                                                        elem: 'item',
                                                                        mix: { block: 'c-combobox-no-button', js: { number: 4 } },
                                                                        tag: 'li',
                                                                        content: item
                                                                    });


                                                                });

                                                            }

                                                            return li;
                                                        })()
                                                    }

                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'hour',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'b-combobox',
                                                js: {
                                                    id: 'b_combobox_5_' + item.TaskID.toString()
                                                },
                                                content: [
                                                    {
                                                        elem: 'no-button',
                                                        cls: 'dropdown-toggle',
                                                        attrs: { 'data-toggle': 'dropdown' },
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                tag: 'input',
                                                                mix: { block: 'b-input-time', js: { number: 5 } },
                                                                cls: 'b-input',
                                                                attrs: { type: 'text', value: item.H5, 'data-id': item.TaskID, 'data-date': item.D5, 'data-old-val': item.H5, 'data-tplan': item.T, readonly: 'readonly' }

                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'list',
                                                        tag: 'ul',
                                                        js: true,
                                                        cls: 'dropdown-menu',
                                                        content: (function() {
                                                            var li = [];

                                                            if (! $.isEmptyObject(list)) {
                                                                list.map(function(item) {

                                                                    li.push({
                                                                        elem: 'item',
                                                                        mix: { block: 'c-combobox-no-button', js: { number: 5 } },
                                                                        tag: 'li',
                                                                        content: item
                                                                    });


                                                                });

                                                            }

                                                            return li;
                                                        })()
                                                    }

                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'hour',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'b-combobox',
                                                js: {
                                                    id: 'b_combobox_6_' + item.TaskID.toString()
                                                },
                                                content: [
                                                    {
                                                        elem: 'no-button',
                                                        cls: 'dropdown-toggle',
                                                        attrs: { 'data-toggle': 'dropdown' },
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                tag: 'input',
                                                                mix: { block: 'b-input-time', js: { number: 6 } },
                                                                cls: 'b-input',
                                                                attrs: { type: 'text', value: item.H6, 'data-id': item.TaskID, 'data-date': item.D6, 'data-old-val': item.H6, 'data-tplan': item.T, readonly: 'readonly' }

                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'list',
                                                        tag: 'ul',
                                                        js: true,
                                                        cls: 'dropdown-menu',
                                                        content: (function() {
                                                            var li = [];

                                                            if (! $.isEmptyObject(list)) {
                                                                list.map(function(item) {

                                                                    li.push({
                                                                        elem: 'item',
                                                                        mix: { block: 'c-combobox-no-button', js: { number: 6 } },
                                                                        tag: 'li',
                                                                        content: item
                                                                    });


                                                                });

                                                            }

                                                            return li;
                                                        })()
                                                    }

                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'hour',
                                        tag: 'td',
                                        content: [
                                            {
                                                block: 'b-combobox',
                                                js: {
                                                    id: 'b_combobox_7_' + item.TaskID.toString()
                                                },
                                                content: [
                                                    {
                                                        elem: 'no-button',
                                                        cls: 'dropdown-toggle',
                                                        attrs: { 'data-toggle': 'dropdown' },
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                tag: 'input',
                                                                mix: { block: 'b-input-time', js: { number: 7 } },
                                                                cls: 'b-input',
                                                                attrs: { type: 'text', value: item.H7, 'data-id': item.TaskID, 'data-date': item.D7, 'data-old-val': item.H7, 'data-tplan': item.T, readonly: 'readonly' }

                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'list',
                                                        tag: 'ul',
                                                        js: true,
                                                        cls: 'dropdown-menu',
                                                        content: (function() {
                                                            var li = [];


                                                            if (! $.isEmptyObject(list)) {
                                                                list.map(function(item) {

                                                                    li.push({
                                                                        elem: 'item',
                                                                        mix: { block: 'c-combobox-no-button', js: { number: 7 } },
                                                                        tag: 'li',
                                                                        content: item
                                                                    });


                                                                });

                                                            }

                                                            return li;
                                                        })()
                                                    }

                                                ]
                                            }
                                        ]
                                    }
                                ]
                            });
                        } else {
                            task.push({
                                tag: 'tr',
                                attrs: { 'data-id': item.TaskID, style: 'pointer-events: none; background-color: #ccc;'},
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
                                                attrs: { type: 'text', value: item.H1, 'data-id': item.TaskID, 'data-date': item.D1, 'data-old-val': item.H1, disabled: 'disabled', style: 'background-color: #ccc!important;' }
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
                                                attrs: { type: 'text', value: item.H2, 'data-id': item.TaskID, 'data-date': item.D2, 'data-old-val': item.H2, disabled: 'disabled', style: 'background-color: #ccc!important;' }
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
                                                attrs: { type: 'text', value: item.H3, 'data-id': item.TaskID, 'data-date': item.D3, 'data-old-val': item.H3, disabled: 'disabled', style: 'background-color: #ccc!important;' }
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
                                                attrs: { type: 'text', value: item.H4, 'data-id': item.TaskID, 'data-date': item.D4, 'data-old-val': item.H4, disabled: 'disabled', style: 'background-color: #ccc!important;' }
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
                                                attrs: { type: 'text', value: item.H5, 'data-id': item.TaskID, 'data-date': item.D5, 'data-old-val': item.H5, disabled: 'disabled', style: 'background-color: #ccc!important;' }
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
                                                attrs: { type: 'text', value: item.H6, 'data-id': item.TaskID, 'data-date': item.D6, 'data-old-val': item.H6, disabled: 'disabled', style: 'background-color: #ccc!important;' }
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
                                                attrs: { type: 'text', value: item.H7, 'data-id': item.TaskID, 'data-date': item.D7, 'data-old-val': item.H7, disabled: 'disabled', style: 'background-color: #ccc!important;' }
                                            }
                                        ]
                                    }
                                ]
                            });
                        }
                    });

                    task.push({
                        block: 'c-tts-get-summa',
                        tag: 'tr',
                        content: [
                            {
                                elem: 'descr',
                                tag: 'td',
                                attrs: { colspan: "4" },
                                content: 'Итого, затрачено времени за день:'
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
                }
            }()
        ));
    });
}

function ReloadBodyTTSModalWindow(value, id){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });

    });
    //var jdata = JSON.parse(json_data);
    $('#place_modal_form').empty();
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find('#place_modal_form'), BEMHTML.apply({
            block: 'c-project-new',
            js: {
                width: '500px'
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
                                                    content: 'Закрытие задачи'
                                                }
                                            ]
                                        },
                                        {
                                            cls: 'panel-body',
                                            content: [
                                                {block: 'b-flex-column',
                                                js: {

                                                },
                                                content: [
                                                        {

                                                            tag: 'span',
                                                            content: "Вы действительно хотите закрыть задачу?"
                                                        },
                                                         {
                                                            block: 'b-block',
                                                            js: {
                                                                color: 'red',
                                                                fontWeight: 'bold'
                                                            },

                                                            tag: 'span',
                                                            content: value
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
                                                    /*block: 'b-button-submit',
                                                    js: {
                                                        action_name: "CreateProject",
                                                        source: '#place_modal_form',
                                                        //f_responsible_id: g_heap["f_responsible_id"].toString(),
                                                        f_sub_name:  g_heap['f_sub_name'],
                                                        f_template_id: g_heap['f_template_id'],
                                                        f_responsible_id: g_heap['f_responsible_id'],
                                                        f_code: g_heap['f_code'],
                                                        user_id: $('input[name="user_id"]').val()
                                                    },*/
                                                    block: 'b-block',
                                                    mix: {block: 'c-button-delete-task',js: {id: id}},
                                                    js: {
                                                        marginRight: '8px',
                                                    },
                                                    tag: 'button',
                                                    //mods: { padding: 'right'},
                                                    cls: 'btn btn-primary',
                                                    attrs: {type: 'button'},
                                                    content: [
                                                        {
                                                            elem: 'text',
                                                            tag: 'span',
                                                            content: 'Удалить'
                                                        }
                                                    ]
                                                },
                                                {   block: 'b-block',
                                                    js: {
                                                        marginRight: '8px'
                                                    },
                                                    tag: 'button',
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

        $('#place_modal_form').modal('show');
    });
}
