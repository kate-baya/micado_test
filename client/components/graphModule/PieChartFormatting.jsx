import React from 'react'
import {connect} from 'react-redux'
import PieChart from './PieChart'
import {min, max} from 'd3'
import {dateTransform} from  '../helperFunctions'

function PieChartFormatting ({settings, allData}) {
  const recoveredValue = []
  const deceasedValue = []
  const activeValue = []
  allData.Recovered.map(d => recoveredValue.push(d.value))
  allData.Deceased.map(d => deceasedValue.push(d.value))
  allData.Active.map(d => activeValue.push(d.value))

  const maxRecovered = max(recoveredValue)
  const minRecovered = min(recoveredValue)

  const maxDeceased = max(deceasedValue)
  const minDeceased = min(deceasedValue)

  const maxActive = max(activeValue)
  const minActive = min(activeValue)

  const pieChartData = [
    {subSeries: 'Active', value: maxActive - minActive, img: '/images/purple.png'}, 
    {subSeries: 'Recovered', value: maxRecovered - minRecovered, img: '/images/blue.png'}, 
    {subSeries: 'Deceased', value: maxDeceased - minDeceased, img: '/images/green.png'}
  ]

  return(
    <>
    <div className='is-size-4 has-text-weight-bold'>
    <h1>New Zealand Covid Cases</h1>
    <p>{dateTransform(settings.start)} - {dateTransform(settings.end)}</p>
    </div>
    <PieChart data={pieChartData}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    subSeries: state.subSeries,
    settings: state.settings,
    allData: state.allData
  }
}

export default connect(mapStateToProps)(PieChartFormatting)