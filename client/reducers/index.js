import { combineReducers } from 'redux'

import data from './data'
import subSeries from './subSeries'
import cat from './cat'

export default combineReducers({
  subSeries,
  data,
  cat,
  averages
})
