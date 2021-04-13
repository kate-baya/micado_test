import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PieChart from './PieChart'
import {getTotal, getAverageData} from '../apis/covidDataApi'

function SpaceFiller ({settings, subSeries}) {

  useEffect(() => {
    getAverageData(subSeries, settings)
      .then(data => {
        console.log(data)
      })
  })


  return(
    <>
    <h1>Space Filler</h1>
    
    {/* {subSeries && <PieChart/>} */}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    subSeries: state.subSeries,
    settings: state.settings
  }
}

export default connect(mapStateToProps)(SpaceFiller)