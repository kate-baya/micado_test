import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getSubSeries } from '../apis/covidDataApi'
import { receiveSubSeries } from '../actions/index'

import Dashboard from './Dashboard'

function App(props) {

  useEffect(() => {
    getSubSeries()
      .then(res => {
        props.dispatch(receiveSubSeries(res))
      })
  }, [])

  return (
    <div className='app'>
      <nav className="navbar">
        <div className="container">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default connect()(App)
