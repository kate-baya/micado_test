import {RECEIVE_CAT} from '../actions/index'

const initialState = 'Deceased'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CAT:
      return action.cat

    default:
      return state
  }
}

export default reducer