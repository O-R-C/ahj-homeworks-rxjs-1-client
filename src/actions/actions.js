import { LOAD_MESSAGES, SET_MESSAGES } from './actionTypes'

export const pollingLoadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  payload: messages,
})

export const pollingSetMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: JSON.parse(messages),
})
