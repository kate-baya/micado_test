import {RECEIVE_ACTIVE} from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ACTIVE:
      return action.active

    default:
      return state
  }
}

export default reducer