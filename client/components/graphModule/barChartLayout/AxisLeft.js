import React from 'react'
import {dateTransform} from '../../helperFunctions'

export const AxisLeft = ({yScale}) =>
  yScale.domain().map((tickValue, idx) => (
    <g className='tick' key={idx}>
      <text 
        style={{textAnchor: 'end'}}
        x={-3}
        dy='.32em'
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {dateTransform(tickValue)}
      </text>
    </g> 
  ))