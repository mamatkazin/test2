<template>
    <div class="card">
        <div class="header">
            <div class="header__left">
                <div class="header__title">Фамилия</div>
                <div class="header__title-number">23</div>
            </div>
            <div class="header__some">. . .</div>
        </div>
        <div class="wrap">
            <div class="body">
                <div class="body__row"  v-for="item in jdata">
                    <div class="body__row_left">{{item.name}}</div>
                    <div class="body__row_right">
                        <bar data-fact="{{item.fact}}" data-plan="{{item.plan}}"></bar>
                        <div>{{item.fact}}</div>
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
                jdata: [{}]
            }
        },
        created: function () {
            this.jdata = JSON.parse(this.input_data);
        }
    }
</script>
<style lang="sass?indentedSyntax=true" scoped>
    .card
        box-sizing: border-box;
        height: 242px;
        width: 502px;
        padding: 16px;
        border: 1px solid #EBEBEB;
        border-radius: 3px;
        background-color: #FFFFFF;
        box-shadow: 0 4px 10px 0 rgba(95,95,95,0.1);


    .header
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &__left
            display: flex;
            flex-direction: row;

        &__title
            height: 31px;
            width: 101px;
            color: #333333;
            font-family: Roboto;
            font-size: 24px;
            font-weight: 500;
            line-height: 31px;

        &__title-number
            font-family: Roboto;
            font-size: 24px;
            font-weight: 500;
            margin-left: 16px;

        &__some
            height: 24px;
            width: 24px;
            font-weight: 800;

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
                display: flex;
                flex-direction: row;
                width: 345px;
                height: 30px;                
                border-left: 1px solid #ccc;
                padding-left: 1px;
                padding-top: 8px;

</style>