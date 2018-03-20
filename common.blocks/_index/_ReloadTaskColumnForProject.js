//function ReloadTaskColumnForProject(answer) {
//    var elem = $(answer["selector"])
//    elem.empty();

//    var jdata = JSON.parse(answer["data"]); 
    
//    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//        bemDom.append(bemDom.doc.find(answer["selector"]), BEMHTML.apply({
//            content: (function() {
//                var cards = [];
//                var card_id;
                
//                if (! $.isEmptyObject(jdata.ContratColumn)) {
//                    jdata.ContratColumn.map(function(i_item) {
//                        card_id = 'process_card_' + i_item.ID;
                        
//                        cards.push({
//                            block: 'c-process-card',
//                            js: { 
//                                action_name: 'TaskEdit',
//                                state: i_item.S.toString(),
//                                id: i_item.ID.toString(),
//                                lavel: i_item.Lavel.toString(),
//                                builder: 'EditTaskForProject',
//                                selector: '#place_modal_form_lavel_2',
//                                user_id: $('input[name="user_id"]').val()
                
//                            },
//                            cls: 'drag-drop',
//                            attrs: {
//                                id: card_id,
//                                'data-id': i_item.ID
//                            },
//                            content: [
//                                {
//                                    elem: 'header',
//                                    content: i_item.PName
//                                },
//                                {
//                                    elem: 'main',
//                                    content: i_item.Name
//                                },
//                                {
//                                    elem: 'footer',
//                                    content: [
//                                        {
//                                            elem: 'responsible',
//                                            tag: 'span',
//                                            content: i_item.Responsible
//                                        },
//                                        {
//                                            elem: 'date',
//                                            tag: 'span',
//                                            content: i_item.TargetDate
//                                        }
//                                    ] 
//                                },
//                            ]
//                        });
//                    });
                    
//                }

//                return cards;
//            })()
//        }));
        
//        if (jdata.Speed != "") {
//            // зовем функцию которая нарисует chart
//            google.charts.setOnLoadCallback(drawGougeTask);  
            
//            function drawGougeTask() {
//                var mydata = JSON.parse(jdata.Speed);
//                var data   = new google.visualization.DataTable(mydata);
                
//                var options = {
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
            
//            };
//        };
        
//        setTimeout(function() { 
//            if (answer["contract_id"] != "0") {
//                var $reqId = $('.c-project-show #process_card_' + answer["contract_id"]);
                
//                var scrollHeight = Math.max(
//                    document.documentElement.offsetHeight, document.documentElement.clientHeight
//                );
                
//                if ($reqId.length > 0) {
//                    $('.c-kanban').stop().animate({scrollTop: $('.c-project-show .c-kanban').scrollTop() + ($reqId.offset().top - $('.c-project-show .c-kanban').offset().top) - 10}, 2000);
                    
//                    $reqId.addClass('c-process-card_focused');
                    
//                    setTimeout(function() { $reqId.removeClass('c-process-card_focused'); }, 10000);
//                }
//                else {
//                    $(".messenger").addClass("info");
//                    $(".messenger").html("Карточка не найдена. Проверьте параметры фильтра.");
//                    $(".messenger").fadeIn("slow");
//                }
//            };
        
//        }, 500);
        
            
//    });
//}