import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PieChart from './PieChart'
import {receiveAverages, getAverageData} from '../apis/covidDataApi'

function SpaceFiller ({settings, subSeries }) {
  const [state, setState] = useState([])

  useEffect(() => {
    getAverageData(subSeries, settings)
      .then(data => {
        setState(data)
      })
  },[settings])


  return(
    <>
    <h1>Space Filler</h1>
    <PieChart data={state}/>
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