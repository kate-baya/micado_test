import nock from 'nock'

import {getValues, getSubSeries, getAverages, getAverageData} from './covidDataApi'

afterAll(nock.restore) 
afterEach(nock.cleanAll)

describe.skip('getSubSeries', () => {
  const mockSubSeries = [{ key: 'val1' }, {key: 'val2'}, {key: 'val3'}]
  const scope = nock('http://localhost')
    .get('/api/v1/testData/subSeries')
    .reply(201, mockSubSeries)

  test('returns subSeries from api', () => {
    expect.assertions(2)
    return getSubSeries()
      .then(res => {
        expect(res).toEqual(mockSubSeries)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe.skip('getValues', () => {
  const settings = {subSeries : 'Active', start: '2020-03-20', end: '2020-03-21'}
  const mockValues = [{ subSeries: 'Active', parameter: '2020-03-20', value: 20 }, { subSeries: 'Active', parameter: '2020-03-21', value: 19}]
  const scope = nock('http://localhost')
    .get(`/api/v1/testData/${settings.subSeries}/${settings.start}/${settings.end}`)
    .reply(201, mockValues)
  test('returns subSeries from api', () => {
    expect.assertions(2)
    return getValues(settings.subSeries, settings.start, settings.end)
      .then(res => {
        expect(res).toEqual(mockValues)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})


describe('getAverages', () => {
  const settings = {subSeries : 'Active', start: '2020-03-20', end: '2020-03-21'}
  const mockValue = { subSeries: 'Active', value: 20 }
  const scope = nock('http://localhost')
    .get(`/api/v1/testData/total/${settings.subSeries}/${settings.start}/${settings.end}`)
    .reply(201, mockValue)
  test('returns AverageData object from api depending on which subSeries is entered', () => {
    return getAverages(settings.subSeries, settings.start, settings.end)
      .then(res => {
        expect(res).toEqual(20)
        expect(scope.isDone()).toBe(true)
        return null
      })
    })
})

