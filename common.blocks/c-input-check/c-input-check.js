'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-input-check', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('change', this._onChange);
                    this._domEvents().on('click', this._onClick);
                }
            }
        },

        _onClick: function() {
        },
    
        _onChange: function() {
            //для проверки полей с датами
            var start = $('#reportUtilisationShow').find('input[name="start"]').val();
            var finish = $('#reportUtilisationShow').find('input[name="end"]').val();
            var department_id = $('#reportUtilisationShow').find('input[name="f_department_id"]').val();

            if(department_id != '0' && start != '' && finish != ''){
                $('#buttonReportUtilisationShow').prop('disabled', false);
                $('#buttonExcelReportUtilisationShow').prop('disabled', false);
                $('#buttonExcelReportUtilisationShow').removeClass('opacityOff');
            } else {
                $('#buttonReportUtilisationShow').attr('disabled', 'disabled');
                $('#buttonExcelReportUtilisationShow').attr('disabled', 'disabled');
                $('#buttonExcelReportUtilisationShow').addClass('opacityOff');
            }
        }
    }));
});