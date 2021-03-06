import {RECEIVE_ALL_DATA} from '../actions/index'

const initialState = {
  Active: [
    {}
  ],
  Recovered: [
    {}
  ],
  Deceased: [
    {}
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_DATA:
      return action.allData

    default:
      return state
  }
}

export default reducer