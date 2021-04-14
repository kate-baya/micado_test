import subSeriesReducer from './subSeries'
import settingsReducer from './settings'
import dataReducer from './data'
import { receiveSubSeries, receiveFilterOptions, receiveData } from '../actions/index'

describe('subSeries reducer', () => {
  test('initial state is an array of Objects', () => {
    const state = subSeriesReducer(undefined, { type: '_INIT_' })
    expect(state).toEqual([{sub_series_name: 'Active'}, {sub_series_name: 'Deceased'}])
  })

  test('RECEIVE_SUBSERIES overwirtes and populates state', () => {
    const initialState = [{sub_series_name: 'Active'}, {sub_series_name: 'Deceased'}]
    const newSubSeries = [{sub_series_name: 'Recovered'}, {sub_series_name: 'Tests by day'}]
    const action = receiveSubSeries(newSubSeries)
    const state = subSeriesReducer(initialState, action)
    expect(state).toEqual(newSubSeries)
  })
})

describe('settings reducer', () => {
  test('initial state is an object', () => {
    const state = settingsReducer(undefined, { type: '_INIT_' })
    expect(state).toEqual({subSeries: 'Active', start: '2020-02-28', end: '2021-02-15'})
  })

  test('RECEIVE_FILTER_OPTIONS overwirtes and populates state', () => {
    const initialState = {subSeries: 'Active', start: '2020-02-28', end: '2021-02-15'}
    const settings = {subSeries: 'Recovered', start: '2020-03-11', end: '2020-06-22'}
    const action = receiveFilterOptions(settings)
    const state = settingsReducer(initialState, action)
    expect(state).toEqual(settings)
  })
})

describe('data reducer', () => {
  test('initial state is an empty array', () => {
    const state = dataReducer(undefined, { type: '_INIT_' })
    expect(state).toEqual([])
  })

  test('RECEIVE_DATA populates state', () => {
    const initialState = []
    const newData = [{prop: 'val', prop2: 'val2'}, {prop: 'val3', prop2: 'val4'}]
    const action = receiveData(newData)
    const state = dataReducer(initialState, action)
    expect(state).toEqual(newData)
  })
})
