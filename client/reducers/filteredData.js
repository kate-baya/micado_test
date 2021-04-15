import {RECEIVE_FILTERED_DATA} from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FILTERED_DATA:
      return action.filteredData

    default:
      return state
  }
}

export default reducer