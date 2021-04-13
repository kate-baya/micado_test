import {RECEIVE_AVERAGES} from '../actions'

const initialState = [
  {avg: '1.5714', subSeries: 'Active'},
  {avg: '279.2', subSeries: 'Total tests (cumulative)'},
  {avg: '0', subSeries: 'Deceased'},
  {avg: '23.8', subSeries: 'Tests by day'},
  {avg: '0', subSeries: 'Recovered'}
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_AVERAGES:
      return action.avg

    default:
      return state  
  }
}

export default reducer