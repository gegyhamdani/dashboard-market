const chartOptions = {
  scales: {
    xAxes: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        title: () => "Date/Month/Year"
      }
    }
  },
  barThickness: 30
};

export default { chartOptions };
