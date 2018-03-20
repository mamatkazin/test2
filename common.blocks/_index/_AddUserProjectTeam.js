//function AddUserProjectTeam(json_data){
//    $(json_data['selector']).empty();
    
//    var jdata = JSON.parse(json_data['data']); 
    
//    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
//        bemDom.replace(bemDom.doc.find(json_data["selector"]), BEMHTML.apply({
//            block: 'destination',
//            tag: 'td',
//            attrs: {
//                'data-lavel': 2,
//                ondragenter: "return dragEnterTeam(event)",
//                ondrop: "return dragDropTeam(event)",
//                ondragover: "return dragOverTeam(event)"
//            },
//            content: [
//                {
//                    tag: 'table',
//                    cls: 'table table-hover',
//                    content: [
//                        {
//                            tag: 'tbody',
//                            content: (function() {
//                                var tr = [];
                        
//                                if (! $.isEmptyObject(jdata)) {
//                                    jdata.map(function(item) {
//                                        tr.push({
//                                            tag: 'tr',
//                                            attrs: { 
//                                                id: 'team_' + item.ID,
//                                                'data-lavel': 2,
//                                                'data-id': item.ID,
//                                                draggable: "true",
//                                                ondragstart: "return dragStartTeam(event)",
//                                                ondragend: "return dragEndTeam(event)"
//                                            },
//                                            content: [
//                                                {
//                                                    tag: 'td',
//                                                    content: item.Name
//                                                },
//                                                {
//                                                    tag: 'td',
//                                                    content: item.DName
//                                                }
//                                            ]
                                            
//                                        });
//                                    });
                            
//                                }

//                                return tr;
//                            })()
//                        }
//                    ]
//                }
//            ]
//        }));
//    });
//}