import React from 'react'
import {connect} from 'react-redux'

function SpaceFiller ({data}) {
  return(
    <>
    <h1>Space Filler</h1>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(SpaceFiller)