import { combineReducers } from 'redux'

import data from './data'
import subSeries from './subSeries'
import settings from './settings'
import allData from './allData'

export default combineReducers({
  subSeries,
  data,
  settings,
  allData
})
