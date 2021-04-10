export const RECEIVE_ACTIVE = 'RECEIVE_ACTIVE'

export const receiveActive = (active) => {
  return {
      type: RECEIVE_ACTIVE,
      active: active
  }
}