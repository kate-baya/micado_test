import React from 'react'
import { connect } from 'react-redux'
import { arc, pie, scaleBand, scaleLinear, max } from 'd3'
import * as d3 from "d3"

const width = 500
const height = 500
const margin = { top: 20, right: 20, bottom: 20, left: 200 }


function BarChart ({active}) {

  console.log(active[0])
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const yScale = scaleBand()
    .domain(active.map(d => d.parameter))
    .range([0, innerHeight]);

    console.log(yScale)
  
  const xScale = scaleLinear()
    .domain([0, max(active, d => d.value)])
    .range([0, innerWidth])

  return (
    <>
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map(tickValue => <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
          <line y2={innerHeight} stroke='black' />
          <text y={innerHeight + 3} dy='.71em' style={{textAnchor: 'middle'}}>{tickValue}</text>
          </g>)}

        {yScale.domain().map(tickValue =>
        <text key={tickValue} dy='.32em' x={-3} y={yScale(tickValue) + yScale.bandwidth() / 2} style={{textAnchor: 'end'}}>{tickValue}</text>
        )}
      {active.map((d, idx)=> <rect key={idx} x={0} y={yScale(d.parameter)} width={xScale(d.value)} height={yScale.bandwidth()} />)}
    </g>
    </svg>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    active: state.active
  }
}

export default connect (mapStateToProps)(BarChart)