import React from 'react'
import { connect } from 'react-redux'
import { scaleTime, scaleLinear, max, extent, timeFormat } from 'd3'
import { LineAxisBottom } from './LineAxisBottom'
import { LineAxisLeft } from './LineAxisLeft'
import { LineMarks } from './LineMarks'

const width = 960
const height = 500
const margin = { top: 20, right: 30, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 45

function BarChart ({data, cat}) {
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right
  
  const xValue = d => d.parameter
  const xAxisLabel = 'Dates'
  
  const yValue = d => d.value
  const yAxisLabel = 'Cases'
  
  const xAxisTickFormat = timeFormat('%a %d')

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    

    console.log(xScale)

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();  

  return (
    <>
    <h1>Data Visualisation</h1>
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        
        <LineAxisBottom 
        xScale={xScale} 
        innerHeight={innerHeight} 
        tickFormat={xAxisTickFormat} 
        tickOffSet={7}/>
        
        <text 
          className='axis-label'  
          textAnchor='middle' 
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 
            2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>

        <LineAxisLeft 
        yScale={yScale} 
        innerWidth={innerWidth} 
        tickOffSet={7}/>  
        
        <text 
          className='axis-label' 
          x={innerWidth / 2} 
          y={innerHeight + xAxisLabelOffset} 
          textAnchor='middle'>
            {xAxisLabel}
        </text>

        <LineMarks 
          data={data} 
          xScale={xScale} 
          yScale={yScale} 
          xValue={xValue} 
          yValue={yValue} 
          tooltipFormat={xAxisTickFormat} 
          circleRadius={3}
        />
      </g>
    </svg>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    cat: state.cat,
    subSeries: state.subSeries
  }
}

export default connect (mapStateToProps)(BarChart)