'use strict';
function DashboardProjectShow(answer) {
    var selector = '#place_content';
    $(selector).empty();
    var jdata = JSON.parse(answer['data']);

    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
        bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
            {
                tag: 'project_card',
                attrs: { input_data: JSON.stringify(jdata) }
            },
            {
                tag: 'script',
                attrs: { src: "app/build.js" }
            }
        ]))
    });
}
