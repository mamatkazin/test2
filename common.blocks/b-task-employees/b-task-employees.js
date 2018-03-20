'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
function _TaskEmployees(jdata, selector){
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(selector), BEMHTML.apply({
            block: 'b-task-employees',
            content: [
                {
                    tag: 'table',
                    cls: 'table table-hover',
                    content: [
                        {
                            tag: 'thead',
                            content: [
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'th',
                                            content: 'ФИО'
                                        },
                                        {
                                            tag: 'th',
                                            content: 'Депертамент'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            tag: 'tbody',
                            content: (function() {
                                var selector = '.b-task-employees';
                                
                                var tasks = [];
                
                                if (! $.isEmptyObject(jdata.Employees)) {
                                    jdata.Children.map(function(item) {
                                        tasks.push({
                                            tag: 'tr',
                                            content: [
                                                {
                                                    tag: 'td',
                                                    content: item.Name
                                                },
                                                {
                                                    tag: 'td',
                                                    content: item.ID
                                                }
                                            ]
                                        });
                                    });
                                }
            
                                return tasks;
                            })()
                        }
                    ]
                }
            ]
        }));
    });
}
