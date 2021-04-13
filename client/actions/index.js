export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVE_SUBSERIES = 'RECEIVE_SUBSERIES'
export const RECEIVE_CAT = 'RECEIVE_CAT'
export const RECEIVE_AVERAGES = 'RECEIVE_AVERAGES'

export const receiveData = (data) => {
  return {
      type: RECEIVE_DATA,
      data: data
  }
}

export const receiveSubSeries = (subSeries) => {
  return {
    type: RECEIVE_SUBSERIES,
    subSeries: subSeries
  }
}

export const receiveCat = (cat) => {
  return {
    type: RECEIVE_CAT,
    cat: cat
  }
}

export function receiveAverages(avg) {
  return {
  type: RECEIVE_AVERAGES,
  avg: avg
  }
}