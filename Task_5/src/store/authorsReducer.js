import {ADD_AUTHOR, FETCH_AUTHORS, REMOVE_AUTHOR} from './actionTypes'

const handlers = {
  [ADD_AUTHOR]: (state, {payload}) => ({
    ...state,
    authors: [...state.authors, payload]
  }),
  [FETCH_AUTHORS]: (state, {payload}) => ({...state, authors: payload}),
  [REMOVE_AUTHOR]: (state, {payload}) => ({
    ...state,
    authors: state.authors.filter(author => author.id !== payload)
  }),
  DEFAULT: state => state
}

export const authorsReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}