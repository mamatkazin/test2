//function SendReloadKanbanColumnProject(responsible_id, kot_id, current_pid) {
//    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
//        $(function() {
//            init();
//        });
        
//    });
//    var msg = {
//        action_name: "ReloadKanbanColumnProject",
//        kot_id: kot_id,
//        responsible_id: responsible_id,
//        current_pid: current_pid,
//        user_id: $('input[name="user_id"]').val()
//    };
    
//    WSSend(msg);
//}

//function ReloadKanbanColumnProject(answer) {
//    var elem = $(answer["selector"])
//    elem.empty();

//    var jdata = JSON.parse(answer["data"]); 
    
//    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//        bemDom.append(bemDom.doc.find(answer["selector"]), BEMHTML.apply({
//            content: (function() {
//                var cards = [];
//                var card_id;
                
//                if (! $.isEmptyObject(jdata)) {
//                    jdata.map(function(i_item) {
//                        card_id = 'process_card_' + i_item.ID;
                        
//                        cards.push({
//                            block: 'c-process-card',
//                            js: { 
//                                action_name: 'ShowProject',
//                                id: i_item.ID.toString(),
//                                lavel: i_item.Lavel.toString(),
//                                user_id: $('input[name="user_id"]').val(),
//                                f_responsible_id: g_heap["f_responsible_id"].toString(),
//                                name: i_item.Name,
//                                selector: '#place_content',
//                                builder: 'ShowProject'
//                            },
//                            cls: 'drag-drop',
//                            attrs: {
//                                id: card_id,
//                                'data-id': i_item.ID
////                                draggable: "true",
////                                ondragstart: "return dragStart(event)",
////                                ondragend: "return dragEnd(event)"
//                            },
//                            content: [
//                                {
//                                    elem: 'header',
//                                    content: []
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
//                                            content: ''
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
//        if (answer["contract_id"] != "0") {
//            var $reqId = $('#process_card_' + answer["contract_id"]);
            
//            var scrollHeight = Math.max(
//                document.documentElement.offsetHeight, document.documentElement.clientHeight
//            );
            
//            if ($reqId.length > 0) {
//                $('.c-kanban').stop().animate({scrollTop: $('.c-kanban').scrollTop() + ($reqId.offset().top - $('.c-kanban').offset().top) - 10}, 2000);
                
//                $reqId.addClass('c-process-card_focused');
                
//                setTimeout(function() { $reqId.removeClass('c-process-card_focused'); }, 10000);
//            }
//            else {
//                $(".messenger").addClass("info");
//                $(".messenger").html("Карточка не найдена. Проверьте параметры фильтра.");
//                $(".messenger").fadeIn("slow");
//            }
//        }
//    });
//}