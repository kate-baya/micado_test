import React from 'react'
import { connect } from 'react-redux'

function LoadData({ allData, testsByDay }) {
  const loaded = testsByDay
  if (loaded) {
    return <Test testsByDay={loaded} allData={allData} />
  }
  return 'Loading'
}

function Test({ allData }) {
  return (
    <div className='columns is-gapless'>
      <div className='column box m-1'>
        <div className='is-size-5 has-text-weight-semibold bottom-border p-3 level'>
          <h1>Date</h1>
          <figure class="image is-24x24">
            <img src="/images/calendar.png"/>
          </figure>
        </div>
        <ul>
          {allData.Recovered.map(d => {
            return <li key={d.parameter} className='p-3 border has-text-weight-medium'>
              {new Date(d.parameter).toString().substring(4, 15)}
            </li>
          }
          )}
        </ul>
      </div>
      <div className='column box m-1'>
      <div className='is-size-5 has-text-weight-semibold bottom-border p-3 level'>
          <h1>Daily Tests</h1>
          <figure class="image is-24x24">
            <img src="/images/therm.png"/>
          </figure>
        </div>
        <ul>
          {allData['Tests by day'].map(d => {
            return <li key={d.parameter} className='p-3 border has-text-weight-medium'>
              {d.value}
            </li>
          }
          )}
        </ul>
      </div>
      <div className='column box m-1'>
      <div className='is-size-5 has-text-weight-semibold bottom-border p-3 level'>
          <h1>Active</h1>
          <figure class="image is-24x24">
            <img src="/images/purple.png"/>
          </figure>
        </div>
        <ul>
          {allData.Active.map(d => {
            return <li key={d.parameter} className='p-3 border has-text-weight-medium'>
              {d.value}
            </li>
          }
          )}
        </ul>
      </div>
      <div className='column box m-1'>
      <div className='is-size-5 has-text-weight-semibold bottom-border p-3 level'>
          <h1>Recovered</h1>
          <figure class="image is-24x24">
            <img src="/images/blue.png"/>
          </figure>
        </div>
        <ul>
          {allData.Recovered.map(d => {
            return <li key={d.parameter} className='p-3 border has-text-weight-medium'>
              {d.value}
            </li>
          }
          )}
        </ul>
      </div>
      <div className='column box m-1'>
      <div className='is-size-5 has-text-weight-semibold bottom-border p-3 level'>
          <h1>Deceased</h1>
          <figure class="image is-24x24">
            <img src="/images/green.png"/>
          </figure>
        </div>        <ul>
          {allData.Deceased.map(d => {
            return <li key={d.parameter} className='p-3 border has-text-weight-medium'>
              {d.value}
            </li>
          }
          )}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allData: state.allData
  }
}

export default connect(mapStateToProps)(LoadData)