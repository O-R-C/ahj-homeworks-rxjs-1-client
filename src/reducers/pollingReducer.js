import { LOAD_MESSAGES, SET_MESSAGES } from '../actions/actionTypes'

const initialState = {
  messages: [],
}

/**
 * Reducer function for handling actions related to polling.
 *
 * @param {Object} state - The current state of the reducer.
 * @param {Object} action - The action object that is being dispatched.
 * @return {Object} The updated state after applying the action.
 */
export const pollingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      }
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      }
    default:
      return state
  }
}
