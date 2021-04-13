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

export function getAverageData(subSeries, settings) {
  const retrievedData = subSeries.map(sub => {
    return getAverages(sub.sub_series_name, settings.start, settings.end)
  })

  return Promise.all(retrievedData).then(res => {
    console.log(res)
    return res
  })
}

function getAverages(subSeries, start, end) {
  console.log('api hit')
  return request
    .get(`${rootUrl}/testData/total/${subSeries}/${start}/${end}`)
    .then(res => {
      res.body[0].subSeries = subSeries
      return res.body[0]
    })
}
