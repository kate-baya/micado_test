import reducer from './settings'
import { receiveFilterOptions } from '../actions/index'

describe('settings reducer', () => {
  test('initial state is an object', () => {
    const state = reducer(undefined, { type: '_INIT_' })
    expect(state).toEqual({subSeries: 'Active', start: '2020-02-28', end: '2021-02-15'})
  })

  test('RECEIVE_FILTER_OPTIONS overwirtes and populates state', () => {
    const initialState = {subSeries: 'Active', start: '2020-02-28', end: '2021-02-15'}
    const settings = {subSeries: 'Recovered', start: '2020-03-11', end: '2020-06-22'}
    const action = receiveFilterOptions(settings)
    const state = reducer(initialState, action)
    expect(state).toEqual(settings)
  })
})