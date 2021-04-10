import React from 'react'
import { connect } from 'react-redux'
import { arc, pie, scaleBand, scaleLinear, max } from 'd3'
import * as d3 from "d3"
import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import {Marks} from './Marks'

const width = 500
const height = 500
const margin = { top: 20, right: 20, bottom: 20, left: 200 }

function BarChart ({active}) {
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const yValue = d => d.parameter
  const xValue = d => d.value

  const yScale = scaleBand()
    .domain(active.map(yValue))
    .range([0, innerHeight]);
  
  const xScale = scaleLinear()
    .domain([0, max(active, xValue)])
    .range([0, innerWidth])

  return (
    <>
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight}/>
        <AxisLeft yScale={yScale} />  
        <Marks active={active} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue}/>
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