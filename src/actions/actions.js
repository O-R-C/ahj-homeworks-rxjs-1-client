import { LOAD_MESSAGES, SET_MESSAGES } from './actionTypes'

/**
 * Creates an action object to load messages in the Redux store.
 *
 * @param {Array} messages - The messages to be loaded.
 * @return {Object} An action object with the type LOAD_MESSAGES and the messages as payload.
 */
export const pollingLoadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  payload: messages,
})

/**
 * Creates an action object to set the messages state in the Redux store.
 *
 * @param {string} messages - The serialized JSON string of messages.
 * @return {Object} An action object with the type SET_MESSAGES and the parsed JSON messages as payload.
 */
export const pollingSetMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: JSON.parse(messages),
})
