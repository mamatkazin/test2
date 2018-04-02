<template>
    <svg class="svg-bar" v-bind:id="svgid">
    </svg>
</template>
<script>
    'use strict';
    module.exports = {
        props: {
            svgid: {type: String},
            fact: {type: String},
            plan: {type: String},
            max: {type: String},
            quot: {type: String}
        },
        data: function() {

            return {
                jdata: [{}]
            }
        },
        created: function() {
            console.log('svgid ~~~~ ', this.svgid);
            console.log('q f p d ~~~~', this.quot, this.fact, this.plan, this.max);

        },
        mounted: function () {


            function makeVStSizedBarUn(s, quot, plan, fact, max, h) {

                var quot = Number(quot);
                var plan = Number(plan);
                var fact = Number(fact);
                var max = Number(max);

                var parent = s.parent();
                var parentHeight = parent.node.clientHeight;

                var textSize;

                if(h >= 24) {
                    textSize = '14px';
                } else if (h >= 18) {
                    textSize = '12px';
                } else {
                    textSize = '10px';
                }

                var x = 0;
                var y = parentHeight;
                var h = h || 60;//если высота не пришла в аргументе, то по умолчанию - 30px
                var l = parentHeight / max * plan;
                var transCenter = "r-90, " + x + ", " + y;

                var x1 = x + l * (fact / plan);

                if(plan >= fact) {

                    var sBar1 = s.rect(x,y,l * (fact / plan),h);
                            sBar1.attr({
                            fill: '#48AF4B',
                            opacity: 1,
                            });

                    var sBar2 = s.rect(x1,y,l * ((plan - fact) / plan),h);
                            sBar2.attr({
                            fill: '#FFC100',
                            opacity: 1,
                            });

                    var group = s.g(sBar1, sBar2);
                            group.attr({
                                transform: transCenter,
                            });

                    var sBar1text = s.text(27, 182, fact);
                        sBar1text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });

                    var sBar2text = s.text(27, y - (l * (fact / plan)) - (l * ((plan - fact) / plan)/2) + 10, plan - fact);
                        sBar2text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": "20px",
                            });

                        } else {

                        var sBar1 = s.rect(x,y,l ,h);
                                sBar1.attr({
                                fill: '#48AF4B',
                                opacity: 1,
                                transform: transCenter,
                                });

                        var sBar1text = s.text(x + (h/2) - 5, y - l/2 + 10, fact);
                            sBar1text.attr({
                                fill: 'black',
                                opacity: 1,
                                 "font-size": "20px",
                                });
                };
            };

/*
            function makeVStBar(s, fact, plan, add) {
console.log('func^^^^^^', s, fact, plan, add);

                var parent = s.parent();
                var parentHeight = parent.node.clientHeight;

                var x = 0;
                var y = parentHeight;
                var h = 70;
                var l = parentHeight;
                var transCenter = "r-90, " + x + ", " + y;

                var delta = plan + add;
                var x1 = x + l * (fact / delta);
                var x2 = x + l * (plan / delta);
                var x3 = x + l * (delta / fact);

                if(plan >= fact) {

                    var sBar1 = s.rect(x,y,l * (fact / delta),h);
                            sBar1.attr({
                            fill: '#48AF4B',
                            opacity: 1,
                            //transform: "r-90, 100, 200",
                            });

                    var sBar2 = s.rect(x1,y,l * ((plan - fact) / delta),h);
                            sBar2.attr({
                            fill: '#FFC100',
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
                             "font-size": "16px",
                            });

                    var sBar2text = s.text(x + 15, y - (l * (fact / delta)) - 5, plan - fact);
                        sBar2text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": "16px",
                            });

                    var sBar3text = s.text(x + 15, y - (x2 - x) - 5, add);
                        sBar3text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": "16px",
                            });

                } else if(delta >= fact) {

                    var sBar1 = s.rect(x,y,l * (fact / delta),h);
                            sBar1.attr({
                            fill: '#48AF4B',
                            opacity: 1,
                            });

                    var sBar2 = s.rect(x1,y,l * ((delta - fact) / delta),h);
                            sBar2.attr({
                            fill: '#FFC100',
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
                             "font-size": "16px",
                            });

                    var sBar2text = s.text(x + 15, y - (l * (fact / delta)) - 5, add);
                        sBar2text.attr({
                            "class": "text",
                            fill: 'black',
                            opacity: 1,
                             "font-size": "16px",
                            });

                        } else {

                        var sBar1 = s.rect(x,y,l * (delta / fact),h);
                                sBar1.attr({
                                fill: '#48AF4B',
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
                                 "font-size": "16px",
                                });

                        var sBar2text = s.text(x + 15, y - (x3 - x) - 5, fact - plan);
                            sBar2text.attr({
                                "class": "text",
                                fill: 'black',
                                opacity: 1,
                                 "font-size": "16px",
                                });
                };
            };
*/

            var f = Number(this.fact),
                p = Number(this.plan),
                max = Number(this.max),
                gid = '#' + this.svgid;
            //console.log('!!!!!!!!svgbar id gid', this.svgid, gid);
            //console.log('ddddddddddddd', this.delta, d);

            var s = Snap(gid);

            //makeVStBar(s, f, p, d);

            makeVStSizedBarUn(s, 1, p, f, max, 180);
            //function makeVStSizedBarUn(s, quot, plan, fact, max, h) {

            //makeVStSizedBarUn(s, 1, 7, 5, 10, 120)

        }
    }
</script>
<style lang="sass?indentedSyntax=true" scoped>
    .svg-bar
        display: flex;
        width: 100%;
        height: 100%!important;

</style>
