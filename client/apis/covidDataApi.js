import request from 'superagent'

const rootUrl = '/api/v1'


export function getSubSeries() {
  return request
    .get(`${rootUrl}/testData/subSeries`)
    .then(res => {
      return res.body
    })
}

export function getValues(subSeries, start, end) {
  return request
    .get(`${rootUrl}/testData/${subSeries}/${start}/${end}`)
    .then(res => {
      return res.body
    })
}

export function getAverageData(settings) {

  const data = {
    Recovered: [],
    Deceased: [],
    Active: [],
  }

  const arr = Object.keys(data)
  console.log(arr)
  const retrievedData = arr.map(key => {
    return getAllValues(key, settings.start, settings.end, data)
  })

  return Promise.all(retrievedData).then(res => {
    return res[0]
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
