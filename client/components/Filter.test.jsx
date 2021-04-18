import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import Filter from './Filter'
import { receiveFilterOptions } from '../actions'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

const fakeAction = { type: 'fakeAction' }
jest.mock('../actions', () => ({
 receiveFilterOptions : jest.fn(() => fakeAction)
}))

describe.skip('<Filter />', () => {
  let button
  beforeEach(() => {
    render(<Provider store={fakeStore}><Filter /></Provider>)
    button = screen.getAllByRole('button')
    fireEvent.click(button)
  })
  test('clicking button dispatches receiveFilterOptions action', () => {
    expect(fakeStore.dispatch).toHaveBeenCalledWith()
    expect(receiveFilterOptions).toHaveBeenCalledWith({ subSeries: 'test1', start: 'test2', end: 'test3'})
  })
})
