export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVE_SUBSERIES = 'RECEIVE_SUBSERIES'
export const RECEIVE_CAT = 'RECEIVE_CAT'
export const APPEND_TOTAL = 'APPEND_TOTAL'

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

export function appendTotal(total) {
  console.log(total)
  return {
  type: APPEND_TOTAL,
  total: total
  }
}