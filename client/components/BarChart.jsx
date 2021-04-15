import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { scaleBand, scaleLinear, max, format, timeFormat, timeParse } from 'd3'
import { AxisBottom } from './barChartLayout/AxisBottom'
import { AxisLeft } from './barChartLayout/AxisLeft'
import { Marks } from './barChartLayout/Marks'

const margin = { top: 20, right: 30, bottom: 80, left: 120 }
const xAxisLabelOffset = 65
const xAxisTickFormat = format(".2s")

function BarChart({ data }) {
  const myRef = useRef(null)

  console.log(data)
  
  const edit = data.map(d => d.parameter.substring(0,10))
  console.log(edit)

  const parse = timeFormat("%d %m, %y")
  const parsed = data.map(d => new Date(d.parameter))
  console.log(parsed)


  const parameterLength = []
  data.map(d => parameterLength.push(d.parameter))
  
  const width = 800
  const height = parameterLength.length > 19 ? parameterLength.length * 25 : 500
  
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right
  
  const yValue = d => d.parameter
  const xValue = d => d.value
  
  const yAxisTickFormat = timeFormat("%y %m, %d")
  // const date = data.map(d => yAxisTickFormat(d.parameter))
  // console.log(date)

  let xAxisLabel
  if (data && data[0]) {
    xAxisLabel = data[0].sub_series_name
  }

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.5);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  useEffect(() => {
    myRef.current.scrollIntoView()
  })

  return (
    <>
      <h1>Data Visualisation</h1>
      <div className='fixedHeight'>
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat} />
            <AxisLeft yScale={yScale} tickFormat={yAxisTickFormat} />
            <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} tooltipFormat={xAxisTickFormat} />
            <text className='axis-label' x={innerWidth / 2} y={innerHeight + xAxisLabelOffset} textAnchor='middle'>{xAxisLabel}</text>
          </g>
        </svg>
        <div ref={myRef}></div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.filteredData,
    cat: state.cat,
    subSeries: state.subSeries
  }
}

export default connect(mapStateToProps)(BarChart)