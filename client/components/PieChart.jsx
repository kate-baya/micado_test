import React, { useEffect } from 'react';
import * as d3 from 'd3';

function PieChart(props) {
  const {
    data,
    outerRadius,
    innerRadius,
  } = props;
  const margin = {
    top: 50, right: 50, bottom: 50, left: 50,
  };
  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;
  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    // draw the chart here
    const colorScale = d3     
    .scaleSequential()      
    .interpolator(d3.interpolateCool)      
    .domain([0, data.length]);
  }    

  return <div id="pie-container" />;
}

export default PieChart;