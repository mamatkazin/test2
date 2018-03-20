<template>
    <div class="dashboard">
        <card></card>
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
    .dashboard
        width: 100%;
        height: 100%;

</style>