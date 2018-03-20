'use strict';
function ShowDashboards(answer) {
    var selector = '#place_content';
    $(selector).empty();
    var answer = { data:'[{"name":"Корректировка","fact":"299","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"199","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"499","plan":"600", "sum":"299"},{"name":"Корректировка","fact":"299","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"199","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"499","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"299","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"199","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"499","plan":"600", "sum":"299"},{"name":"Корректировка","fact":"299","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"199","plan":"600", "sum":"299"}, {"name":"Корректировка","fact":"499","plan":"600", "sum":"299"}]' };
    //console.log('ShowLabourIntensity answer', answer);
    var jdata = JSON.parse(answer['data']);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
    bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
        /*{
            tag: 'list',
            attrs:
                {
                    input_data: JSON.stringify(jdata)
                }
        },
        {
            tag: 'router'
        },
        {
            tag: 'script',
            attrs: { src: "app/build.js" }
        }*/
    ]))});
}