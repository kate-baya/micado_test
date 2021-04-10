import { combineReducers } from 'redux'

import test from './test'
import data from './data'
import subSeries from './subSeries'

export default combineReducers({
  subSeries,
  data,
  test 
})
