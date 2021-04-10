import React from 'react'
import {connect} from 'react-redux'

function QuantitativeTotal ({data}) {
  return(
    <>
    <h1>Quantitative Total</h1>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(QuantitativeTotal)