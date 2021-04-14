import reducer from './data'
import { receiveData } from '../actions/index'

describe('data reducer', () => {
  test('initial state is an empty array', () => {
    const state = reducer(undefined, { type: '_INIT_' })
    expect(state).toEqual([])
  })

  test('RECEIVE_DATA populates state', () => {
    const initialState = []
    const newData = [{prop: 'val', prop2: 'val2'}, {prop: 'val3', prop2: 'val4'}]
    const action = receiveData(newData)
    const state = reducer(initialState, action)
    expect(state).toEqual(newData)
  })
})