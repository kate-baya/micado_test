import {RECEIVE_SUBSERIES} from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SUBSERIES:
      return action.subSeries

    default:
      return state
  }
}

export default reducer