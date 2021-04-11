import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getSubSeries } from '../apis/covidDataApi'
import { receiveSubSeries } from '../actions/index'

import Dashboard from './Dashboard'
import Filter from './Filter'

function App(props) {
  useEffect(() => {
    getSubSeries()
      .then(res => {
        props.dispatch(receiveSubSeries(res))
      })
  }, [])

  return (
    <div className='app'>
      <h1>New Zealand Covid-19 Data</h1>
      <Filter />
      <Dashboard />
    </div>
  )
}

export default connect()(App)
