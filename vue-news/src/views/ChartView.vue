<template>
  <div>
      <h1>Chart.js</h1>
    <!-- 
    <canvas id="barChart" width="400" height="400"></canvas>
    <canvas id="lineChart" width="400" height="400"></canvas> 
    -->
    <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
    <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
    // 컴포넌트 속성 && 인스턴스 옵션이 들어가는 공간
    // 쿼리 접근자를  사용하는경우 mounted()
    mounted() {
        // var ctx = document.getElementById('barChart');
        // var ctx = this.$refs.barChart
        // var barChart = new Chart(ctx, {
        var barChart = new Chart(this.$refs.barChart, {    
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        // var ctx2 = document.getElementById('lineChart');
        // var ctx2 = this.$refs.lineChart.getContext('2d');
        // var lineChart = new Chart(ctx2, {
        var lineChart = new Chart(this.$refs.lineChart.getContext('2d'), {    
            type: 'line',
            data: {
                labels :[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                ],
                datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
                }]
            }
         });
    }
}
</script>

<style>

</style>