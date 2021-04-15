import { combineReducers } from 'redux'

import filteredData from './filteredData'
import subSeries from './subSeries'
import settings from './settings'
import allData from './allData'

export default combineReducers({
  subSeries,
  filteredData,
  settings,
  allData
})
