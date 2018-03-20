<template>
    <svg class="svg1111111">
    </svg>
</template>
<script>
    'use strict';
    module.exports = {
        props: {
            input_fact: {type: String},
            input_plan: {type: String},
            input_data: {type: String}
        },
        data: function() {
            
            return {
                jdata: [{}]
            }
        },
        created: function () {

function makeStSizedBar(s, fact, plan, add, h) {

    var parent = s.parent();
    var parentWith = parent.node.clientWidth;

    //console.log('parent - ', parent);
    //console.log('parWith - ', parentWith);

    var plan = Number(plan);
    var fact = Number(fact);
    var add = Number(add);
    //var max = Number(max);

    var x = 100;
    var y = 200;
    var h = h || 30;//если высота не пришла в аргументе, то по умолчанию - 30px
    var l = 250;

    var textSize;

    if(h >= 24) {
        textSize = '14px';
    } else if (h >= 18) {
        textSize = '12px';
    } else {
        textSize = '10px';
    }

    var delta = plan + add;
    var x1 = x + l * (fact / delta);
    var x2 = x + l * (plan / delta);
    var x3 = x + l * (delta / fact);

    if(plan >= fact) {

        var sBar1 = s.rect(x,y,l * (fact / delta),h);
                sBar1.attr({
                fill: '48AF4B',
                opacity: 1,
                });

        var sBar2 = s.rect(x1,y,l * ((plan - fact) / delta),h);
                sBar2.attr({
                fill: 'FFC100',
                opacity: 1,
                });

        var sBar3 = s.rect(x2,y,l * (add / delta),h);
                sBar3.attr({
                fill: '1193F5',
                opacity: 0.5,
                });

        var sBar1text = s.text(x + (l * (fact / delta)/2) - 10, y + h * 3/4, fact);
            sBar1text.attr({
                "class": "text",
                fill: 'black',
                opacity: 1,
                 "font-size": textSize,
                });

        var sBar2text = s.text(x1 + (l * ((plan - fact) / delta)/2) - 10, y + h * 3/4, plan - fact);
            sBar2text.attr({
                "class": "text",
                fill: 'black',
                opacity: 1,
                 "font-size": textSize,
                });

        var sBar3text = s.text(x2 + (l * (add / delta)/2) - 10, y + h * 3/4, add);
            sBar3text.attr({
                "class": "text",
                fill: 'black',
                opacity: 1,
                 "font-size": textSize,
                });         

    } else if(delta >= fact) {

        var sBar1 = s.rect(x,y,l * (fact / delta),h);
                sBar1.attr({
                fill: '48AF4B',
                opacity: 1,
                });

        var sBar2 = s.rect(x1,y,l * ((delta - fact) / delta),h);
                sBar2.attr({
                fill: 'FFC100',
                opacity: 1,
                });

        var sBar1text = s.text(x + (l * (fact / delta)/2) - 10, y + h * 3/4, fact);
            sBar1text.attr({
                "class": "text",
                fill: 'black',
                opacity: 1,
                 "font-size": textSize,
                });

        var sBar2text = s.text(x1 + (l * ((delta - fact) / delta)/2) - 10, y + h * 3/4, delta - fact);
            sBar2text.attr({
                "class": "text",
                fill: 'black',
                opacity: 1,
                 "font-size": textSize,
                });

            } else {

            var sBar1 = s.rect(x,y,l * (delta / fact),h);
                    sBar1.attr({
                    fill: '48AF4B',
                    opacity: 1,
                    });

            var sBar2 = s.rect(x3,y,l * ((fact - delta) / fact),h);
                    sBar2.attr({
                    fill: 'F6412D',
                    opacity: 1,
                    });

            var sBar1text = s.text(x + (l * (delta / fact)/2) - 10, y + h * 3/4, fact);
                sBar1text.attr({
                    "class": "text",
                    fill: 'black',
                    opacity: 1,
                     "font-size": textSize,
                    });

            var sBar2text = s.text(x3 + (l * ((fact - delta) / fact)/2) - 10, y + h * 3/4, fact - delta);
                sBar2text.attr({
                    "class": "text",
                    fill: 'black',
                    opacity: 1,
                     "font-size": textSize,
                    });
    };
};



            function makeStBar(fact, plan, add, s) {
                var fact = Number(fact)
                  , plan = Number(plan)
                  , add = Number(add)
                  ;

                if (plan == 0) {
                    return;
                };

                var x = 0;
                var y = 0;
                var h = 30;
                var l = 450;

                var delta = plan + add;
                var x1 = x + l * (fact / delta);
                var x2 = x + l * (plan / delta);
                var x3 = x + l * (delta / fact);

                if(plan >= fact) {

                    var sBar1 = s.rect(x,y,l * (fact / delta),h);
                            sBar1.attr({
                            fill: '48AF4B',
                            opacity: 1,
                            });

                    var sBar2 = s.rect(x1,y,l * ((plan - fact) / delta),h);
                            sBar2.attr({
                            fill: 'FFC100',
                            opacity: 1,
                            });

                    var sBar3 = s.rect(x2,y,l * (add / delta),h);
                            sBar3.attr({
                            fill: '1193F5',
                            opacity: 0.5,
                            });

                    var sBar1text = s.text(x + 5, y + 22, fact);
                        sBar1text.attr({
                            "class": "text",
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });

                    var sBar2text = s.text(x1 + 5, y + 22, plan - fact);
                        sBar2text.attr({
                            "class": "text",
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });

                    var sBar3text = s.text(x2 + 5, y + 22, add);
                        sBar3text.attr({
                            "class": "text",
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });         

                } else if(delta >= fact) {

                    var sBar1 = s.rect(x,y,l * (fact / delta),h);
                            sBar1.attr({
                            fill: '48AF4B',
                            opacity: 1,
                            });

                    var sBar2 = s.rect(x1,y,l * ((delta - fact) / delta),h);
                            sBar2.attr({
                            fill: 'FFC100',
                            opacity: 1,
                            });

                    var sBar1text = s.text(x + 5, y + 22, fact);
                        sBar1text.attr({
                            "class": "text",
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });

                    var sBar2text = s.text(x1 + 5, y + 22, delta - fact);
                        sBar2text.attr({
                            "class": "text",
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });

                        } else {

                        var sBar1 = s.rect(x,y,l * (delta / fact),h);
                                sBar1.attr({
                                fill: '48AF4B',
                                opacity: 1,
                                });

                        var sBar2 = s.rect(x3,y,l * ((fact - delta) / fact),h);
                                sBar2.attr({
                                fill: 'F6412D',
                                opacity: 1,
                                });

                        var sBar1text = s.text(x + 5, y + 22, fact);
                            sBar1text.attr({
                                "class": "text",
                                fill: 'black',
                                opacity: 1,
                                 "font-size": "20px",
                                });

                        var sBar2text = s.text(x3 + 5, y + 22, fact - delta);
                            sBar2text.attr({
                                "class": "text",
                                fill: 'black',
                                opacity: 1,
                                 "font-size": "20px",
                                });
                };



/*            	var x = 0;
            	var y = 0;
            	var h = 30;
            	var l = 450;

            	var delta = plan + add;
            	var x1 = x + l * (fact / delta);
            	var x2 = x + l * (plan / delta);
            	var x3 = x + l * (delta / fact);

            	if(plan >= fact) {

            		var sBar1 = s.rect(x,y,l * (fact / delta),h);
            				sBar1.attr({
            				fill: '#7FD5B1',
            				opacity: 1,
            				});

            		var sBar2 = s.rect(x1,y,l * ((plan - fact) / delta),h);
            				sBar2.attr({    
            				fill: '#E07D96',
            				opacity: 1,
            				});

            		var sBar3 = s.rect(x2,y,l * (add / delta),h);
            				sBar3.attr({
            				fill: '#1193F5',
            				opacity: 0.5,
            				});

            		var sBar1text = s.text(x + 5, y + 22, fact);
            			sBar1text.attr({
            				"class": "text",
            				fill: 'black',
            				opacity: 1,
            				 "font-size": "20px",
            				});

            		var sBar2text = s.text(x1 + 5, y + 22, plan - fact);
            			sBar2text.attr({
            				"class": "text",
            				fill: 'black',
            				opacity: 1,
            				 "font-size": "20px",
            				});

            		var sBar3text = s.text(x2 + 5, y + 22, add);
            			sBar3text.attr({
            				"class": "text",
            				fill: 'black',
            				opacity: 1,
            				 "font-size": "20px",
            				});

            	} else if(delta >= fact) {

            		var sBar1 = s.rect(x,y,l * (fact / delta),h);
            				sBar1.attr({
            				fill: '#7FD5B1',
            				opacity: 1,
            				});

            		var sBar2 = s.rect(x1,y,l * ((delta - fact) / delta),h);
            				sBar2.attr({
            				fill: '#E07D96',
            				opacity: 1,
            				});

            		var sBar1text = s.text(x + 5, y + 22, fact);
            			sBar1text.attr({
            				"class": "text",
            				fill: 'black',
            				opacity: 1,
            				 "font-size": "20px",
            				});

            		var sBar2text = s.text(x1 + 5, y + 22, delta - fact);
            			sBar2text.attr({
            				"class": "text",
            				fill: 'black',
            				opacity: 1,
            				 "font-size": "20px",
            				});

            			} else {
                            
            			var sBar1 = s.rect(x,y,l * (delta / fact),h);
            					sBar1.attr({
            					fill: '#7FD5B1',
            					opacity: 1,
            					});

            			var sBar2 = s.rect(x3,y,l * ((fact - delta) / fact),h);
            					sBar2.attr({
            					fill: '#F6412D',
            					opacity: 1,
            					});

            			var sBar1text = s.text(x + 5, y + 22, fact);
            				sBar1text.attr({
            					"class": "text",
            					fill: 'black',
            					opacity: 1,
            					 "font-size": "20px",
            					});

            			var sBar2text = s.text(x3 + 5, y + 22, fact - delta);
            				sBar2text.attr({
            					"class": "text",
            					fill: 'black',
            					opacity: 1,
            					 "font-size": "20px",
            					});
            	};*/
            };
            //вертикальный бар 
            function makeVStBar(fact, plan, add, s) {

                var fact = Number(fact)
                  , plan = Number(plan)
                  , add = Number(add)
                  ;

                if (plan == 0) {
                    return
                };
                var x = 0;
            	var y = 220;
            	var h = 60;
            	var l = 200;
            	var transCenter = "r-90, " + x + ", " + y;

            	var delta = plan + add;
            	var x1 = x + l * (fact / delta);
            	var x2 = x + l * (plan / delta);
            	var x3 = x + l * (delta / fact);

            	if(plan >= fact) {

            		var sBar1 = s.rect(x,y,l * (fact / delta),h);
    				sBar1.attr({
        				fill: '#7FD5B1',
        				opacity: 1,
    				});

            		var sBar2 = s.rect(x1,y,l * ((plan - fact) / delta),h);
    				sBar2.attr({
        				fill: '#E07D96',
        				opacity: 1,
    				});

            		var sBar3 = s.rect(x2,y,l * (add / delta),h);
    				sBar3.attr({
        				fill: '#1193F5',
        				opacity: 0.5,
    				});

            		var group = s.g(sBar1, sBar2, sBar3);
    				group.attr({
    					transform: transCenter,
    				});

            		var sBar1text = s.text(x + 15, y - 5, fact);
        			sBar1text.attr({
        				fill: 'black',
        				opacity: 1,
        				 "font-size": "20px",
    				});

            		var sBar2text = s.text(x + 15, y - (l * (fact / delta)) - 5, plan - fact);
        			sBar2text.attr({
        				fill: 'black',
        				opacity: 1,
        				 "font-size": "20px",
    				});

            		var sBar3text = s.text(x + 15, y - (x2 - x) - 5, add);
        			sBar3text.attr({
        				fill: 'black',
        				opacity: 1,
        				 "font-size": "20px",
    				});

            	} else if(delta >= fact) {

            		var sBar1 = s.rect(x,y,l * (fact / delta),h);
    				sBar1.attr({
        				fill: '#7FD5B1',
        				opacity: 1,
    				});

            		var sBar2 = s.rect(x1,y,l * ((delta - fact) / delta),h);
    				sBar2.attr({
        				fill: '#E07D96',
        				opacity: 1,
    				});

            		var group = s.g(sBar1, sBar2);
    				group.attr({
    					transform: transCenter,
    				});

            		var sBar1text = s.text(x + 15, y - 5, fact);
        			sBar1text.attr({
        				"class": "text",
        				fill: 'black',
        				opacity: 1,
        				 "font-size": "20px",
    				});

            		var sBar2text = s.text(x + 15, y - (l * (fact / delta)) - 5, add);
        			sBar2text.attr({
        				"class": "text",
        				fill: 'black',
        				opacity: 1,
        				 "font-size": "20px",
    				});

    			} else {

        			var sBar1 = s.rect(x,y,l * (delta / fact),h);
					sBar1.attr({
    					fill: '#7FD5B1',
    					opacity: 1,
					});

        			var sBar2 = s.rect(x3,y,l * ((fact - delta) / fact),h);
					sBar2.attr({
    					fill: '#F6412D',
    					opacity: 1,
					});

        			var group = s.g(sBar1, sBar2);
    				group.attr({
    					transform: transCenter,
    				});

        			var sBar1text = s.text(x + 15, y - 5, fact);
    				sBar1text.attr({
    					"class": "text",
    					fill: 'black',
    					opacity: 1,
    					 "font-size": "20px",
					});

        			var sBar2text = s.text(x + 15, y - (x3 - x) - 5, fact - plan);
    				sBar2text.attr({
    					"class": "text",
    					fill: 'black',
    					opacity: 1,
    					 "font-size": "20px",
					});
            	};
            };
            //горизонтальный серый бар с одним значением
            function makeStBarUn(fact, max) {
                var fact = Number(fact);
                var max = Number(max);

                console.log(fact / max);

                var x = 100;
                var y = 200;
                var h = 30;
                var l = 400 * (fact / max);
                console.log(l);
                if(fact >= 0) {

                    var sBar1 = s.rect(x,y,l,h);
                            sBar1.attr({
                            fill: '48AF4B',
                            opacity: 1,
                            });

                    var sBar1text = s.text(x + 5, y + 22, fact);
                        sBar1text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });     

                } else {

                    var sBar1 = s.rect(x,y,-l,h);
                            sBar1.attr({
                            fill: 'F6412D',
                            opacity: 1,
                            });

                    var sBar1text = s.text(x + 5, y + 22, fact);
                        sBar1text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });
                };
            };
            $(document).ready(function(){

                if(document.querySelector('.svg1111111')){
                    $('.svg1111111').each(function() {
                        var s = Snap(this),
                            f = this.getAttribute('fact'),
                            p = this.getAttribute('plan'),
                            d = this.getAttribute('delta'),
                            t = this.getAttribute('type');

                        //console.log('this^^^  ',this);

                        if (t == 'g') {
                            makeStBar(f, p, d, s);
                            //makeStSizedBar(s, f, p, d);
                            //makeStSizedBar(s, 1560, 2800, 800, 16);
                        }
                        else {
                           makeVStBar(f, p, d, s);
                        }

                    })
                }
            });
        }
    }
</script>
<style lang="sass?indentedSyntax=true" scoped>
    .svg1111111
        display: flex;
        width: 100%;
        height: 100%!important;

</style>
