<template>
<div class="project-cards">
    <div class="go-back-header">
        <span class="go-back-header__icon" @click="GoBack">
            <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-left fa-w-14" style="font-size: 16px;"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" class=""></path></svg>
        </span>
        <span class="go-back-header__text">
            {{jdata.Project.name}}
        </span>
<!--         {{//input_data}}
 -->    </div>
    <div class="header">
        <div class="header__left">
            <div class="header__title">{{jdata.Project.employee}}</div>
        </div>
        <div class="header__some">{{summMask(jdata.Project.price)}} руб</div>
    </div>

    <div class="cards">
        <div class="card">
            <div class="bar-period">
                <div class="bar-date-period">
                    <div class="bar-date-period__from">{{jdata.Project.date_start}}</div>
                    <div class="bar-date-period__to">{{jdata.Project.date_finish}}</div>
                </div>
                <div class="bar-period__bar-block">
                    <svgbar v-bind:svgid="'bar-period'" v-bind:fact="jdata.Project.total_stage.fact" v-bind:plan="jdata.Project.total_stage.plan" v-bind:delta="jdata.Project.total_stage.delta"></svgbar>
                </div>
            </div>
            <dl class="depart-charts" v-for="(index, item) in jdata.Project.stage.items">
                <dt class="depart-charts__header">{{item.name}}</dt>
                <dd class="depart-charts__bar">

                    <div class="depart-charts__bar-block">
                        <svgbar v-bind:svgid="'svg'+index.toString()" v-bind:fact="item.fact" v-bind:plan="item.plan" v-bind:delta="item.delta" v-bind:h=19 v-bind:l=314></svgbar>
                    </div>
                </dd>
            </dl>
        </div>
        <div class="card">
            <div class="card_header">
                Корректирующие действия
            </div>
            <dl class="corr-actions" v-for="item in jdata.fa_list">

                <dt class="corr-actions__date">{{item.date}}</dt>
                <dd class="corr-actions__text">{{item.name}}</dd>
            </dl>
        </div>
        <div class="card">
            <div class="card_header">
                Отделы
            </div>
            <div class="all-depart-charts">

                <div class="bar-period" v-for="(i, item) in jdata.hd_fact" v-bind:key="item.id">
                    <div class="depart_name">
                        {{item.name}}
                    </div>
                    <div class="bar-period__bar-block">
                        <svgbar v-bind:svgid="'bar-period' + counter(i)" v-bind:fact="item.fact" v-bind:plan="item.plan" v-bind:delta="item.delta"></svgbar>
                    </div>
                </div>

            </div>
        </div>
        <div class="card">
            <div class="card_header">
                Списания за период
                <svg aria-hidden="true" data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-calendar fa-w-14" style="font-size: 16px;"><path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z" class=""></path></svg>
            </div>
            <div class="">{{jdata.Timesheets.period.date_from}} - {{jdata.Timesheets.period.date_to}} </div>
            <div class="chart">
                <chart v-bind:graf_data="graf_data"></chart>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    'use strict';
    module.exports = {
        props: {
            input_data: {
                type: String
            }
        },
        data: function() {
            return {
                jdata: [{}],
                graf_data: [{}]
            }
        },
        created: function () {
            this.jdata = JSON.parse(this.input_data);

            // this.jdata.Timesheets = [{}],
            // this.jdata.Timesheets.phases = [{"week":0,"ours":45}, {"week":1,"ours":210}, {"week":2,"ours":320}, {"week":3,"ours":0}, {"week":4,"ours":75}, {"week":5,"ours":120}, {"week":6,"ours":25}, {"week":7,"ours":0}, {"week":8,"ours":600}];
            // //console.log('this.jdata.Timesheets.phases ',this.jdata.Timesheets.phases);

            this.graf_data = this.jdata.project_utilisation;
            //console.log('this.graf_data ',this.graf_data);

            // this.jdata.Timesheets.period = {
            //     "date_from": "01.01.1900",
            //     "date_to": "31.12.1900"}

            console.log('**********this.jdata', this.jdata);

        },
        methods: {

            counter: function(i) {
                //console.log('iiiiiiiiiiiii: ',i);
                return i;
            },
            GoBack: function(){
                var msg = {
                   action_name: "dashboard_show",
                   employee_id: this.jdata.Project.employee_id
                };
                WSSend(msg);
            },

            summMask: function(sum) {
                //console.log(summa_mask(sum));
                return summa_mask(sum);
            },

        }
    }
</script>
<style lang="sass?indentedSyntax=true" scoped>
    dl
        margin-bottom: 0px;

    .chart
        width: 650px;

    .project-cards
        width: 1068px;
        margin: 0 auto;
        overflow: auto;

    .go-back-header
        font-size: 18px;
        margin: 0 0 32px;
        padding: 16px 16px 16px 24px;
        position: relative;

    .go-back-header__icon
        position: absolute;
        top: 16px;
        left: 0;

    .cards
        width: 100%;
        padding: 0 16px;
        background-color: #fff;
        overflow: hidden;

    .card
        box-sizing: border-box;
        height: 250px;
        width: 502px;
        padding: 16px 0 16px 16px;
        border: 1px solid #EBEBEB;
        border-radius: 3px;
        background-color: #FFFFFF;
        box-shadow: 0 4px 10px 0 rgba(95,95,95,0.1);
        float: left;
        margin: 0 32px 32px 0;
        overflow: auto;

        &:nth-child(2n)
            margin-right: 0;

    .header
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 32px 24px;
        background-color: #EBEBEB;
        margin-bottom: 32px;

        &__left
            display: flex;
            flex-direction: row;

        &__title
            min-height: 31px;
            w---idth: 101px;
            color: #333333;
            f--ont-family: Roboto;
            font-size: 16px;
            font-weight: 500;
            line-height: 31px;

        &__title-number
            font-family: Roboto;
            font-size: 24px;
            font-weight: 500;
            margin-left: 16px;

        &__some
            height: 24px;
            min-width: 160px;
            text-align: right;
            font-weight: 500;
            font-size: 16px;
            color: #333333;

    .card_header
        font-size: 16px;
        padding: 0;
        height: 40px;

    .wrap
        display: block;
        height: 178px;
        overflow-y: auto;

    .body
        display: flex;
        flex-direction: column;

        &__row
            display: flex;
            flex-direction: row;

            &_left
                width: 156px;
                height: 30px;
                color: #333333;
                font-family: Roboto;
                font-size: 16px;
                line-height: 16px;
                padding-top: 8px;


            &_right
                width: 345px;
                height: 30px;
                border-left: 1px solid #ccc;
                padding-left: 1px;
                padding-top: 8px;


    .bar-period
        margin-bottom: 16px;

        &__bar-block
            height: 30px;
            background-color: #EBEBEB;

    .bar-date-period
        overflow: hidden;
        font-size: 12px;
        color: #9E9E9E;
        padding-right: 16px;

        &__from
            float: left;

        &__to
            float: right;

    .depart-charts
        width: 100%;
        padding-right: 16px;

        &__bar-line
            height: 8px;
            width: 100%;
            margin: 12px 0;
            background-color: #EBEBEB;
        &__bar-block
            height: 19px;
            width: 100%;


    .depart-charts__header
        display: inline-block;
        vertical-align: middle;
        width: 150px;
        color: #333333;
        height: 32px;
        line-height: 32px;
        font-weight: normal;

    .depart-charts__bar
        display: inline-block;
        vertical-align: middle;
        width: calc( 100% - 155px );
        border-left: solid 1px #ccc;
        height: 19px;
        line-height: 32px;

    .depart_name
        font-size: 14px;
        margin-bottom: 8px;

        &__alert
            display: inline-block;
            vertical-align: middle;
            margin-right: 8px;

    .all-depart-charts
        height: calc(100% - 40px);
        overflow: auto;
        padding-right: 16px;

    .corr-actions
        height: calc(100% - 40px);
        overflow: auto;
        padding-right: 16px;

    .corr-actions__date
        display: inline-block;
        vertical-align: top;
        width: 100px;
        min-height: 24px;
        color: #9E9E9E;
        font-size: 12px;
        font-weight: normal;

    .corr-actions__text
        display: inline-block;
        vertical-align: top;
        width: calc( 100% - 110px );
        font-size: 14px;
        font-weight: normal;


    .fa
        display: inline-block;
    .fa-exclamation-circle
        color: #E07D96;

    .fa-calendar
        color: #9E9E9E;

    .fa-arrow-left
        color: #9E9E9E;


</style>
