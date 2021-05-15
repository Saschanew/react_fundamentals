import React, {useReducer} from 'react'
import axios from 'axios'
import AppContext from './AppContext'
import {coursesReducer} from './coursesReducer'
import {authorsReducer} from './authorsReducer'
import {userReducer} from './userReducer'
import {ADD_COURSE, FETCH_COURSES, GET_COURSE, REMOVE_COURSE, ADD_AUTHOR, FETCH_AUTHORS,  REMOVE_AUTHOR, LOGIN, LOGOUT, UPDATE_COURSE} from './actionTypes'

const url = 'http://localhost:3000'

export const State = ({children}) => {
  const initialState = {
    courses: [],
    course: {},
  }
  const initialStateAuthors = {
    authors: []
  }
  const initialStateUser = {
    user: {
      isAuth: false,
      name: '',
      email: '',
      password: '',
      token: '',
      role: ''
    }
  }
  const [state, dispatch] = useReducer(coursesReducer, initialState)
  const [stateAuthors, dispatchAuthors] = useReducer(authorsReducer, initialStateAuthors)
  const [stateUser, dispatchUser] = useReducer(userReducer, initialStateUser)

  const fetchCourses = async () => {
    const res = await axios.get(`${url}/courses/all`)

    const payload = Object.keys(res.data.result).map(key => {
      return {
        ...res.data.result[key]
      }
    })

    dispatch({type: FETCH_COURSES, payload})
  }

  const getCourse = async id => {
    const res = await axios.get(`${url}/courses/`, { params: { id  }})
    const payload = res.data.result

    dispatch({type: GET_COURSE, payload})
  }

  const addCourse = async newCourse => {

    try {
      const res = await axios.post(`${url}/courses/add`, newCourse);
      const payload = {
        ...newCourse
      }

      dispatch({type: ADD_COURSE, payload})

    } catch (e) {
      throw new Error(e.message)
    }
  }

  const updateCourse = id => {
    return dispatch => {
      axios.put(`${url}/courses`, id)
        .then(response => response.data)
        .then(result => dispatch({type: UPDATE_COURSE, result}))
    }
  }

  const removeCourse = async id => {
    await axios.delete(`${url}/courses`, id)

    dispatch({
      type: REMOVE_COURSE,
      payload: id
    })
  }

  const fetchAuthors = async () => {
    const res = await axios.get(`${url}/authors/all`)

    const payload = Object.keys(res.data.result).map(key => {
      return {
        ...res.data.result[key],
      }
    })

    dispatchAuthors({type: FETCH_AUTHORS, payload})
  }

  const addAuthor = async (id, name) => {
    const author = {
      id: id,
      name: name
    }

    try {
      const res = await axios.post(`${url}/authors/add`, author)
      const payload = {
        ...author,
        id: res.data.name
      }

      dispatchAuthors({type: ADD_AUTHOR, payload})

    } catch (e) {
      throw new Error(e.message)
    }
  }

  const removeAuthor = async id => {
    await axios.delete(`${url}/authors`, id)

    dispatchAuthors({
      type: REMOVE_AUTHOR,
      payload: id
    })
  }

  const login = async (user) => {
    try {
    const res = await axios.post(`${url}/login`, user)
      let token = res.data.result
    const data = await axios.get(`${url}/users/`, { params: { token  }})

    const payload = {
      user: data.result
    }

    dispatchUser({type: LOGIN, payload})
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return (
    <AppContext.Provider value={{
      addCourse, removeCourse, fetchCourses, getCourse, addAuthor, removeAuthor, fetchAuthors, login, updateCourse,
      courses: state.courses,
      course: state.course,
      authors: stateAuthors.authors,
      user: stateUser.user
    }}>
      {children}
    </AppContext.Provider>
  )
}
