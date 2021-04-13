import React from 'react'
import {connect} from 'react-redux'
import PieChart from './PieChart'

function SpaceFiller ({avg}) {
  return(
    <>
    <h1>Space Filler</h1>
    
    <PieChart />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    avg: state.avg
  }
}

export default connect(mapStateToProps)(SpaceFiller)