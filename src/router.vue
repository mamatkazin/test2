<template>
</template>
<script>
'use strict';
module.exports = {
    props: {},
    data: function() {
        return {}
    },
    created: function(){
        this.$bus.$on('ts_accept_execute', function (msg) {
            var msg = msg;
            msg.action_name = 'ts_accept_execute';
            //console.log('ts_accept_execute : ', msg);
            WSSend(msg);
        })
        
    },
    mounted: function() {
    }
}
</script>