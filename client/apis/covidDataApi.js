import request from 'superagent'

const rootUrl = '/api/v1'

export function getValues(subSeries, start, end) {
  return request
    .get(`${rootUrl}/testData/${subSeries}/${start}/${end}`)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}