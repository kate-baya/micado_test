import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getValues, getSubSeries } from '../apis/covidDataApi'
import { receiveFilterOptions } from '../actions/index'

function Filter(props) {
  const [state, setState] = useState({
      subSeries: 'Recovered',
      start: '2020-03-01',
      end: '2021-02-15',
      filter: false
    })

  useEffect(() => {
    getValues(state.subSeries, state.start, state.end, props.dispatch) 
    getSubSeries(props.dispatch)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value, filter: true})
  }

  const handleSend = () => {
    getValues(state.subSeries, state.start, state.end, props.dispatch )
    props.dispatch(receiveFilterOptions(state))
    setState({...state, filter: false})
  }

  return (
    <>
      <div className={"dropdown is-right" + (state.filter ? ' is-active' : '')}>
        <div className="dropdown-trigger">
          <button className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => setState({...state, filter: true})}>
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
                        <span 
                        className={'tag' + (state.subSeries === e.sub_series_name ? ' is-primary' : '')} 
                        onClick={() => setState({...state, subSeries: e.sub_series_name, filter: true})} href="#"
                        >
                          {e.sub_series_name}
                        </span>
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
                  <button onClick={handleSend}>send</button>       
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
    subSeries: state.subSeries,
  }
}

export default connect(mapStateToProps, null)(Filter)