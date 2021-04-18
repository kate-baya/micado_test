import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import App from './App'
import { getAllData } from '../apis/covidDataApi'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}
jest.mock('../apis/covidDataApi', () => ({
  getAllData: jest.fn()
}))

fakeStore.getState.mockImplementation(() => ({
  settings: {subSeries: 'Active', start: 'test2', end: 'test3'}
}))

describe('<App/>', () => {
  test('that getAllData gets called', () => {
    render(<Provider store={fakeStore}><App /></Provider>)
    expect(getAllData).toHaveBeenCalledWith(fakeStore.getState, fakeStore.dispatch)
  })
})

