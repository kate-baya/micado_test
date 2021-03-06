import request from 'superagent'
import { receiveSubSeries, receiveAllData } from '../actions/index'
const rootUrl = '/api/v1'


export function getSubSeries(dispatch) {
  return request
    .get(`${rootUrl}/testData/subSeries`)
    .then(res => {
      return dispatch(receiveSubSeries(res.body))
    })
}

export function getAllData(settings, dispatch) {

  const data = {
    'Recovered': [],
    'Deceased': [],
    'Active': [],
    'Total tests (cumulative)': [],
    'Tests by day': []
  }

  const retrievedData = Object.keys(data).map(key => {
    return getAllValues(key, settings.start, settings.end, data)
  })

  return Promise.all(retrievedData).then(res => {
    return dispatch(receiveAllData(res[0]))
  })
}

export function getAllValues(key, start, end, data) {
  return request
    .get(`${rootUrl}/testData/${key}/${start}/${end}`)
    .then(res => {
      data[key] = res.body
      return data
    })
}
