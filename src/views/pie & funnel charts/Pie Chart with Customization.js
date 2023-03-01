import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChartWithCustomization extends Component {
  render() {
    const options = {
      // theme: "dark2",
      animationEnabled: true,
      exportFileName: "New Year Resolutions",
      exportEnabled: true,
      // title: {
      //   text: "Top Categories of New Year's Resolution",
      // },
      data: [
        {
          type: "pie",
          showInLegend: true,
          legendText: "{label}",
          toolTipContent: "{label}: <strong>{y}%</strong>",
          indexLabel: "{y}%",
          indexLabelPlacement: "inside",
          dataPoints: [
            { y: 32, label: "Certainity" },
            { y: 22, label: "Safety" },
            { y: 15, label: "Reliability" },
            { y: 19, label: "Dependability" },
            { y: 5, label: "Guarantee" },
            { y: 7, label: "Assurity" },
          ],
        },
      ],
    };

    return (
      <div>
        {/* <h1>React Pie Chart with Index Labels Placed Inside</h1> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default PieChartWithCustomization;
