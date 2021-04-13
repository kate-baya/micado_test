import React from 'react'
import { connect } from 'react-redux'

function Welcome () {
  return (
    <>
    <h1 className='is-size-5 has-text-weight-semibold'>Welcome!</h1>
    <p className='has-text-weight-medium'>New Zealand Covid-19 Analytics Dashboard</p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cat: state.cat
  }
}

export default connect(mapStateToProps)(Welcome)