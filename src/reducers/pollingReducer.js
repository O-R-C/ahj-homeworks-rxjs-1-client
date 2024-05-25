import { LOAD_MESSAGES, SET_MESSAGES } from '../actions/actionTypes'

const initialState = {
  messages: [],
}

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
