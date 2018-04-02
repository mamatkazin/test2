'use strict';
function ShowLabourIntensity(answer) {
    var selector = '#place_content';
    $(selector).empty();
    /*var answer = {
        action_name:"ts_accept_show",
        //data:'{"department":"Отдел планирования","head_department":"Сухов Т.С.","employee":[{"id":299,"name":"Белов А. В.","utilisation":"57.00","tasks":[{"id":3391,"name":"Работы по договору. Реализация","utilisation":"0.00","plan":"2000","fact":"57.00","state":0},{"id":3391,"name":"DOM имеет интерфейс (API) который предоставляет возможность доступа к любой части документа.","utilisation":"0.00","plan":"2000","fact":"57.00","state":1},{"id":3391,"name":"Работы по договору. Реализация","utilisation":"0.00","plan":"2000","fact":"57.00","state":2}]},{"id":286,"name":"Маматказин И. А.","utilisation":"57.00","tasks":[{"id":3391,"name":" Эта модель позволяет осуществлять манипуляции над целыми разделами документа Node и отдельными элементами Element. ","utilisation":"0.00","plan":"2000","fact":"57.00","state":0}]},{"id":364,"name":"Поздняков А. Н.","utilisation":"57.00","tasks":[{"id":3391,"name":"Работы по договору. Реализация","utilisation":"0.00","plan":"2000","fact":"57.00","state":0}]}]}',
        data:'{"department":"Отдел планирования","head_department":"Сухов Т.С.","employee":[{"id":299,"name":"Белов А. В.", "state":0,"tasks":[{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"},{"id":3391,"name":"DOM имеет интерфейс (API) который предоставляет возможность доступа к любой части документа.", "plan":"2000", "utilisation":"57.00", "fact":"57.00"},{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]},{"id":286,"name":"Маматказин И. А.","utilisation":"57.00","state":1 ,"tasks":[{"id":3391,"name":" Эта модель позволяет осуществлять манипуляции над целыми разделами документа Node и отдельными элементами Element. ", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]},{"id":364,"name":"Поздняков А. Н.","utilisation":"57.00","state":2, "tasks":[{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]},{"id":299,"name":"Белов А. В.", "state":0,"tasks":[{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"},{"id":3391,"name":"DOM имеет интерфейс (API) который предоставляет возможность доступа к любой части документа.", "plan":"2000", "utilisation":"57.00", "fact":"57.00"},{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]},{"id":286,"name":"Маматказин И. А.","utilisation":"57.00","state":1 ,"tasks":[{"id":3391,"name":" Эта модель позволяет осуществлять манипуляции над целыми разделами документа Node и отдельными элементами Element. ", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]},{"id":364,"name":"Поздняков А. Н.","utilisation":"57.00","state":2, "tasks":[{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]},{"id":299,"name":"Белов А. В.", "state":0,"tasks":[{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"},{"id":3391,"name":"DOM имеет интерфейс (API) который предоставляет возможность доступа к любой части документа.", "plan":"2000", "utilisation":"57.00", "fact":"57.00"},{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]},{"id":286,"name":"Маматказин И. А.","utilisation":"57.00","state":1 ,"tasks":[{"id":3391,"name":" Эта модель позволяет осуществлять манипуляции над целыми разделами документа Node и отдельными элементами Element. ", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]},{"id":364,"name":"Поздняков А. Н.","utilisation":"57.00","state":2, "tasks":[{"id":3391,"name":"Работы по договору. Реализация", "plan":"2000", "utilisation":"57.00", "fact":"57.00"}]}]}',
        finish:"11.02.2018",
        res_code:"0",
        source:"self",
        start:"05.02.2018",
        user_id:"286"
    };*/
    //console.log('ShowLabourIntensity answer', answer);
    var jdata = JSON.parse(answer['data']);
    modules.require(['BEMHTML', 'i-bem-dom'], (BEMHTML, bemDom) => {
    bemDom.append(bemDom.doc.find(selector), BEMHTML.apply([
        {
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
            attrs: { src: "app/dist/build.js" }
        }
    ]))});
}
