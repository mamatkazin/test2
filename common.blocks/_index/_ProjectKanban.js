 function ProjectKanban(answer){
    $(answer['selector']).empty();

    var jdata = JSON.parse(answer['data']);
    //console.log(answer);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
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
                                    //attrs: { disabled: 'disabled'},
                                    content: [
                                        {
                                            tag: 'legend',
                                            content: 'Фильтр'
                                        },
                                        {
                                            block: 'b-flex-column',
                                            js: {},
                                            attrs: {id: 'filterProjectKanban'},
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
                                                            attrs: { type: 'text', value: jdata.SubName, name: 'f_sub_name', placeholder: 'Подстрока наименования проекта ...' },
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {},
                                                    content: [
                                                        {
                                                            block: 't-patterns__combobox',
//                                                            mix: {
//                                                                block: 'c-project-kanban__responsible'

//                                                            },
                                                            js: {
                                                                width: '100%',
                                                                name: jdata.Templates.Name,
                                                                value_id: jdata.Templates.FirstID,
                                                                value_name: jdata.Templates.FirstValue,
                                                                list: jdata.Templates.List,
                                                                action: ''
                                                            },
                                                            //cls: 'c-project-kanban__responsible_sizeBottom c'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-flex-row',
                                                    js: {},
                                                    content: [
                                                        {
                                                            block: 't-patterns__combobox',
//                                                            mix: {
//                                                                block: 'c-project-kanban__responsible',
//                                                                attrs: { style: 'width: 200px!important;'},
//                                                            },
                                                            js: {
                                                                width: '100%',
                                                                name: jdata.Responsibles.Name,
                                                                value_id: jdata.Responsibles.FirstID,
                                                                value_name: jdata.Responsibles.FirstValue,
                                                                list: jdata.Responsibles.List,
                                                                action: ''
                                                            }
                                                            //cls: 'c-project-kanban__responsible_size c-project-kanban__responsible_position'
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
                                                            attrs: { type: 'text', value: jdata.Code, name: 'f_code', placeholder: 'Шифр' }
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
                                                                borderColor: '#2e6da4',
                                                                action: 'false'
                                                            },
                                                            mix: {
                                                                block: 'c-project-filter',
                                                                js: true
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
                                             tag: 'center',
                                             content: [
                                                 {
                                                     tag: 'table',
                                                     content: [
                                                         {
                                                             tag: 'thead',
                                                             content: [
                                                                 {
                                                                     tag: 'tr',
                                                                     content: [
                                                                         {
                                                                             tag: 'th',
                                                                             content: 'В очереди'
                                                                         },
                                                                         {
                                                                             tag: 'th',
                                                                             content: 'В работе'
                                                                         }
                                                                     ]
                                                                 }
                                                             ]
                                                         }
                                                     ]
                                                 },

                                                {
                                                    attrs: { id: 'spid_project' }
                                                }
                                             ]
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
                                                action_name: "ProjectNew",
                                                selector: '#place_modal_form',
                                                builder: 'ProjectNew',
                                                user_id: $('input[name="user_id"]').val()
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
                                                    content: 'Новый проект'
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
                                     attrs: { 'data-type': 'project'},
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
                                                                 block: 'c-kanban__column',
                                                                js: { kot_id: item.ID.toString() },
                                                                 cls: 'stage',
                                                                 tag: 'td',
                                                                 attrs: {
                                                                     id: kot_id,
                                                                     'data-kot-id': item.ID,
                                                                     'data-lavel': j,
                                                                     ondragenter: "return dragEnter(event)",
                                                                     ondrop: "return dragDrop(event)",
                                                                     ondragover: "return dragOver(event)"
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

        // зовем функцию которая нарисует chart
//        google.charts.setOnLoadCallback(drawGougeProject);

//        function drawGougeProject() {
//            var mydata = JSON.parse(jdata.Spid);
//            var data   = new google.visualization.DataTable(mydata);

//            var options = {
//                //width: 300, height: 150,

//                redFrom   : 0 , redTo   : 60,
//                yellowFrom: 60, yellowTo: 90,
//                greenFrom : 90, greenTo : 100,

//                minorTicks: 3,

//                animation:{
//                    duration: 1000
//                }
//            };

//            var chart = new google.visualization.Gauge(document.getElementById('spid_project'));
//            chart.draw(data, options);

//            $('#spid_project table tbody tr td').each(function(i, item){
//                if(item.children.length == 0) {
//                    item.remove();
//                }
//            });

//        }
        g_heap['f_responsible_id'] = jdata.Responsibles.FirstID.toString();
        g_heap['f_template_id'] = jdata.Templates.FirstID.toString();
        g_heap['f_sub_name'] = jdata.SubName,
        g_heap['f_code'] = jdata.Code

        var scrollHeight = Math.max(
            document.documentElement.offsetHeight, document.documentElement.clientHeight
        );

        var cellHeight = (scrollHeight - 322).toString() + 'px';

        $('.c-kanban').css({'height' : cellHeight});

        ProjectRequestReloadKanbanColumn(jdata.Responsibles.FirstID.toString(), '1', answer['project_id'], jdata.Templates.FirstID.toString(), jdata.SubName, jdata.Code);
        ProjectRequestReloadKanbanColumn(jdata.Responsibles.FirstID.toString(), '2', answer['project_id'], jdata.Templates.FirstID.toString(), jdata.SubName, jdata.Code);
        ProjectRequestReloadKanbanColumn(jdata.Responsibles.FirstID.toString(), '3', answer['project_id'], jdata.Templates.FirstID.toString(), jdata.SubName, jdata.Code);
        ProjectRequestReloadKanbanColumn(jdata.Responsibles.FirstID.toString(), '4', answer['project_id'], jdata.Templates.FirstID.toString(), jdata.SubName, jdata.Code);
        ProjectRequestReloadKanbanColumn(jdata.Responsibles.FirstID.toString(), '5', answer['project_id'], jdata.Templates.FirstID.toString(), jdata.SubName, jdata.Code);
     });
 }

function ProjectRequestReloadKanbanColumn(responsible_id, kot_id, project_id, template_id, sub_name, code) {
    var msg = {
        action_name: 'ProjectReloadKanbanColumn',
        kot_id: kot_id,
        f_responsible_id: responsible_id,
        user_id: $('input[name="user_id"]').val(),
        project_id: project_id,
        selector: '#kot_id_' + kot_id,
        f_template_id: template_id,
        f_sub_name: sub_name,
        f_code: code,
        builder: 'ProjectReloadKanbanColumn'
    };

    WSSend(msg);
}

function ProjectReloadKanbanColumn(answer) {
    var elem = $(answer["selector"])

    elem.empty();

    console.log(answer);
    var jdata = JSON.parse(answer["data"]);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer["selector"]), BEMHTML.apply({
            content: (function() {
                var cards = [];
                var card_id;

                if (! $.isEmptyObject(jdata)) {
                    jdata.map(function(i_item) {
                        card_id = 'process_card_' + i_item.ID;

                        cards.push({
                            block: 'c-process-card',
                            js: {
                                action_name: 'ProjectShow',
                                id: i_item.ID.toString(),
                                user_id: $('input[name="user_id"]').val(),
                                state: i_item.State.toString(),
                                selector: '#place_content',
                                builder: 'ProjectShow'
                            },
                            cls: 'drag-drop',
                            attrs: {
                                id: card_id,
                                'data-id': i_item.ID,
                                'data-object': 'project',
                                draggable: "true",
                                ondragstart: "return dragStart(event)",
                                ondragend: "return dragEnd(event)"
                            },
                            content: [
                                {
                                    elem: 'header',
                                    content: [
                                        {
                                            elem: 'zam',
                                            tag: 'span',
                                            content: i_item.Zam + ' / ' + i_item.Responsible + ' / ' + i_item.Gip
                                        },

                                    ]
                                },
                                {
                                    elem: 'code',
                                    content: i_item.Code
                                },
                                {
                                    elem: 'main',
                                    content: i_item.Name
                                },
                                {
                                    elem: 'hr',
                                    content: (function() {
                                        var hr = {};

                                        if (! $.isEmptyObject(i_item.Tasks)) {
                                            hr = {
                                                tag: 'hr'
                                            };
                                        }

                                        return hr;
                                    })()
                                },
                                {
                                    elem: 'tasks',
                                    content: [
                                        {
                                            block: 'c-checkbox-area',
                                            content: [
                                                {
                                                    tag: 'ul',
                                                    cls: 'c-kanban__column_b-checkbox-task_position',
                                                    content: (function() {
                                                        var tasks = [];

                                                        if (! $.isEmptyObject(i_item.Tasks)) {
                                                            i_item.Tasks.map(function(ii_item) {

                                                                if (ii_item.DaysDelay == '') {
                                                                    tasks.push({
                                                                        block: 'b-checkbox-task',
                                                                        js: {
                                                                            value: ii_item.Value,
                                                                            state: ii_item.State,
                                                                            dd: ii_item.DaysDelay,
                                                                            project_id: i_item.ID.toString(),
                                                                            task_id: ii_item.ID,
                                                                            task_name: ii_item.Name,
                                                                            kot_id: answer['kot_id'].toString()
                                                                        },
                                                                        tag: 'li',
                                                                        //cls: 'checked_' + ii_item.State,
                                                                        attrs: { 'name': 'contract_tasks', 'data-task-id': ii_item.ID, 'value': ii_item.ID },
                                                                        content: [
                                                                            {
                                                                                elem: 'checkbox'
                                                                            },
                                                                            {
                                                                                elem: 'name',
                                                                                tag: 'span',
                                                                                content: ii_item.Name
                                                                            }
                                                                        ]
                                                                    });
                                                                } else {
                                                                    tasks.push({
                                                                        block: 'b-checkbox-task',
                                                                        js: {
                                                                            value: ii_item.Value,
                                                                            state: ii_item.State,
                                                                            dd: ii_item.DaysDelay,
                                                                            project_id: i_item.ID.toString(),
                                                                            task_id: ii_item.ID,
                                                                            task_name: ii_item.Name,
                                                                            kot_id: answer['kot_id'].toString()
                                                                        },
                                                                        tag: 'li',
                                                                        //cls: 'checked_' + ii_item.State,
                                                                        attrs: { 'name': 'contract_tasks', 'data-task-id': ii_item.ID, 'value': ii_item.ID },
                                                                        content: [
                                                                            {
                                                                                elem: 'checkbox'
                                                                            },
                                                                            {
                                                                                elem: 'name',
                                                                                tag: 'span',
                                                                                content: ii_item.Name
                                                                            },
                                                                            {
                                                                                elem: 'ddelay',
                                                                                tag: 'span',
                                                                                content: ii_item.DaysDelay
                                                                            }
                                                                        ]
                                                                    });
                                                                }

                                                            });
                                                        }
                                                        return tasks;
                                                    })()
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'footer',
                                    content: [
                                        {
                                            elem: 'cor-action',
                                            js: {
                                                project_id: i_item.ID.toString(),
                                                faTypeID: i_item.FATypeID
                                            },
                                            tag: 'span',
                                            cls: 'glyphicon glyphicon-warning-sign',
                                            attrs: { 'aria-hidden': "true" }
                                        },
                                        {
                                            elem: 'date',
                                            tag: 'span',
                                            content: i_item.TargetDate
                                        }
                                    ]
                                },
                            ]
                        });
                    });

                }

                return cards;
            })()
        }));
        if (answer["project_id"] != "0") {
            var $reqId = $('#process_card_' + answer["project_id"]);

            var scrollHeight = Math.max(
                document.documentElement.offsetHeight, document.documentElement.clientHeight
            );

            if ($reqId.length > 0) {
                $('.c-kanban').stop().animate({scrollTop: $('.c-kanban').scrollTop() + ($reqId.offset().top - $('.c-kanban').offset().top) - 10}, 2000);

                $reqId.addClass('c-process-card_focused');

                setTimeout(function() { $reqId.removeClass('c-process-card_focused'); }, 10000);
            }
            else {
                $(".messenger").addClass("info");
                $(".messenger").html("Карточка не найдена. Проверьте параметры фильтра.");
                $(".messenger").fadeIn("slow");
            }
        }
    });
}

function ProjectTaskCloseShow(answer){
    var elem = $(answer['selector']);

    elem.empty();

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
                                            block: 'b-flex-column',
                                            js: {
                                            	width: '480px',
                                            	height: '80px',
                                            	justifyContent: 'center',
                                            	alignItems: 'center'
                                            },
                                            content: [
    	                                        {
    	                                        	block: 'b-flex-row',
    	                                        	js: {
    	                                        		fontSize: '14px',
        												fontWeight: 'bold'
    	                                        	},
    	                                        	content: 'Закрыть задачу: ' + answer.task_name
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
                                                    tag: 'button',
                                                    mods: { padding: 'right'},
                                                    js: {
                                                        action_name: 'ProjectTaskClose',
                                                        task_id: answer['task_id'],
                                                        user_id: answer['user_id'],
                                                        selector: 'li.b-checkbox-task[name="contract_tasks"][data-task-id="'+answer['task_id']+'"]',
                                                        builder: 'ProjectTaskClose'
                                                    },
                                                    cls: 'btn btn-primary',
                                                    attrs: { type: 'button', id: 'changeButton', 'data-dismiss': 'modal'},
                                                    content: [
                                                        {
                                                            elem: 'l-glyphicon',
                                                            tag: 'span',
                                                            cls: 'glyphicon glyphicon-ok'
                                                        },
                                                        {
                                                            elem: 'text',
                                                            tag: 'span',
                                                            content: 'Закрыть'
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

        $(elem).modal('show');

    });

}

function ProjectTaskClose(answer){

    var jdata = JSON.parse(answer["data"]);

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'b-checkbox-task',
            js: {
                value: jdata.Value.toString(),
                state: jdata.State.toString(),
                dd: jdata.DaysDelay,
                task_id: jdata.ID.toString(),
                task_name: jdata.Name,
                kot_id: answer['kot_id'].toString()
            },
            tag: 'li',
            attrs: { 'name': 'contract_tasks', 'data-task-id': jdata.ID, 'value': jdata.ID },
            content: [
                {
                    elem: 'checkbox'
                },
                {
                    elem: 'name',
                    tag: 'span',
                    content: jdata.Name
                }
            ]
        }));
    });
}

function ProjectTaskShow(answer){
    var elem = $(answer['selector'])
      , jdata = JSON.parse(answer['data'])
      , height = document.body.clientHeight - 60
      ;

    elem.empty();

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
                                    block: 'b-block',
                                    js: {
                                        height: height
                                    },
                                    cls: 'panel panel-primary',
                                    content: [
                                        {
                                            block: 'b-block',
                                            js: {
                                                height: '97%'
                                            },
                                            content: [
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
                                                            content: 'Задача: ' + JSModel.task_name
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
                                                        height: '100%',
                                                        justifyContent: 'space-between'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'b-flex-column',
                                                            js: {
                                                                justifyContent: 'center'
                                                            },
//                                                            attrs: { id: 'modalWindowRequestCanban' },
//                                                            cls: 'modalWindowRequestEdit',
                                                            content: [
                                                                {
                                                                    block: 'b-flex-column',
                                                                    js: {
                                                                        margin: '8px',
                                                                        borderTop: '1px solid #ddd'
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
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'c-body-history',
                                                                            js: {
                                                                                borderBottom: '2px solid #ddd',
                                                                                overflowY: 'auto',
                                                                                maxHeight: '364px'
                                                                            },
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
                                                                },
                                                                (function(){
                                                                    var res = [];
                                                                    if(jdata.Script !=4) {
                                                                        res.push([
                                                                            {
                                                                                block: 'b-fex-column',
                                                                                content: [
                                                                                    {
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
                                                                                    }
                                                                                ]
                                                                            },
                                                                            ])
                                                                    }
                                                                    return res;
                                                                })()
                                                            ]
                                                        },
                                                        {
                                                            content: (function(){
                                                                var block = [];
                                                                if(jdata.Script != 4) {
                                                                    block.push({

                                                                        block: 'c-modal-form__panel-footer',
                                                                        cls: 'panel-footer ',
                                                                        js: {
                                                                            borderBottom: '1px solid #ddd',
                                                                            padding: '0px!important'
                                                                        },
                                                                        content: (function() {
                                                                            var res = [];

                                                                            if (jdata.Script == 1) {
                                                                                res.push([
                                                                                    {
                                                                                        block: 'b-button',
                                                                                        mix: {
                                                                                            block: 'c-request-task-execute',
                                                                                            js: {
                                                                                                value: "1",
                                                                                                kot_id: answer["kot_id"],
                                                                                                task_id: answer["task_id"]
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
                                                                                                value: "1",
                                                                                                kot_id: answer["kot_id"],
                                                                                                task_id: answer["task_id"]
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
                                                                                                value: "2",
                                                                                                kot_id: answer["kot_id"],
                                                                                                task_id: answer["task_id"]
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
                                                                                                value: "0",
                                                                                                kot_id: answer["kot_id"],
                                                                                                task_id: answer["task_id"]
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

                                                                    })
                                                                }
                                                                return block;
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
                }
            ]

        }));

        $(elem).modal('show');
    });
}
