import {RECEIVE_DATA, RECEIVE_SUBSERIES, RECEIVE_FILTER_OPTIONS, 
receiveData, receiveFilterOptions, receiveSubSeries} from './index'

const fakeDispatch = jest.fn()

describe('receiveData', () => {
  describe('action working correctly', () => {
    const fakeData = [{
      subSeries: 'Active',
      parameter: '2020-03-20',
      value: 20,
    },
    {
      subSeries: 'Active',
      parameter: '2020-03-21',
      value: 10,
    }]

    beforeAll(() => {
      jest.clearAllMocks()
      fakeDispatch(receiveData(fakeData))
    })

    test('returns correct action', () => {
      const action = receiveData(fakeData)
      expect(action.type).toBe(RECEIVE_DATA)
      expect(action.data[0].subSeries).toBe('Active')
    })

    test('dispatch receiveData actions via getValues', () => {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(RECEIVE_DATA)
      expect(fakeDispatch.mock.calls[0][0].data).toEqual(fakeData)
    })
  })
})

describe('receiveSubSeries', () => {
  describe('action working correctly', () => {
    const fakeSubSeries = [
    {sub_series_name: 'Active'},
    {sub_series_name: 'Recovered'}]
    

    beforeAll(() => {
      jest.clearAllMocks()
      fakeDispatch(receiveSubSeries(fakeSubSeries))
    })

    test('returns correct action', () => {
      const action = receiveSubSeries(fakeSubSeries)
      expect(action.type).toBe(RECEIVE_SUBSERIES)
      expect(action.subSeries[0].sub_series_name).toBe('Active')
    })

    test('dispatch receiveSubSeries actions', () => {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(RECEIVE_SUBSERIES)
      expect(fakeDispatch.mock.calls[0][0].subSeries).toEqual(fakeSubSeries)
    })
  })
})

describe('receiveSettings', () => {
  describe('action working correctly', () => {
    const fakeSettings =  {subSeries: 'Recovered', start: '2020-04-28', end: '2020-05-15'}
    

    beforeAll(() => {
      jest.clearAllMocks()
      fakeDispatch(receiveFilterOptions(fakeSettings))
    })

    test('returns correct action', () => {
      const action = receiveFilterOptions(fakeSettings)
      expect(action.type).toBe(RECEIVE_FILTER_OPTIONS)
      expect(action.settings.subSeries).toBe('Recovered')
    })

    test('dispatch receiveFilterOptions actions', () => {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(RECEIVE_FILTER_OPTIONS)
      expect(fakeDispatch.mock.calls[0][0].settings).toEqual(fakeSettings)
    })
  })
})