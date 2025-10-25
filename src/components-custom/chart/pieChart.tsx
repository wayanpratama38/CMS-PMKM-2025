import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

function PieChart() {
  const series = [44, 55, 13, 43, 22];

const options : ApexOptions = {
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};
 return (
  <div>
      <Chart series={series} type="pie" options={options}  width="380" />
    </div>
 )
}

export default PieChart;