import React from 'react'
import { connect } from 'react-redux'

function Welcome() {
  return (
    <>
      <div className='columns'>
        <div className='column'>
          <h1 className='is-size-5 has-text-weight-semibold'>Welcome!</h1>
          <p className='has-text-weight-medium'>New Zealand Covid-19 Analytics Dashboard</p>
        </div>
        <div className='column is-narrow'>
          <figure className="image is-64x64">
            <img src="/images/chart.png" />
          </figure>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(Welcome)