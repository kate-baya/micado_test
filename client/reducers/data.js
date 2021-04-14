import {RECEIVE_DATA} from '../actions/index'

const initialState = []

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data

    default:
      return state
  }
}

export default dataReducer