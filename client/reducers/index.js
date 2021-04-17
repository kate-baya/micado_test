import { combineReducers } from 'redux'

import subSeries from './subSeries'
import settings from './settings'
import allData from './allData'
import data from './data'

export default combineReducers({
  subSeries,
  settings,
  allData,
  data
})
