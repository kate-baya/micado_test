import React from 'react'
import { connect } from 'react-redux'
import { mean } from 'd3'

function Average({ data, cat }) {

  
  const valueAverage = mean(data.map(d => d.value))

  return (
    <div className='columns'>
      <div className='column'>
        <h1 className='is-size-5 has-text-weight-semibold'>{valueAverage}</h1>
        <p className='has-text-weight-medium'>Average {cat}</p>
      </div>
      <div className='column is-narrow'>
        <figure className="image is-64x64">
          <img src="/images/virus.png" />
        </figure>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    cat: state.cat
  }
}

export default connect(mapStateToProps)(Average)