import Chart from 'chart.js';

export default {
    install(Vue){
        console.log('chart plugin loaded');
        // 객체의 속성을 확장
        Vue.prototype.$_Chart = Chart;
        
        // BarChart.vue 
        // this.$_Chart
        
        // LineChart.vue
        // this.$_Chart

        // 모든 component 에서 $_Chart 로 chart 라이브러리 객체에 접근가능
    }
}