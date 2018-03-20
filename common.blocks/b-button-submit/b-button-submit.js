'use strict'
modules.require(['i-bem-dom__init', 'jquery'], function(init, $) {
    $(function() {
        init();
    });  
});
 modules.define('b-button-submit', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this._domEvents().on('click', this._onClick);

                    // setTimeout(function searchFullInput() {
                    //     $('.c-laboriousness tr').each(function(i, val) {

                    //         $('td',this).each(function(i, val){

                    //              $('input[type="checkbox"]', this).each(function(i, val) {
                    //                  if(this.checked) {
                    //                     console.log(this.checked);
                    //                  } else {
                    //                      $('#buttonCreatePrEd').attr('disabled', 'disabled');
                    //                  }
                    //                  //console.log(this)
                    //             //     if(i == 2) {
                    //             //         var a  = $(val).next().val();
                    //             //         console.log('input a', a);
                    //             //     }
                    //             //
                    //             //
                    //             //     if(this.checked ? 1 : '') {
                    //             //         //console.log('true');
                    //             //      } //else {
                    //             //     //     console.log('false');
                    //             //     // }
                    //             })
                    //             // $('input[type="text"]', this).each(function(i, val) {
                    //             //     if(this.checked) {
                    //             //
                    //             //     }
                    //             //     //console.log(this)
                    //             // })
                    //         });
                    //     });
                    //     //         $('#buttonCreatePrEd').attr('disabled', 'disabled');
                    // }, 1000);
                }
            }
        },
    
        _onClick: function() {
            var error = 0
            
            $(this.params.source + ' .form-control').each(function() {
                $(this).css('border', '#ccc 1px solid');// устанавливаем рамку обычного цвета
                
                if(!$(this).val()){
                    $(this).css('border', '#d9534f 1px solid');
                    error=1;
                }
            });
            
            $(this.params.source + ' input[name$="_id"]').each(function() {
                var parent = $(this).closest('.b-combobox').find('button');
                
                $(parent).css('border', '#ccc 1px solid');// устанавливаем рамку обычного цвета

                if($(this).val() == '0'){
                    $(parent).css('border', '#d9534f 1px solid');
                    error=1;
                }
            });
            
            if (error != 0) {
                ShowError(error);
            } else {
                var msg = this.params;
                
                $(this.params.source + ' .t-need-save').each(function() {
                    msg[this.getAttribute('name')] = $(this).val();
                });

                WSSend(msg);
                
                $(this.params.source).modal('hide');
                ShowSnipper();
            }
            
        }
    }));
});