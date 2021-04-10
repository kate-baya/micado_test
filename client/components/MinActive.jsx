import React from 'react'
import { connect } from 'react-redux'
// import {min} from '../d3Functions'
import * as d3 from "d3"

function MinActive (props) {

  // const array = props.active.filter(i => i.value)
  // console.log(array)

  const activeValues = []
  props.active.forEach(e => activeValues.push(e.value))
  console.log(activeValues)
  
  var min = d3.min(activeValues)
  console.log('d3 function', min)

  return (
    <>
    {console.log(props.active)}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    active: state.active
  }
}

export default connect(mapStateToProps)(MinActive)