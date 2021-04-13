import {RECEIVE_AVERAGES} from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_AVERAGES:
      return [action.averages]

    default:
      return state  
  }
}

export default reducer