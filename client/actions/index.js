export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVE_SUBSERIES = 'RECEIVE_SUBSERIES'
export const RECEIVE_FILTER_OPTIONS = 'RECEIVE_FILTER_OPTIONS'
export const RECEIVE_ALL_DATA = 'RECEIVE_ALL_DATA'

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

export const receiveFilterOptions = (settings) => {
  return {
    type: RECEIVE_FILTER_OPTIONS,
    settings: settings
  }
}

export const receiveAllData = (allData) => {
  return {
    type: RECEIVE_ALL_DATA,
    allData: allData
  }
}
