 function ShowKanbanProject(json_data){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var jdata = JSON.parse(json_data); 
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find('#place_content'), BEMHTML.apply({
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
                                                                //marginRight: '8px',
                                                                // name: ,
                                                                // value_id: ,
                                                                // value_name: ,
                                                                // list: ,
                                                                action: 'c-project-kanban__responsible'
                                                            },
                                                            cls: 'c-project-kanban__responsible_sizeBottom c'
                                                        }
                                                        // ,
                                                        // {
                                                        //     block: 't-patterns__combobox',
                                                        //     mix: { 
                                                        //         block: 'c-project-kanban__responsible'

                                                        //     },
                                                        //     js: {
                                                        //         // name: ,
                                                        //         // value_id: ,
                                                        //         // value_name: ,
                                                        //         // list: ,
                                                        //         action: 'c-project-kanban__responsible'
                                                        //     },
                                                        //     cls: 'c-project-kanban__responsible_size'
                                                        // },
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
                                                action_name: "NewProject",
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
                                                                 elem: 'column',
                                                                 cls: 'stage',
                                                                 tag: 'td',
                                                                 attrs: {
                                                                     id: kot_id,
                                                                     'data-kot-id': item.ID,
                                                                     'data-lavel': j
//                                                                     ondragenter: "return dragEnter(event)",
//                                                                     ondrop: "return dragDrop(event)",
//                                                                     ondragover: "return dragOver(event)"
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
        google.charts.setOnLoadCallback(drawGougeProject);  
        
        function drawGougeProject() {
            var mydata = JSON.parse(jdata.Spid);
            var data   = new google.visualization.DataTable(mydata);
            
            var options = {
                //width: 300, height: 150,
                
                redFrom   : 0 , redTo   : 60,
                yellowFrom: 60, yellowTo: 90,
                greenFrom : 90, greenTo : 100, 
                
                minorTicks: 3,
                
                animation:{
                    duration: 1000
                }
            };
        
            var chart = new google.visualization.Gauge(document.getElementById('spid_project'));
            chart.draw(data, options);
            
            $('#spid_project table tbody tr td').each(function(i, item){
                if(item.children.length == 0) {
                    item.remove();
                }
            });
        
        }
        
         var scrollHeight = Math.max(
             document.documentElement.offsetHeight, document.documentElement.clientHeight
         );
    
         var cellHeight = (scrollHeight - 322).toString() + 'px';

         $('.c-kanban').css({'height' : cellHeight});
    
//         SendReloadKanbanColumnProject(jdata.FResponsibles.FirstID.toString(), '1', jdata.CurrentPID);
//         SendReloadKanbanColumnProject(jdata.FResponsibles.FirstID.toString(), '101', jdata.CurrentPID);
//         SendReloadKanbanColumnProject(jdata.FResponsibles.FirstID.toString(), '2', jdata.CurrentPID);
     });
 }