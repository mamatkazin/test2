import Vue from 'vue';
//import App from './App.vue'
import router from './router.vue';
import list from './list.vue';
import project_card from './project_card.vue'; // bem
import bar from './bar.vue'; // without bem
import chart from './chart.vue'; // without bem
import time_chart from './time_chart.vue'; // without bem
import svgbar from './svgbar.vue'; // without bem
import svgbar_v_forbem from './svgbar_v_forbem.vue'; // bem, temporary
import svgbar_forbem from './svgbar_forbem.vue'; // bem, temporary
import time_chart_forbem from './time_chart_forbem.vue'; // bem, temporary

Vue.component('project_card', Vue.extend(project_card))
Vue.component('bar', Vue.extend(bar))
Vue.component('chart', Vue.extend(chart))
Vue.component('time_chart', Vue.extend(time_chart))
Vue.component('svgbar', Vue.extend(svgbar))
Vue.component('svgbar_v_forbem', Vue.extend(svgbar_v_forbem))
Vue.component('svgbar_forbem', Vue.extend(svgbar_forbem))
Vue.component('time_chart_forbem', Vue.extend(time_chart_forbem))

Object.defineProperty(Vue.prototype, '$bus', {
	get() {
		return this.$root.bus;
	}
});

var bus = new Vue({})


new Vue({
    el: '#app',

    data: {
   		bus: bus
   	},

    components: {
        router: router,
        list: list,
        bar: bar,
        chart: chart,
        time_chart: time_chart,
        time_chart_forbem: time_chart_forbem,
        svgbar: svgbar,
        svgbar_forbem: svgbar_forbem,
        svgbar_v_forbem: svgbar_v_forbem,
	    project_card: project_card
    },
  //render: h => h(App)
})
