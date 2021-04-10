import React from 'react'
import {connect} from 'react-redux'

import BarChart from './BarChart'
import QuantitativeTotal from './QuantitativeTotal'

function Dashboard ({data}) {
  return(
    <>
    <h1>Dashboard</h1>
    <QuantitativeTotal />
    <BarChart />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Dashboard)