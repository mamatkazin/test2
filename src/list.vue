<template>
    <div class="wrap">
        <div class="app">
            <div class="switch">
                <div></div>
                <div class="switch__row">
                    <i class="fa fa-clock-o switch__row_icon"></i>
                    <div class="switch__row_text">{{start}}</div>
                    <div class="switch__row_symbol">-</div>
                    <div class="switch__row_text">{{finish}}</div>
                </div>
            </div>
            <div class="header">
                <div class="header__head">{{department}}</div>
                <div class="header__department">{{head_department}}</div>
            </div>
            <div class="wrap-padding">
                <div class="b-list" v-for="item in arrayEmployee">
                    <div class="body__block">
                        <div class="block__row">
                            <div class="block__row_name">
                                <span v-bind:title="item.p_name">{{item.name}}</span>
                            </div>
                            <div class="block__row_border-bottom"></div>
                        </div>
                    </div>
                    <div class="body__block-row" v-bind:data-id="item.id">
                        <div class="column">
                            <div class="component__chart">
                                <span>{{item.utilisation}}</span>
                                <span class="component__chart-finish">40</span>
                            </div>
                            <svg class="svg" v-bind:data-u="item.utilisation"></svg>
                        </div>
                        <div class="column">
                            <div class="block__row" v-for="i in item.tasks">
                                <div class="block__row-child">
                                    <div class="component__one">
                                        <span v-bind:title="i.p_name" class="component__one-first">{{i.p_code}}-||-{{i.p_name}}</span>
                                        <span v-bind:title="i.t_name" class="component__one-second">-||-{{i.t_name}}</span>
                                    </div>
                                    <div class="column block__column">
                                        <div class="component__two">
                                            <div class="component__two-fact">{{i.fact_all}}</div>
                                            <div class="component__two-plan">{{i.plan}}</div>
                                        </div>

                                        <svg class="svg-task" v-bind:data-fact="i.fact_all" v-bind:data-plan="i.plan"></svg>
                                    </div>
                                    <div class="component__three">{{i.fact_current}}</div><div class="component__three_text">ч.</div>

                                </div>
                            </div>
                        </div>

                        <div class="component__four">
                            <div class="component__four_row" v-bind:style="item.state == 1 ? {'display': 'block'} : {'display': 'none'}">Согласовано</div>
                            <div class="component__four_row" v-bind:title="item.descr" v-bind:style="item.state == 2 ? {'display': 'block'} : {'display': 'none'}">Не согласовано</div>
                            <div v-bind:style="item.state == 0 ? {'display': 'block'} : {'display': 'none'}"
                                 class="component__four_row-complex">
                                <button class="component__four_button-yes"
                                        v-on:click="sendMessage"
                                        v-bind:w_id="item.w_id"
                                        v-bind:data-state="1"></button>
                                <div v-bind:style="{'display': 'none'}">
                                    <div class="modalWindow__header">
                                        <div class="modalWindow__header_comment">Комментарий</div>
                                        <div v-on:click="closeModalWindow">X</div>
                                    </div>
                                    <textarea class="modalWindow__textPlace"></textarea>
                                    <button class="modalWindow__button"
                                            v-on:click="sendCloseModalWindow"
                                            v-bind:w_id="item.w_id"
                                            v-bind:id="item.id"
                                            v-bind:data-id="item.id"
                                            v-bind:data-state="2">Отправить</button>
                                </div>
                                <button class="component__four_button-no"
                                        v-on:click="showModalWindow"></button>
                            </div>
                        </div>
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
                start: '',
                finish: '',
                department: '',
                head_department: '',
                jdata: [{}],
                seen: true

            }
        },
        created: function () {
            var jdata = JSON.parse(this.input_data);
            console.log(jdata);
            this.arrayEmployee = jdata.employee;
            this.department = jdata.department;
            this.head_department = jdata.head_department;
            this.start = jdata.start;
            this.finish = jdata.finish;

        },

        /*ready: function () {
            var s = Snap('.svg');
            var svg1 = document.getElementsByClassName('.svg');

            var str = svg1.getAttribute('data-u');
            if(str) {
                str = str.split('.');
                makeStBar(40, Number(str[0]), s);
            };
            var s = Snap('.svg-task');
            var svg1 = document.getElementsByClassName('.svg-task');
            var fact = svg1.getAttribute('data-fact'),
                plan = svg1.getAttribute('data-plan');
            if(fact && plan) {
                fact = fact.split('.');
                plan = plan.split('.');
                makeStBar(Number(fact[0]), Number(plan[0]), s);
            };
        },*/

        methods: {
            sendMessage: function(e) {
                var el = e.target;
                var msg = {
                    w_id: el.getAttribute('w_id'),
                    //task_id: el.getAttribute('id'),
                    state: el.getAttribute('data-state'),
                    employee_id: el.closest('.body__block-row').getAttribute('data-id'),
                    reason: ''

                }
                //console.log(msg);
                this.$bus.$emit('ts_accept_execute', msg);
            },
            showModalWindow: function(event) {
                var button = event.target,
                    modalWindow = button.previousElementSibling;
                //подложка под модальным окном
                createGlass();
                //позиционирует модальное окно слева от кнопки
                function positionAt(button, modalWindow) {
                    modalWindow.style.cssText = 'display: flex; flex-direction: column; position: absolute;';
                    var xy = button.getBoundingClientRect();//получаю координаты кнопки
                    modalWindow.style.cssText =   'position: fixed; left:' + (xy.left  - 303) + 'px;' + 'top:' + (xy.top - 3) + 'px;';
                    modalWindow.classList.add('modalWindow');
                }
                positionAt(button, modalWindow);
            },
            //крест - закрывает окно
            closeModalWindow: function(e) {
                var el = e.target;
                el.closest('.modalWindow').style.cssText = 'display: none';
                el.closest('.modalWindow').children[1].value = '';//чистит textarea
                destroyGlass();
            },
            //кнопка Отправить - формирует сообщение и закрывает окно
            sendCloseModalWindow: function(e) {
                var el = e.target,
                    msg = {
                    w_id: el.getAttribute('w_id'),
                    state: el.getAttribute('data-state'),
                    employee_id: el.getAttribute('data-id'),
                    reason: el.previousElementSibling.value
                };
                if(el.previousElementSibling.value.length > 0) {
                    el.closest('.modalWindow').style.cssText = 'display: none';
                    this.$bus.$emit('ts_accept_execute', msg);//прокидывает данные в router.vue
                    el.previousElementSibling.value = '';//чистит textarea
                    destroyGlass();
                } else {
                    el.previousElementSibling.style.cssText += 'border-color: red;';
                }
            }
        },
        beforeDestroy: function() {
            this.ts_accept_execute && this.$bus.$off("ts_accept_execute", this.ts_accept_execute);
        }
    }
    //подложка под модальным окном
    function createGlass() {
        var glass = document.createElement('div');
        glass.classList.add('glass');
        glass.setAttribute('id', 'glass');
        document.body.appendChild(glass);
    }
    //убирает подложку под модальное окно
    function destroyGlass() {
        var elem = document.getElementById('glass');
        elem.parentNode.removeChild(elem);
    }
    function makeStBar(fact, plan, s) {
        var x = 0;
        var y = 0;
        var h = 6;
        var l = 100;

        var delta = plan;
        var x1 = x + l * (fact / delta);
        var x2 = x + l * (plan / delta);
        var x3 = x + l * (delta / fact);

        if(plan >= fact) {

            var sBar1 = s.rect(x,y,l * (fact / delta),h);
                    sBar1.attr({
                    fill: 'blue',
                    opacity: 1,
                    });

            var sBar2 = s.rect(x1,y,l * ((plan - fact) / delta),h);
                    sBar2.attr({
                    fill: 'red',
                    opacity: 1,
                    });

        } else if(delta >= fact) {

            var sBar1 = s.rect(x,y,l * (fact / delta),h);
                    sBar1.attr({
                    fill: 'blue',
                    opacity: 1,
                    });

            var sBar2 = s.rect(x1,y,l * ((delta - fact) / delta),h);
                    sBar2.attr({
                    fill: 'red',
                    opacity: 1,
                    });

                } else {

                var sBar1 = s.rect(x,y,l * (delta / fact),h);
                        sBar1.attr({
                        fill: 'blue',
                        opacity: 1,
                        });

                var sBar2 = s.rect(x3,y,l * ((fact - delta) / fact),h);
                        sBar2.attr({
                        fill: 'red',
                        opacity: 1,
                        });
        };
    }
    //функция отрабатывает после загрузки DOM через JQuery, 'DOMContentLoaded' не отрабатывает!!!
    //Переделать на отработку при загрузке элемента svg экземпляра vue
    $(document).ready(function(){
        $('.svg').each(function() {
            var s = Snap(this);
            var str = this.getAttribute('data-u');
            if(str) {
                str = str.split('.');
                makeStBar(40, Number(str[0]), s);
            }
        })
        $('.svg-task').each(function() {
            var s = Snap(this);
            var fact = this.getAttribute('data-fact'),
                plan = this.getAttribute('data-plan');
            //console.log(fact);
            //console.log(plan);
            if(fact && plan) {
                fact = fact.split('.');
                plan = plan.split('.');
                makeStBar(Number(fact[0]), Number(plan[0]), s);
            }
        })
    });
</script>
<style lang="sass?indentedSyntax=true" scoped>
    .wrap
        margin-top: 16px;
        height: 873px;
        overflow-y: auto;

    .app
        width: 1024px;
        margin: auto;
        margin-bottom: 80px;
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;

    .switch
        width: 1024px;
        height: 64px;
        display: flex;
        flex-direction: row;
        margin: auto;
        justify-content: space-between;

        &__row
            align-items: center;
            margin: 0px 16px
            display: flex;
            flex-direction: row;

            &_icon
                width: 12px;
                height: 18px;
                margin-right: 8px;
                font-family: FontAwesome;
                font-size: 14px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.29;
                letter-spacing: normal;
                text-align: left;
                color: #bcbcbc;

            &_text
                font-family: Roboto;
                font-size: 12px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.17;
                letter-spacing: normal;
                text-align: right;
                color: #9e9e9e;

            &_symbol
                margin: 0px 4px;
                color: #9e9e9e;

    .header
        width: 1022px;
        height: 64px;
        display: flex;
        flex-direction: row;
        margin: auto;
        justify-content: space-between;
        background-color: #f5f5f5;

        &__department
            align-items: center;
            margin: 0px 16px
            display: flex;
            flex-direction: row;
            font-size: 16px;
            font-size: 14px;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.38;
            leftetter-spacing: normal;
            text-align: left;
            color: #333333;

        &__head
            align-items: center;
            margin: 0px 16px
            display: flex;
            flex-direction: row;
            font-size: 16px;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.29;
            letter-spacing: normal;
            text-align: left;
            color: #333333;

    .wrap-padding
        padding: 16px 0px 0px 16px;

    .b-list
        display: flex;
        flex-direction: column;

    .body
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        &__block
            display: flex;
            flex-direction: column;
            width: 100%;

        &__block-row
            margin-bottom: 40px;
            padding-top: 6px;
            display: flex;
            flex-direction: row;

    .column
        display: flex;
        flex-direction: column;

    .block
        &__column
            padding-top: 5px;

        &__row
            display: flex;
            flex-direction: row;
            width: 100%;

            &_name
                height: 18px;
                width: 180px;
                color: #333333;
                font-family: "Roboto";
                font-size: 14px;
                font-weight: 500;
                line-height: 18px;

            &_border-bottom
                box-sizing: border-box;
                height: 2px;
                width: 916px;
                border: 1px solid #e1dfdf;
                opacity: 0.5;
                margin-top: 9px;

        &__row-child
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 40px;

    .component
        &__chart
            width: 100px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        &__one
            width: 578px;
            height: 18px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #333333;
            font-family: "Roboto";
            font-size: 14px;
            line-height: 18px;
            margin-top: 16px;

            &-first
                width: 300px;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;

            &-second
                width: 240px;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;

        &__two
            height: 12px;
            width: 100px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &-fact
                margin-right: 4px;

            &-plan
                margin-left: 4px;

        &__three
            height: 18px;
            width: 48px;
            display: flex;
            flex-direction: column;
            color: #333333;
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 500;
            line-height: 14px;
            margin-top: 16px;

            &_text
                color: #333333;
                font-family: "Roboto";
                font-size: 16px;
                font-weight: 500;
                line-height: 14px;
                margin-top: 14px;

        &__four
            height: 18px;
            width: 106px;
            display: flex;
            flex-direction: row;
            color: #333333;
            font-family: "Roboto";
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            margin: 0px 16px 0px 14px;

            &_button-yes
                height: 28px;
                width: 28px;
                outline: none;
                border: transparent;
                border-radius: 4px;
                background-color: #7FD5B1;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);

            &_button-no
                height: 28px;
                width: 28px;
                outline: none;
                border: transparent;
                border-radius: 4px;
                background-color: #E07D96;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);

            &_row
                margin-top: 14px;
                width: inherit;
                text-align: end;

            &_row-complex
                display: flex;
                flex-direction: row;
                margin-left: 44px;
                width: 105px;

    .button-yes

        &__icon-properties
            height: 18px;
            width: 16px;
            color: #FFFFFF;
            font-family: FontAwesome;
            font-size: 18px;
            line-height: 18px;


    .button-no

        &__icon-properties
            height: 18px;
            width: 16px;
            color: #FFFFFF;
            font-family: FontAwesome;
            font-size: 18px;
            line-height: 18px;


    .modalWindow
        width: 300px;
        height: 156px;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0 12px 6px  rgba(0, 0, 0, 0.08), 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 8px 24px 0 rgba(0, 0, 0, 0.08);
        position: absolute;
        z-index: 100;
        padding: 8px;

        &__header
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0px 0px 8px 0px;

            &_comment
                width: 76px;
                height: 16px;
                font-size: 12px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.33;
                letter-spacing: normal;
                text-align: left;
                color: #333333;

            &_cross
                width: 13px;
                height: 18px;
                font-family: FontAwesome;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.13;
                letter-spacing: normal;
                text-align: left;
                color: #919191;
                cursor: pointer;

        &__textPlace
            width: 283px;
            height: 70px;
            border-radius: 4px;
            border: solid 1px #ebebeb;
            margin: 0px 0px 8px 0px;

        &__button
            width: 80px;
            height: 28px;
            border: none;
            outline: none;
            border-radius: 4px;
            background-color: #4989cc;
            font-size: 12px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.83;
            letter-spacing: normal;
            text-align: left;
            color: #ffffff;
            margin: 6px 0px 0px 203px;

    .glass
        width: 100%;
        height: 100%;
        background-color: #ccc;
        opacity: .2;
        position: fixed;
        top: 0%;
        left: 0%;
        z-index: 50;

    .color-white
        color: white;

    .svg
        margin: 5px 16px 0px 0px;
        display: flex;
        width: 100px;
        height: 8px;

    .svg-task
        margin: 5px 16px 0px 0px;
        display: flex;
        width: 100px;
        height: 8px;

    .svg_lamp
        display: none;
        display: flex;
        width: 60%;
        height: 50%;


    .chartplace
        width: 300px;
        height: 200px;
        opacity: 1;
        background-color: yellow;


    .square_block
        color: red;
        display: block;


    .chartName
        color: red;
        display: block;

</style>
