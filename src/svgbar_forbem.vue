<template>
    <svg class="svg-bar" id="{{svgid}}">
    </svg>
</template>
<script>
    'use strict';
    module.exports = {
        props: {
            svgid: {type: String},
            fact: {type: String},
            plan: {type: String},
            delta: {type: String}
        },
        data: function() {

            return {
                jdata: [{}]
            }
        },
        created: function() {
            console.log('svgid ~~~~ ', this.svgid);
            console.log('f p d ~~~~', this.fact, this.plan, this.delta);

        },
        ready: function () {

            function makeStSizedBar(s, fact, plan, add, h) {

//console.log('func^^^^^^', s, fact, plan, add, h);
                var parent = s.parent();
                var parentWith = parent.node.clientWidth;

                //console.log('parent - ', parent);
                //console.log('parWith - ', parentWith);

                var plan = Number(plan);
                var fact = Number(fact);
                //var add = 0;
                var add = Number(add);
                //var max = Number(max);

                var x = 0;
                var y = 0;
                var h = h || 30;//если высота не пришла в аргументе, то по умолчанию - 30px
                //var l = 438;
                //var l = parentWith || 250;
                var l = 454;

                var textSize;

                if(h >= 24) {
                    textSize = '14px';
                } else if (h >= 18) {
                    textSize = '12px';
                } else {
                    textSize = '10px';
                }

                var delta = plan;
                var x1 = x + l * (fact / plan);
                var x2 = x + l * Math.abs(((plan - fact) / plan));
                var x3 = x + l * ((plan - add) / plan);

                console.log('l = ', l, plan, fact, x1, x2, x3, l * (fact / delta), (plan - fact) / delta);

                if(plan >= fact) {

                    var sBar1 = s.rect(x,y,l * (fact / delta),h);
                            sBar1.attr({
                            fill: '#48AF4B',
                            opacity: 1,
                            });

                    var sBar2 = s.rect(x1,y,l * ((plan - fact) / delta),h);
                            sBar2.attr({
                            fill: '#FFC100',
                            opacity: 1,
                            });

                    if (add > 0) {
                        var sBar3 = s.rect(x2,y,l * (add / delta),h);
                        sBar3.attr({
                            fill: '#1193F5',
                            opacity: 0.5,
                        });
                    }

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

                    if (add > 0) {
                        var sBar3text = s.text(x2 + (l * (add / delta)/2) - 10, y + h * 3/4, add);
                        sBar3text.attr({
                            "class": "text",
                            fill: 'black',
                            opacity: 1,
                             "font-size": textSize,
                        });
                    }

                }
                // else if(add >= fact) {
                //
                //     var sBar1 = s.rect(x,y,l * (fact / delta),h);
                //             sBar1.attr({
                //             fill: '#48AF4B',
                //             opacity: 1,
                //             });
                //
                //     var sBar2 = s.rect(x1,y,l * ((delta - fact) / delta),h);
                //             sBar2.attr({
                //             fill: '#FFC100',
                //             opacity: 1,
                //             });
                //
                //     var sBar1text = s.text(x + (l * (fact / delta)/2) - 10, y + h * 3/4, fact);
                //         sBar1text.attr({
                //             "class": "text",
                //             fill: 'black',
                //             opacity: 1,
                //              "font-size": textSize,
                //             });
                //
                //     var sBar2text = s.text(x1 + (l * ((delta - fact) / delta)/2) - 10, y + h * 3/4, delta - fact);
                //         sBar2text.attr({
                //             "class": "text",
                //             fill: 'black',
                //             opacity: 1,
                //              "font-size": textSize,
                //             });
                //
                //         }
                else {
                        x3 = x + l * ((2*plan - fact) / plan);
                        var sBar1 = s.rect(x,y,l * (2*plan - fact) / plan,h);
                                sBar1.attr({
                                fill: '#FFC100',
                                opacity: 1,
                                });

                        var sBar2 = s.rect(x3,y,l * (fact - plan) / plan,h);
                                sBar2.attr({
                                fill: '#F6412D',
                                opacity: 1,
                                });

                        var sBar1text = s.text(x + ((l * (2*plan - fact) / plan)/2) - 10, y + h * 3/4, plan);
                            sBar1text.attr({
                                "class": "text",
                                fill: 'black',
                                opacity: 1,
                                 "font-size": textSize,
                                });

                        var sBar2text = s.text(x3 + ((l * (fact - plan) / plan)/2) - 10, y + h * 3/4, fact - plan);
                            sBar2text.attr({
                                "class": "text",
                                fill: 'black',
                                opacity: 1,
                                 "font-size": textSize,
                                });
                };
            };

            var f = Number(this.fact),
                p = Number(this.plan),
                d = Number(this.delta),
                gid = '#' + this.svgid;
            //console.log('!!!!!!!!svgbar id gid', this.svgid, gid);
            //console.log('ddddddddddddd', this.delta, d);

            var s = Snap(gid);
            makeStSizedBar(s, f, p, d, 30);


        }
    }
</script>
<style lang="sass?indentedSyntax=true" scoped>
    .svg-bar
        display: flex;
        width: 100%;
        height: 100%!important;

</style>
