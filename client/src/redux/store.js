import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import alertReducer from './alertSlice'
 
const rootReducer=combineReducers({
    alerts:alertReducer,
})

const store=configureStore({
    reducer:rootReducer,
}) 
export default store;