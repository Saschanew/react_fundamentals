import {ADD_COURSE, FETCH_COURSES, REMOVE_COURSE, GET_COURSE} from './actionTypes'

const handlers = {
  [ADD_COURSE]: (state, {payload}) => ({
    ...state,
    courses: [...state.courses, payload]
  }),
  [FETCH_COURSES]: (state, {payload}) => ({...state, courses: payload}),
  [GET_COURSE]: (state, {payload}) => ({...state, course: payload}),
  [REMOVE_COURSE]: (state, {payload}) => ({
    ...state,
    courses: state.courses.filter(course => course.id !== payload)
  }),
  DEFAULT: state => state
}

export const coursesReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}