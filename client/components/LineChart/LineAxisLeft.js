import React from 'react'

export const LineAxisLeft = ({yScale, innerWidth, tickOffSet = 3}) =>
  yScale.ticks().map(tickValue => (
    <g  
    className='tick' 
    transform={`translate(0, ${yScale(tickValue)})`}>
      <line x2={innerWidth} />      
      <text 
        key={tickValue}
        style={{textAnchor: 'end'}}
        x={-tickOffSet}
        dy='.32em'
      >
        {tickValue}
      </text>
    </g> 
  ))