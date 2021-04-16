import React from 'react'
import {connect} from 'react-redux'

import LoadData from './LoadData'

function Table ({allData}) {
  // console.log(allData)
  const testsByDay = allData['Tests by day']
  // const test = []
  // const fuckThis = testsByDay.map(d => d.value) 
  // console.log(fuckThis)

  // const data = [{}]
  // allData.Recovered.map(d => data.push(d))
  // console.log(data)

  return (
    <>
    {allData || testsByDay ? <LoadData testsByDay={testsByDay}/> : 'Loading'}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    allData: state.allData
  }
}

export default connect(mapStateToProps)(Table)