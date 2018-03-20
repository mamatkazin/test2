function Show(answer){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    //document.styleSheets[0].disabled = true;
    $(answer['selector']).empty();
    
    var jdata = JSON.parse(answer['data']); 
    
    if (g_heap['type'] == 'project') {
        action_name = 'ShowProject';
        builder = 'ShowProject';
    } else {
        action_name = 'TaskKanban';
        builder = 'TaskKanban';
    }
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(answer['selector']), BEMHTML.apply({
            block: 'c-task-show',
            content: [
                {
                    block: 'b-task-show-tree',
                    content: [
                        {
                            block: 'b-button-call',
                            js: {
                                action_name: action_name,
                                f_project_id: g_heap['f_project_id'].toString(),
                                f_responsible_id: g_heap['f_responsible_id'].toString(),
                                task_id: g_heap['task_id'].toString(),
                                task_lavel: g_heap['task_lavel'].toString(),
                                user_id: $('input[name="user_id"]').val(),
                                selector: '#place_content',
                                id: g_heap['project_id'].toString(),
                                lavel: g_heap['task_lavel'].toString(),
                                builder: builder
                            },
                            mix: { block: 'b-forward-back' },
                            content: [
                                {
                                    elem: 'l-glyphicon',
                                    tag: 'span',
                                    cls: 'glyphicon glyphicon-arrow-left',
                                    attrs: { 'aria-hidden': "true" }
                                },
                                {
                                    elem: 'name',
                                    tag: 'span',
                                    content: 'Вернуться к списку задач'
                                }
                            ], 
                        },
                        {
                            block: 'task-tree',
                            attrs: { id: 'task_tree' }
                        }
                    ]
                }
            ]
        }));
        
        google.charts.setOnLoadCallback(drawChart(jdata));

        function drawChart(jdata) {
            var mydata = JSON.parse(jdata.Tree);
            var data   = new google.visualization.DataTable(mydata);

            var chart = new google.visualization.OrgChart(document.getElementById('task_tree'));
            // Draw the chart, setting the allowHtml option to true for the tooltips.
            chart.draw(data, {allowHtml:true});

        }
        
        var scrollHeight = Math.max(
            document.documentElement.offsetHeight, document.documentElement.clientHeight
        );
    
        var cellHeight = (scrollHeight - 80).toString() + 'px';

        $('#place_content').css({'height' : cellHeight});
        
        if (g_heap['task_id'] != 0) {
            var $reqId = $('#b_tree_card_' + g_heap['task_id'].toString());
            
            if ($reqId.length > 0) {
                
                $reqId.addClass('c-process-card_focused');
                
                setTimeout(function() { $reqId.removeClass('c-process-card_focused'); }, 10000);
            }
        };
    });
}