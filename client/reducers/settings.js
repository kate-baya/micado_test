import {RECEIVE_FILTER_OPTIONS} from '../actions/index'

const initialState = {subSeries: 'Recovered', start: '2020-03-01', end: '2021-02-15'}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FILTER_OPTIONS:
      return action.settings

    default:
      return state
  }
}

export default reducer