import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as d3 from 'd3';

function PieChart({data}) {

  console.log(data)

      const outerRadius = 100
      const innerRadius = 70

      const margin = {
        top: 50, right: 50, bottom: 50, left: 50,
      };

      const width = 3 * outerRadius + margin.left + margin.right;
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

        // Remove the old svg
        d3.select('#pie-container')
          .select('svg')
          .remove();
        // Create new svg
        const svg = d3
          .select('#pie-container')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arcGenerator = d3
          .arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius);
        const pieGenerator = d3
          .pie()
          .padAngle(0)
          .value((d) => d.value);
        const arc = svg
          .selectAll()
          .data(pieGenerator(data))
          .enter();

        // Append sectors
        arc
          .append('path')
          .attr('d', arcGenerator)
          .style('fill', (_, i) => colorScale(i))
          .style('stroke', '#ffffff')
          .style('stroke-width', 0);

        // Append text labels
        arc
          .append('text')
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle')
          .text((d) => d.data.subSeries)
          .style('fill', '#ffffff')
          .attr('transform', (d) => {
            const [x, y] = arcGenerator.centroid(d);
            return `translate(${x}, ${y})`;
          })
      }

      return (
        <>
        {console.log('first render')}
          <div id="pie-container" />
          <p></p>
        </>
      )
}

  export default connect()(PieChart)