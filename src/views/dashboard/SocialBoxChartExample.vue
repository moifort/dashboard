<script>
  import {Line, mixins} from 'vue-chartjs'
  const {reactiveData} = mixins

  export default Line.extend({
    mixins: [reactiveData],
    props: ['data', 'height'],
    mounted () {
      this.renderChart({
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: this.data
          }
        ]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      })
    }
  })
</script>
