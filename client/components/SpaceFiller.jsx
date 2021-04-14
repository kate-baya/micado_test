import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PieChart from './PieChart'
import {receiveAverages, getAverageData} from '../apis/covidDataApi'
import {min, max} from 'd3'

function SpaceFiller ({settings, subSeries }) {
  const [data, setState] = useState({
    recovered: [],
    deceased: [],
    active: []
  })

  useEffect(() => {
    getAverageData(settings)
      .then(covidData => {
        return setState({ 
          recovered: covidData.Recovered, 
          deceased: covidData.Deceased, 
          active: covidData.Active 
        })
      })
  },[settings])

  const recoveredValue = []
  const deceasedValue = []
  const activeValue = []
  data.recovered.map(d => recoveredValue.push(d.value))
  data.deceased.map(d => deceasedValue.push(d.value))
  data.active.map(d => activeValue.push(d.value))

  const maxRecovered = max(recoveredValue)
  const minRecovered = min(recoveredValue)

  const maxDeceased = max(deceasedValue)
  const minDeceased = min(deceasedValue)

  const maxActive = max(activeValue)
  const minActive = min(activeValue)

  const pieChartData = [
    {subSeries: 'Active', value: maxActive - minActive}, 
    {subSeries: 'Recovered', value: maxRecovered - minRecovered}, 
    {subSeries: 'Deceased', value: maxDeceased - minDeceased}
  ]

  return(
    <>
    <h1>Space Filler</h1>
    <PieChart data={pieChartData}/>
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