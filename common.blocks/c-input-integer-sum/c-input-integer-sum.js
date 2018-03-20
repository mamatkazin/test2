'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-input-integer-sum', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('change', this._onChange);
                    this._domEvents().on('blur', this._onBlur);

                    sum_plan_hour();

                    function sum_plan_hour() {
                        var sum = 0;

                        $('.c-laboriousness input[name^="h_"]').each(function(){
                            sum += parseInt($(this).val());
                        })

                        $('#to_assess_the_work_table input[type="text"]').each(function() {
                            if($(this).hasClass('numberInput')){
                                sum +=  parseInt(this.value);
                            }

                        })
                        if(document.getElementById('to_assess_the_work_complexity')) {
                            document.getElementById('to_assess_the_work_complexity').innerHTML = sum;
                        }

                    }
                }
            }
        },

        _onChange: function() {
            var sum = 0;
            $('#to_assess_the_work_table input[type="text"]').each(function(){
                if($(this).hasClass('numberInput')){
                    sum +=  parseInt(this.value.replace(/[^0-9]/g, ''));
                }
            });

            if($('#to_assess_the_work_complexity')) {
                document.getElementById('to_assess_the_work_complexity').innerHTML = sum;
            };



        },

        _onBlur: function() {

            var value = this.domElem[0].value = this.domElem[0].value.replace(/[^0-9]/g, '');
            var summa = 0;
            if(isNumeric(parseInt(value))) {
                $('.c-laboriousness input[name^="h_"]').each(function(){
                    summa = summa + parseInt($(this).val());
                })

                if($('#projectEditCost')) {
                    //$('#projectEditCost')[0].innerHTML = summa;
                }

            }
            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }
        }


    }));


});