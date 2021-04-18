import React from 'react'
import { connect } from 'react-redux'
import { numberFormat } from '../helperFunctions'

function TableActive({ allData }) {
  return (
    <>
      <div className='is-size-5 has-text-weight-bold bottom-border p-3 pl-5 pr-5 level'>
        <h1>Active</h1>
        <figure className="image is-24x24">
          <img src="/images/purple.png" />
        </figure>
      </div>
      <ul>
        {allData.Active.map(d => {
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

export default connect(mapStateToProps)(TableActive)