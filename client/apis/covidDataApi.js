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

export function getTotal(subSeries, start, end) {
  console.log('api hit')
  return request
    .get(`${rootUrl}/testData/total/${subSeries}/${start}/${end}`)
    .then(res => {
      console.log(res.body)
      res.body[0].subSeries = subSeries
      return res.body[0]
    })
}