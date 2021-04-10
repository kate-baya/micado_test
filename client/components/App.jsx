import React from 'react'
import { connect } from 'react-redux'

import {getValues} from '../apis/covidDataApi'
import {receiveActive} from '../actions/index'
import PieChart from './PieChart'
import BarChart from './BarChart'

export class App extends React.Component {

  componentDidMount () {
    getValues('Active', '2020-04-30', '2020-05-20')
    .then(values => {
      this.props.dispatch(receiveActive(values))
    })
    .catch(err => {
      console.log(err)
    }) 
  }
  
  render () {
    // console.log(min())
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <BarChart />
      </div>
    )
  }
}

export default connect()(App)
