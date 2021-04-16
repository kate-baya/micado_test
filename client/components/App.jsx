import React from 'react'
import { connect } from 'react-redux'

import Dashboard from './Dashboard'
// import LineChart from './LineChart'

function App() {
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

export default connect()(App)
