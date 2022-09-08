import { configureStore, combineReducers } from '@reduxjs/toolkit';
import trainingsReducer from './trainings/trainings-slice'

const store = configureStore({
    reducer: trainingsReducer,
})

export default store