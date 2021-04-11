import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import { getValues } from '../apis/covidDataApi'
import { receiveData } from '../actions/index'

function Filter (props) {
  const [state, setState] = useState({
    subSeries: 'Deceased',
    start: '2020-04-30',
    end: '2020-05-20'
  })

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
    return setState({...state, [name]: value})
  }
  return (
    <div>
      <h1>Filter</h1>
      <div className="dropdown">
        <button className="dropbtn">Sub-Series</button>
        <div className="dropdown-content">
          {props.subSeries.map((e, idx) => <div key={idx}>
            <a onClick={() => setState({ ...state, subSeries: e.sub_series_name })} href="#">
              {e.sub_series_name}
            </a>
            {' '}
          </div>)}
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    subSeries: state.subSeries
  }
}

export default connect (mapStateToProps)(Filter)