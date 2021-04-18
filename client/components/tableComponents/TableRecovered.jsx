import React from 'react'
import { connect } from 'react-redux'
import { numberFormat } from '../helperFunctions'

function TableRecovered({ allData }) {
  return (
    <>
      <div className='is-size-5 has-text-weight-bold bottom-border p-3 pl-5 pr-5 level'>
        <h1>Recovered</h1>
        <figure className="image is-24x24">
          <img src="/images/blue.png" />
        </figure>
      </div>
      <ul>
        {allData.Recovered.map(d => {
          return <li key={d.parameter} className='p-3 pl-5 border has-text-weight-medium'>
            {numberFormat(d.value)}
          </li>
        }
        )}
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    allData: state.allData
  }
}

export default connect(mapStateToProps)(TableRecovered)