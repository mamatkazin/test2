'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-getlist-child-unit', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {

                    this._domEvents().on('click', this._onClick);

                }
            }
        },

        _onClick: function() {
//            var msg = {
//                    action_name: "CommonDepartmentsList",
//                    selector: "#commonDepartmentList",
//                    department_id: this.domElem.attr('data-id'),
//                    user_id: $('input[name="user_id"]').val(),
//                    builder: "CommonDepartmentsList"
//                };

            var department_id = this.domElem.attr('data-id');
            var start = $('#reportUtilisationShow').find('input[name="start"]').val();
            var finish = $('#reportUtilisationShow').find('input[name="end"]').val();
            
            if(department_id != '0' && start != '' && finish != '') {
                $('#buttonReportUtilisationShow').prop('disabled', false);
                $('#buttonExcelReportUtilisationShow').prop('disabled', false);
                $('#buttonExcelReportUtilisationShow').removeClass('opacityOff');
            } else {
                $('#buttonReportUtilisationShow').attr('disabled', 'disabled');
                $('#buttonExcelReportUtilisationShow').attr('disabled', 'disabled');
                $('#buttonExcelReportUtilisationShow').addClass('opacityOff');
            }

            //WSSend(msg);

            

        },

    }));
});