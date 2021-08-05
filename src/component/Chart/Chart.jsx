import { Bar } from "react-chartjs-2";

const rand = () => Math.round(Math.random() * 100);

const options = {
  scales: {
    xAxes: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom"
    }
  }
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      stack: "stack",
      type: "bar",
      label: "Unit Per Transaction",
      backgroundColor: "#707070",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    },
    {
      stack: "stack",
      type: "bar",
      label: "Average Purchase Value",
      backgroundColor: "#7AE28C",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    },
    {
      stack: "stack",
      type: "bar",
      label: "Nett",
      backgroundColor: "#37B04C",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    },
    {
      stack: "stack",
      type: "bar",
      label: "Gross",
      backgroundColor: "#289E45",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
    }
  ]
};

const Chart = () => <Bar data={data} options={options} />;

export default Chart;
