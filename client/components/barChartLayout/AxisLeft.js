import React from 'react'

export const AxisLeft = ({yScale, tickFormat}) =>
  yScale.domain().map(tickValue => (
    <g className='tick' key={tickValue}>
      {console.log(new Date(tickValue))}
      <text 
        style={{textAnchor: 'end'}}
        x={-3}
        dy='.32em'
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {new Date(tickValue).toString().substring(4, 15)}
      </text>
    </g> 
  ))