<template>
    <svg class="svg-time-chart" id="{{svgid}}">
    </svg>
</template>
<script>
    'use strict';
    module.exports = {
        props: {
            svgid: {type: String},
            person: {type: String},
            time: {type: String},
            max_time: {type: String},
        },
        data: function() {

            return {
                jdata: [{}]
            }
        },
        created: function() {
            console.log('person svgid ##### ', this.time, this.max_time);

        },
        ready: function () {

            function makeGreySizedBarUn(s, fact, max, h) {

                //console.log('---^ fact, max ',fact, max);

                var abs = Math.abs(fact);

                var fact = Number(fact);
                var max = Number(max);

                var parent = s.parent();
                //var parentWith = parent.node.clientWidth;
                var parentWith = 270;
                //console.log('!!!parentWith!!!   ', parentWith);

                var x = 0;
                var y = 0;
                var h = h || 8;//если высота не пришла в аргументе, то по умолчанию - 30px
                var l = parentWith * (abs / max);

                var textSize;

                if(h >= 24) {
                    textSize = '14px';
                } else if (h >= 18) {
                    textSize = '12px';
                } else {
                    textSize = '10px';
                };

                if(fact >= 0) {

                    var sBar1 = s.rect(x,y,l,h);
                            sBar1.attr({
                            fill: '#EBEBEB',
                            opacity: 1,
                            });

                    var sBar1text = s.text(x + l, y + h, fact.toString() + " ч.");
                        sBar1text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": textSize,
                            });

                } else {

                    var sBar1 = s.rect(x,y,l,h);
                            sBar1.attr({
                            fill: '#F6412D',
                            opacity: 1,
                            });

                    var sBar1text = s.text(x + l, y + h, fact.toString() + " ч.");
                        sBar1text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": textSize,
                            });
                };
            };

            var gt = Number(this.time),
                gmt = Number(this.max_time),
                gid = '#' + this.svgid;
            //console.log('time id gid', this.svgid, gid);

            var s = Snap(gid);
            makeGreySizedBarUn(s, gt, gmt);
        }
    }
</script>
<style lang="sass?indentedSyntax=true" scoped>
    .svg-time-chart
        display: flex;
        width: 100%;
        height: 100%!important;

</style>
