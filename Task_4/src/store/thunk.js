import {createStore, combineReducers, applyMiddleware} from 'redux'
import userReducer from './userReducer'
import authorsReducer from './authorsReducer'
import coursesReducer from './coursesReducer'
import {composeWithDevTols} from 'redux-devtools-extention'
import {thunk} from 'redux-thunk'


const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    authors: authorsReducer
})

export const store = createStore(rootReducer, composeWithDevTols(applyMiddleware(thunk)))

//https://www.youtube.com/watch?v=CtrWoX_KDjE