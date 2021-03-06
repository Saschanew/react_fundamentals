import {LOGIN, LOGOUT} from './actionTypes'

const handlers = {
  [LOGIN]: (state, {payload}) => ({
    ...state,
    user: payload
  }),
  [LOGOUT]: (state, {payload}) => ({
      ...state, 
      user: payload
    }),
  DEFAULT: state => state
}

export const userReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}