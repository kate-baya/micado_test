import React from 'react'
import { connect } from 'react-redux'
import { max, min } from 'd3'

function MinMax({ data, settings }) {
  const minValue = min(data.map(d => d.value))
  const maxValue = max(data.map(d => d.value))

  return (
    <div className='columns'>
      <div className='column'>
        <h1 className='is-size-5 has-text-weight-semibold'>{minValue} {' '} min - {maxValue} {' '} max {' '}</h1>
        <p className='has-text-weight-medium'>{settings.subSeries} {' '} Minimum - {' '} {settings.subSeries} {' '} Maximum </p>
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
    data: state.filteredData,
    settings: state.settings
  }
}

export default connect(mapStateToProps)(MinMax)