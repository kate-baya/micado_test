import request from 'superagent'

const rootUrl = '/api/v1'

export function getValues(subSeries, start, end) {
  return request
    .get(`${rootUrl}/testData/${subSeries}/${start}/${end}`)
    .then(res => {
      return res.body
    })
}

export function getSubSeries() {
  return request
    .get(`${rootUrl}/testData/subSeries`)
    .then(res => {
      return res.body
    })
}