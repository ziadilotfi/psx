<template>
  <polar-area
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { PolarArea } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

export default {
  name: 'PolarAreaChart',
  components: { PolarArea },
  props: {
    chartId: {
      type: String,
      default: 'polar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      type: Object,
      default: () => {}
    },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  },
}
</script>
