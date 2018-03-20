'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-button-content', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    var elem = this.domElem, here = this;
                    initCss(elem, here);
                    this._domEvents().on('click', this._onClick);
                }
            }
        },
    
        _onClick: function() {

//            var check = this.domElem[0].getAttribute('id'), msg, department_id, unit_id, id, start, finish;
//            if (check == 'buttonReportUtilisationShow'){
//                department_id = $('#reportUtilisationShow').find('input[name="f_department_id"]').val();
//                start = $('#reportUtilisationShow').find('input[name="start"]').val();
//                finish = $('#reportUtilisationShow').find('input[name="end"]').val();
//                if(department_id && unit_id != 0){
//                    id = unit_id; 
//                } else {
//                    id = department_id; ;
//                }
                
            //}
            var msg = {
                action_name: "ReportDepUtilisationRun",
                selector: "#bodyReportUtilisationShow",
                department_id: $('input[name="f_department_id"]').val(),
                date_start: $('input[name="start"]').val(),
                date_finish: $('input[name="end"]').val(), 
                builder: "ReportDepUtilisationRun"
            }
            //console.log(msg);
            WSSend(msg);
        }
    }));
});