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

// export function getAverageData(subSeries, settings) {
//   const retrievedData = subSeries.map(sub => {
//     return getAverages(sub.sub_series_name, settings.start, settings.end)
//   })

//   return Promise.all(retrievedData).then(res => {
//     console.log(res)
//     return res
//   })
// }

// export function getAverages(subSeries, start, end) {
//   console.log('api hit')
//   return request
//     .get(`${rootUrl}/testData/total/${subSeries}/${start}/${end}`)
//     .then(res => {
//       res.body[0].subSeries = subSeries
//       return res.body[0]
//     })
// }

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
