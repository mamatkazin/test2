<template>
    <svg class="svg-chart">
    </svg>
</template>
<script>
    'use strict';
    module.exports = {
        props: {
            graf_data: [{}],
//            input_fact: {type: String},
//            input_plan: {type: String},
//            input_data: {type: String}
        },
        data: function() {

            return {
                jdata: [{}]
            }
        },
        created: function () {


            function makeTSheetChartPer(json, s) {
                //console.log('Я!!!!!!!!!!!!!',json)
                var json = json;
                //var timesheets = JSON.parse(json);
                var timesheets = json;
                console.log(timesheets);

                var max = 0;//в цикле определяем максимальное значение (для нормирования оси Y)
                for(var i = 0; i < timesheets.length; i++) {
                    var week = timesheets[i];
                    var value = week.ours;
                    if(value > max){
                        max = value
                    };
                }
                console.log(max);

                //рисую оси координат
                var x0 = 25;
                var y0 = 135;
                var xLine = s.line(x0, y0, x0 + timesheets.length*70, y0);
                    xLine.attr({
                        //fill: 'black',
                        stroke: 'black',
                        //opacity: 1,
                        strokeWidth: 1,
                    })

                var yLine = s.line(x0, y0, x0, y0 - 130);
                    yLine.attr({
                        //fill: 'black',
                        stroke: 'black',
                        //opacity: 1,
                        strokeWidth: 1,
                    })

                var stepX = 0;//задаю шаг отрезков на оси
                var stepY = 0;//задаю шаг отрезков на оси

                //создаю точки на осях и раздаю подписи
                for(var i = 0; i < timesheets.length-1; i++) {
                    var dot = s.circle(x0 + stepX, y0, 2);
                        dot.attr({
                            fill: 'black',
                            //stroke: 'black',
                            //strokeWidth: 1,
                        });

                    var text = s.text(x0 + stepX, y0 + 15, timesheets[i].week);
                        text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": "10px",
                        });
                    stepX += 75;
                };
                stepX = 75;

                for(var i = 0; i < 5; i++) {
                    var dot = s.circle(x0, y0 - stepY, 2);
                        dot.attr({
                            fill: 'black',
                            //stroke: 'black',
                            //strokeWidth: 1,
                        });

                    var text = s.text(x0 - 25, y0 - stepY + 15, Math.round(max / 4, 0) * i);
                        text.attr({
                            fill: 'black',
                            opacity: 1,
                             "font-size": "10px",
                        });
                    stepY += 32;
                };

                //рисую график
                var startValue = timesheets[0].ours / max * 130;//нормализация аналогичная х/100*400 (диапазон значений оси Y = 200)
                console.log(startValue);

                for(var i = 1; i < timesheets.length-1; i++) {
                    var normValue = timesheets[i].ours /  max * 130;
                    var line = s.line(x0 + (stepX * (i - 1)), y0 - startValue, x0 + stepX * i, y0 - normValue);//цикл начинается с 1 т.к. определяю конечную точку отрезка. Надо что-то придумать...
                        line.attr({
                            stroke: 'black',
                            strokeWidth: 2.5,
                            //opacity: .5,
                        });

                    var barDotColor = 'green';

                    var barDot = s.circle(x0 + stepX * i, y0 - normValue, 2);
                        barDot.attr({
                            fill: barDotColor,
                            stroke: '999A9C',
                            strokeWidth: 2.5,
                        });

                    startValue = normValue;
                };
            }

            //console.log('graf graf_data',this.graf_data);
            var jsonTimesheets = this.graf_data;

            $(document).ready(function(){

                if(document.querySelector('.svg-chart')){
                    $('.svg-chart').each(function() {

                        var s = Snap(this);
                            //jsonTimesheets = '[{"week":0,"ours":45}, {"week":1,"ours":210}, {"week":2,"ours":320}, {"week":3,"ours":0}, {"week":4,"ours":75}, {"week":5,"ours":120}, {"week":6,"ours":25}, {"week":7,"ours":0}, {"week":8,"ours":600}]';

                        //console.log('jsonTimesheets  -----', jsonTimesheets);

                        makeTSheetChartPer(jsonTimesheets, s);
                        //makeTSheetChartPer(this.graf_data, s);

                    })
                }
            });
        }
    }
</script>
<style lang="sass?indentedSyntax=true" scoped>
    .svg-chart
        display: flex;
        width: 100%;
        height: 100%!important;

</style>
