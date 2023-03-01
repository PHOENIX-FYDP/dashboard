import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class BarChart extends Component {
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      // title: {
      //   text: "Most Popular Social Networking Sites",
      // },
      axisX: {
        title: "Overall Analysis",
        reversed: true,
      },
      // axisY: {
      //   title: "Monthly Active Users",
      //   labelFormatter: this.addSymbols,
      // },
      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 2200000000, label: "Analysis" },
            { y: 1800000000, label: "Crital Points" },
            { y: 800000000, label: "Vulnerable Points" },
            { y: 563000000, label: "Secure Points" },
            { y: 376000000, label: "Save" },
            { y: 336000000, label: "Attacks" },
            { y: 330000000, label: "Protection" },
          ],
        },
      ],
    };

    return (
      <div>
        {/* <h1>React Bar Chart</h1> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default BarChart;
