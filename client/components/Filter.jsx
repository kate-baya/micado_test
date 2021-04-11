import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getValues } from '../apis/covidDataApi'
import { receiveData } from '../actions/index'

function Filter(props) {
  const [state, setState] = useState({
    subSeries: 'Deceased',
    start: '2020-04-30',
    end: '2020-05-20'
  })

  const [filterOptions, showFilterOptions] = useState(false)

  useEffect(() => {
    getValues(state.subSeries, state.start, state.end)
      .then(data => {
        props.dispatch(receiveData(data))
      })
      .catch(err => {
        console.log(err)
      })
  }, [state])

  const handleChange = (e) => {
    const { name, value } = e.target
    return setState({ ...state, [name]: value })
  }

  const handleClick = () => {
    !filterOptions ? showFilterOptions(true) : showFilterOptions(false)
  }
  return (
    <div>
      <button className='button is-dark' onClick={handleClick}>Filter</button>
      
      {filterOptions && <div className='level'>
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Sub-Series</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>

        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {props.subSeries.map((e, idx) => <div key={idx} className="dropdown-item">
              <a onClick={() => setState({ ...state, subSeries: e.sub_series_name })} href="#">
                {e.sub_series_name}
              </a>
            </div>)}
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </div>

      <form>
        <div className='dates'>
          <label>Start Date:</label>
          <input
            type='date'
            name="start"
            value={state.start}
            onChange={handleChange}
          />
          <label>End Date:</label>
          <input
            type='date'
            name="end"
            value={state.end}
            onChange={handleChange}
          />
        </div>
      </form>
      </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    subSeries: state.subSeries
  }
}

export default connect(mapStateToProps)(Filter)