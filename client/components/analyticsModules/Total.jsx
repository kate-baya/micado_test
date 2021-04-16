import React from 'react'
import { connect } from 'react-redux'

function Total ({ allData }) {
  const loaded = allData['Total tests (cumulative)']
  if (loaded) {
    return <ShowTotal data={loaded} />
  } 
  return '...Loading'
}

function ShowTotal({ data }) {
  return (
    <>
      <div className='columns'>
        <div className='column'>
          <h1 className='is-size-5 has-text-weight-semibold'>{data[data.length-1].value}</h1>
          <p className='has-text-weight-medium'>Total Tests (Cumulative) since 1st March 2020</p>
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
    allData: state.allData,
  }
}

export default connect(mapStateToProps)(Total)