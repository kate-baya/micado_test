import React from 'react'
import {connect} from 'react-redux'

import BarChart from './BarChart'
import QuantitativeTotal from './QuantitativeTotal'

function Dashboard ({subSeries, data}) {
  return(
    <>
    <h1>Dashboard</h1>
    <QuantitativeTotal />
    <BarChart subSeries={subSeries}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Dashboard)