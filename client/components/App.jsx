import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getAllData} from '../apis/covidDataApi'
import {receiveFilteredData} from '../actions/index'

import Dashboard from './Dashboard'
// import LineChart from './LineChart'

function App({settings, dispatch, allData}) {
  const data = allData[settings.subSeries]
  useEffect(() => {
    getAllData(settings, dispatch)
  },[settings])

  if (data) {
    return <LoadedApp data={data} dispatch={dispatch} settings={settings}/>
  }
  return '...Loading Dashboard'
}

function LoadedApp({data, dispatch, settings}) {
  
  useEffect(() => {
    dispatch(receiveFilteredData(data))
  }, [settings])

  return (
    <div className='app'>
      <nav className="navbar">
        <div className="container">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <figure className=" navbar-item image is-64x64">
                <img src="/images/newZealand.png" />
              </figure>
              <a className="navbar-item">
                New Zealand Covid-19 Data
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className='container'>
            <Dashboard />
            {/* <LineChart /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    allData: state.allData,
  }
}

export default connect(mapStateToProps)(App)
