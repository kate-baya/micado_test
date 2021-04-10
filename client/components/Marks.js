import React from 'react'

export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat}) => 
  data.map((d, idx) => (
    <rect
      className='mark' 
      key={idx} 
      x={0} 
      y={yScale(yValue(d))} 
      width={xScale(xValue(d))} 
      height={yScale.bandwidth()} 
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ))
