import {RECEIVE_FILTER_OPTIONS} from '../actions/index'

const initialState = {subSeries: 'Active', start: '2020-02-28', end: '2021-02-15'}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FILTER_OPTIONS:
      return action.settings

    default:
      return state
  }
}

export default settingsReducer