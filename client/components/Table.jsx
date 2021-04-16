import React from 'react'
import {connect} from 'react-redux'

import LoadData from './LoadData'

function Table ({allData}) {
  const testsByDay = allData['Tests by day']

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