import React from 'react'
import { connect } from 'react-redux'

function Welcome () {
  return (
    <h1>
      Welcome
    </h1>
  )
}

export default connect()(Welcome)