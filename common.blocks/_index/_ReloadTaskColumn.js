function SendColumnReload(responsible_id, project_id, kot_id, selector, builder, contract_id, context) {
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var msg = {
        action_name: "SP_Task_Sel_ByStep",
        kot_id: kot_id,
        responsible_id: responsible_id,
        project_id: project_id,
        task_id: contract_id,
        context: context,
        selector: selector,
        builder: builder,
        user_id: $('input[name="user_id"]').val()
    };
    
    WSSend(msg);
}

function ReloadColumn(answer) {
    var elem = $(answer["selector"])
    elem.empty();

    var jdata = JSON.parse(answer["data"]);
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer["selector"]), BEMHTML.apply({
            content: (function() {
                var cards = [];
                var card_id;
                
                if (answer["kot_id"] == '1') {
                    cards.push({
                        block: 'c-button-new',
                        content: [
                            {
                                block: 'b-button-call',
                                js: {
                                    action_name: "TaskNew",
                                    user_id: $('input[name="user_id"]').val(),
                                    parent_id: '0',
                                    project_id: '0',
                                    selector: '#place_modal_form',
                                    builder: 'TaskNew', 
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
                                        content: 'Новая задача'
                                    }
                                ]
                            }
                        ]
                    })
                }
                
                if (! $.isEmptyObject(jdata.Column)) {
                    jdata.Column.map(function(i_item) {
                        card_id = 'process_card_' + i_item.ID;
                        
                        cards.push({
                            block: 'c-process-card',
                            js: { 
                                action_name: 'TaskShow',
                                task_id: i_item.ID.toString(),
                                user_id: $('input[name="user_id"]').val(),
                                lavel: i_item.Lavel.toString(),
                                state: i_item.S.toString(),
                                type: '2',
								name: i_item.Name,
                                selector: '#place_content',
                                builder: 'TaskShow'
                            },
                            cls: 'drag-drop',
                            attrs: {
                                id: card_id,
                                'data-id': i_item.ID,
                                'data-nomove': i_item.NoMove.toString(),
                                draggable: "true",
                                ondragstart: "return dragStart(event)",
                                ondragend: "return dragEnd(event)"
                            },
                            content: [
                                {
                                    elem: 'header',
                                    content: i_item.PName
                                },
                                {
                                    elem: 'main',
                                    content: i_item.Name
                                },
                                {
                                    elem: 'footer',
                                    content: [
                                        {
                                            elem: 'responsible',
                                            tag: 'span',
                                            content: i_item.Responsible
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
 
//        if (jdata.Speed != "") {
//            // зовем функцию которая нарисует chart
//            google.charts.setOnLoadCallback(drawGougeTask);  
            
//            function drawGougeTask() {
//                var mydata = JSON.parse(jdata.Speed);
//                var data   = new google.visualization.DataTable(mydata);
                
//                var options = {
//                    //width: 300, height: 150,
                    
//                    redFrom   : 0 , redTo   : 60,
//                    yellowFrom: 60, yellowTo: 90,
//                    greenFrom : 90, greenTo : 100, 
                    
//                    minorTicks: 3,
                    
//                    animation:{
//                        duration: 1000
//                    }
//                };
            
//                var chart = new google.visualization.Gauge(document.getElementById(jdata.SpeedID));
//                chart.draw(data, options);
                
//    //            $('#'+jdata.SpidID+' table tbody tr td').each(function(i, item){
//    //                if(item.children.length == 0) {
//    //                    item.remove();
//    //                }
//    //            });
            
//            };
        //};
            
        if ((answer["task_id"] != "0") && (answer["kot_id"] == g_heap['task_lavel'].toString())) {
            var $reqId = $('#process_card_' + answer["task_id"]);
            
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
        };
        
    });
}

function ReloadColumnForMove(answer) {
    var elem = $(answer["selector"])
    elem.empty();

    var jdata = JSON.parse(answer["data"]); 
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer["selector"]), BEMHTML.apply({
            content: (function() {
                var cards = [];
                var card_id;
                
                if (! $.isEmptyObject(jdata.Column)) {
                    jdata.Column.map(function(i_item) {
                        card_id = 'process_card_' + i_item.ID;
                        
                        cards.push({
                            block: 'c-process-card',
                            js: { 
                                action_name: 'TaskShow',
                                task_id: i_item.ID.toString(),
                                user_id: $('input[name="user_id"]').val(),
                                lavel: i_item.Lavel.toString(),
                                state: i_item.S.toString(),
                                type: '2',
                                name: i_item.Name,
                                selector: '#place_content',
                                builder: 'TaskShow'
                            },
                            cls: 'drag-drop',
                            attrs: {
                                id: card_id,
                                'data-id': i_item.ID,
                                'data-nomove': i_item.NoMove.toString(),
                                draggable: "true",
                                ondragstart: "return dragStart(event)",
                                ondragend: "return dragEnd(event)"
                            },
                            content: [
                                {
                                    elem: 'header',
                                    content: i_item.PName
                                },
                                {
                                    elem: 'main',
                                    content: i_item.Name
                                },
                                {
                                    elem: 'footer',
                                    content: [
                                        {
                                            elem: 'responsible',
                                            tag: 'span',
                                            content: i_item.Responsible
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

        if (jdata.SpeedS != "") {
            // зовем функцию которая нарисует chart
            google.charts.setOnLoadCallback(drawGougeTask);  
            
            function drawGougeTask() {
                var mydata = JSON.parse(jdata.SpeedS);
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
            
                var chart = new google.visualization.Gauge(document.getElementById(jdata.SpeedIDS));
                chart.draw(data, options);
            };
        };
            
        if (jdata.SpeedD != "") {
            // зовем функцию которая нарисует chart
            google.charts.setOnLoadCallback(drawGougeTask);  
            
            function drawGougeTask() {
                var mydata = JSON.parse(jdata.SpeedD);
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
            
                var chart = new google.visualization.Gauge(document.getElementById(jdata.SpeedIDD));
                chart.draw(data, options);
            };
        };
        
        if (answer["contract_id"] != "0") {
            var $reqId = $('#process_card_' + answer["contract_id"]);
            
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
        };
        
        
    });
}