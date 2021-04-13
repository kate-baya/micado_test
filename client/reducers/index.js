import { combineReducers } from 'redux'

import data from './data'
import subSeries from './subSeries'
import settings from './settings'
import averages from './averages'

export default combineReducers({
  subSeries,
  data,
  settings,
  averages
})
