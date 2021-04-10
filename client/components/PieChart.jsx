import React, {useState, useCallback, useEffect} from 'react';
import {connect} from 'react-redux'
import {arc, pie} from 'd3'

const width = 500
const height = 500
const centerX = width / 2
const centerY = height / 2

const pieArc = arc()
.innerRadius(0)
.outerRadius(width)

function PieChart ({active}) {
  const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

    const colorPie = pie().value(1)
    
  return (
    <>
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
      {colorPie(active).map((d) => 
      <path 
        fill={randomHexColor()}
        d={pieArc(d)}
      />
    )}
    {/* {active.map((d, i) => 
      <path 
        fill={randomHexColor()}
        d={pieArc({
          startAngle: i / active.length * 2 * Math.PI,
          endAngle: (i + 1) / active.length * 2 * Math.PI,
        })}
      />
    )} */}
    </g>
    </svg>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    active: state.active
  }
}

export default connect(mapStateToProps)(PieChart)