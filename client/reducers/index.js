import { combineReducers } from 'redux'

import data from './data'
import subSeries from './subSeries'
import cat from './cat'
import averages from './averages'

export default combineReducers({
  subSeries,
  data,
  cat,
  averages
})
