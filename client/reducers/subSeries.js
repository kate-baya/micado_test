import {RECEIVE_SUBSERIES} from '../actions/index'

const initialState = [{sub_series_name: 'Active'}, {sub_series_name: 'Deceased'}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SUBSERIES:
      return action.subSeries

    default:
      return state
  }
}

export default reducer