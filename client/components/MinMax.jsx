import React from 'react'
import { connect } from 'react-redux'
import { max, min } from 'd3'

function MinMax({ data, cat }) {
  const values = []
  data.map(d => values.push(d.value))

  return (
    <div className='columns'>
      <div className='column'>
        <h1 className='is-size-5 has-text-weight-semibold'>{min(values)} {' '} min - {max(values)} {' '} max {' '}</h1>
        <p className='has-text-weight-medium'>Minimum - Maximum {' '} {cat}</p>
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

export default connect(mapStateToProps)(MinMax)