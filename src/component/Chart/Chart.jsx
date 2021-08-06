import { Bar } from "react-chartjs-2";

import chart from "../../const/chart";

const rand = () => Math.round(Math.random() * 100);

const upvData = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
const apvData = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
const nettData = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
const grossData = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];

const getTotalValuePerLabel = () => {
  const maxLength = upvData.length;
  const arr = [];
  for (let i = 0; i < maxLength; i += 1) {
    arr.push(upvData[i] + apvData[i] + nettData[i] + grossData[i]);
  }
  return arr;
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      borderColor: "#FFE854",
      borderWidth: 2,
      fill: false,
      data: getTotalValuePerLabel()
    },
    {
      stack: "stack",
      type: "bar",
      label: "Unit Per Transaction",
      backgroundColor: "#707070",
      data: upvData
    },
    {
      stack: "stack",
      type: "bar",
      label: "Average Purchase Value",
      backgroundColor: "#7AE28C",
      data: apvData
    },
    {
      stack: "stack",
      type: "bar",
      label: "Nett",
      backgroundColor: "#37B04C",
      data: nettData
    },
    {
      stack: "stack",
      type: "bar",
      label: "Gross",
      backgroundColor: "#289E45",
      data: grossData
    }
  ]
};

const Chart = () => <Bar data={data} options={chart.chartOptions} height="100%" />;

export default Chart;
