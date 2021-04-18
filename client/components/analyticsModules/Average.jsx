import React from 'react'
import { connect } from 'react-redux'
import { mean } from 'd3'
import {numberFormat} from '../helperFunctions'

function Average({allData, settings}) {
  const testsByDay = allData['Tests by day']
  if (testsByDay) {
    return <LoadedAverage testsByDay={testsByDay} settings={settings} />
  }
  return '...Loading'
}

function LoadedAverage({ testsByDay }) {
  const valueAverage = mean(testsByDay.map(d => d.value))

  return (
    <div className='columns'>
      <div className='column'>
        <h1 className='is-size-5 has-text-weight-semibold'>{numberFormat(valueAverage)}</h1>
        <p className='has-text-weight-medium'>Average tests per day</p>
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
    allData: state.allData,
  }
}

export default connect(mapStateToProps)(Average)