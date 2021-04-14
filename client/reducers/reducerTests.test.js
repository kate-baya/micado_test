import reducer from './subSeries'
import { receiveSubSeries } from '../actions/index'

describe('subSeries reducer', () => {
  test('initial state is an array of Objects', () => {
    const state = reducer(undefined, { type: '_INIT_' })
    expect(state).toEqual([{sub_series_name: 'Active'}, {sub_series_name: 'Deceased'}])
  })

  test('RECEIVE_SUBSERIES overwirtes and populates state', () => {
    const initialState = [{sub_series_name: 'Active'}, {sub_series_name: 'Deceased'}]
    const newSubSeries = [{sub_series_name: 'Recovered'}, {sub_series_name: 'Tests by day'}]
    const action = receiveSubSeries(newSubSeries)
    const state = reducer(initialState, action)
    expect(state).toEqual(newSubSeries)
  })
})


