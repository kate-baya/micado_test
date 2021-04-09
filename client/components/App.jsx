import React from 'react'
import { connect } from 'react-redux'


export class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
        </ul>
      </div>
    )
  }
}

export default connect()(App)
