function LoadTeamProject(json_data){
    modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
        $(function() {
            init();
        });
        
    });
    var jdata = JSON.parse(json_data['data']); 
    
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.replace(bemDom.doc.find(answer["selector"]), BEMHTML.apply({
            block: 'b-combobox-field',
            mix: { block: 'l-task-new__responsible' },
            attrs: { id: 'TaskNewTeamList'},
            content: [
                {
                    elem: 'l-label',
                    tag: 'label',
                    cls: 'control-label',
                    content: 'Ответственный'
                },
                {
                    block: 't-patterns__combobox',
                    js: { 
                        name: jdata.Responsibles.Name,
                        value_id: jdata.Responsibles.FirstID,
                        value_name: jdata.Responsibles.FirstValue,
                        list: jdata.Responsibles.List,
                        action: ''
                    }
                }
            ]
        }));
    });
}