import React from 'react'
import { connect } from 'react-redux'
import { max, min } from 'd3'
import {numberFormat} from '../helperFunctions'

function MinMax({ settings, allData }) {
  const data = allData[settings.subSeries]
  const minValue = min(data.map(d => d.value))
  const maxValue = max(data.map(d => d.value))

  return (
    <div className='columns'>
      <div className='column'>
        <h1 className='is-size-5 has-text-weight-semibold'>{numberFormat(minValue)} {' '} min - {numberFormat(maxValue)} {' '} max {' '}</h1>
        <p className='has-text-weight-medium'>{settings.subSeries} {' '} minimum and maximum </p>
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
    settings: state.settings,
    allData: state.allData
  }
}

export default connect(mapStateToProps)(MinMax)