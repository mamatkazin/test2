'use strict';
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
modules.define('c-input-integer-s', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    if ($.isEmptyObject(this.params.width)) {
                        this.domElem.css('width', this.params.width + 'px');
                    }
                    sum();
                    this._domEvents().on('change', this._onChange);
                    this._domEvents().on('click', this._onClick);

                }
            }
        },

        _onClick: function() {
            if(this.domElem[0].value == '0') {
                this.domElem[0].value = '';
            }
        },

        _onChange: function() {
            var value = this.domElem[0].value = this.domElem[0].value.replace(/[^0-9]/g, '');

            checkInput();

            if(isNumeric(parseInt(value))) {
                sum();
            }

            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

        }

    }));

    function sum() {
        var summa = 0;
        $('#containsAppointExecutorsCost tr').each(function () {
            $('input[type="number"]', this).each(function () {
                var count = parseInt($(this).val());
                if(count) {
                    summa += count;
                }
            })
        });
        $('#appointExecutorsCost')[0].innerHTML = summa;
    }

    function checkInput() {

        var arr = [];
        $('#containsAppointExecutorsCost input').each(function() {
            arr.push(this);
        });

        for (var i = 0; i < arr.length; i++) {
            var count = arr[i];
            if(count.value == '') {
                $('#changeButton').prop('disabled', true);
                         break;
            } else {
                $('#changeButton').prop('disabled', false);
            };
        }
    };
});

