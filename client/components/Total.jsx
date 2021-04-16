import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCumulative } from '../apis/covidDataApi'

function Total({ settings }) {
  const [totalValue, setTotalValue] = useState({})

  useEffect(() => {
    getCumulative('Total tests (cumulative)', settings.start, settings.end)
      .then(total => {
        return setTotalValue(total[total.length-1])})
  },[settings.end])

  return (
    <>
      <div className='columns'>
        <div className='column'>
          <h1 className='is-size-5 has-text-weight-semibold'>{totalValue.value}</h1>
          <p className='has-text-weight-medium'>Total Tests (Cumulative) since 01/03/2020</p>
        </div>
        <div className='column is-narrow'>
          <figure className="image is-64x64">
            <img src="/images/virus.png"/>
          </figure>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.filteredData,
    cat: state.cat,
    settings: state.settings,
    subSeries: state.subSeries
  }
}

export default connect(mapStateToProps)(Total)