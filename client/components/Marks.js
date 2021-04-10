import React from 'react'

export const Marks = ({active, xScale, yScale, xValue, yValue}) => 
  active.map((d, idx) => (
    <rect 
      key={idx} 
      x={0} 
      y={yScale(yValue(d))} 
      width={xScale(xValue(d))} 
      height={yScale.bandwidth()} 
    />
  ))
