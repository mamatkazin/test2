'use strict';
function _DrawInformers(jdata, selector){
    
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });  
    });
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(selector), BEMHTML.apply({
            block: 'b-informers',
            content: [
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
                                },
                                {
                                    tag: 'tbody',
                                    content: [
                                        {
                                            tag: 'tr',
                                            content: [
                                                {
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            attrs: { id: 'task_spid_1' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    tag: 'td',
                                                    content: [
                                                        {
                                                            attrs: { id: 'task_spid_2' }
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
        
        // зовем функцию которая нарисует chart
        if ($(jdata.Gauges).length > 0) {
            google.charts.setOnLoadCallback(drawGougeTask(jdata.Gauges[0]));  
            google.charts.setOnLoadCallback(drawGougeTask1(jdata.Gauges[1])); 
            
            function drawGougeTask(gauge) {
                var mydata = JSON.parse(gauge.Gauge);
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
            
                var chart = new google.visualization.Gauge(document.getElementById(gauge.GaugeID));
                chart.draw(data, options);
            }
            
            function drawGougeTask1(gauge) {
                var mydata = JSON.parse(gauge.Gauge);
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
            
                var chart = new google.visualization.Gauge(document.getElementById(gauge.GaugeID));
                chart.draw(data, options);
            }
        }
    });
}