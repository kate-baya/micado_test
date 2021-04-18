import * as d3 from 'd3';

export function drawChart(data, width, height, innerRadius, outerRadius) {

  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateCool)
    .domain([0, data.length]);


  d3.select('#pie-container')
    .select('svg')
    .remove();

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


  arc
    .append('path')
    .attr('d', arcGenerator)
    .style('fill', (_, i) => colorScale(i))
    .style('stroke', '#ffffff')
    .style('stroke-width', 0);
}