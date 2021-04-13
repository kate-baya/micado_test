import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getValues, getTotal } from '../apis/covidDataApi'
import { receiveData, receiveCat, receiveTotal, appendTotal } from '../actions/index'

function Filter(props) {
  const [state, setState] = useState({
    subSeries: 'Deceased',
    start: '2020-04-30',
    end: '2020-05-20',
  })

  const array = []
  const obj = {}

  useEffect(() => {
    props.dispatch(receiveCat(state.subSeries))
    getTotal(state.subSeries, state.start, state.end)
    .then(total => {
      array.push(total)
    })
  }, [])

  useEffect(() => {
    getValues(state.subSeries, state.start, state.end)
      .then(data => {
        props.dispatch(receiveData(data))
      })
      .catch(err => {
        console.log(err)
      })
    props.dispatch(receiveCat(state.subSeries))
    props.subSeries.map(sub => getTotal(sub.sub_series_name, state.start, state.end)
      .then(total => {
        array.push(total)
        console.log(array)
      }))
  }, [state])

  const handleChange = (e) => {
    const { name, value } = e.target
    return setState({ ...state, [name]: value })
  }

  return (
    <>
      <div className="dropdown is-hoverable is-right">
        <div className="dropdown-trigger">
          <button className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Filter</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>

        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <div className='columns'>
                <div className='column content'>
                  <ul>
                    {props.subSeries.map((e, idx) =>
                      <li key={idx}>
                        <a onClick={() => setState({ ...state, subSeries: e.sub_series_name })} href="#">
                          {e.sub_series_name}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div className='column'>
                  <form>
                    <div className='dates'>
                      <div className='start'>
                      <label>Start Date:</label>
                      <input
                        type='date'
                        name="start"
                        value={state.start}
                        onChange={handleChange}
                      />
                      </div>
                      <div>
                      <label>End Date:</label>
                      <input
                        type='date'
                        name="end"
                        value={state.end}
                        onChange={handleChange}
                      />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    subSeries: state.subSeries
  }
}

export default connect(mapStateToProps)(Filter)