import React from 'react'

export const Marks = ({active, xScale, yScale, xValue, yValue, tooltipFormat}) => 
  active.map((d, idx) => (
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
