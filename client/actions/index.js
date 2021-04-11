export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVE_SUBSERIES = 'RECEIVE_SUBSERIES'

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