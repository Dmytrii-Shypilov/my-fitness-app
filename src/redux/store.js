import { configureStore, combineReducers } from '@reduxjs/toolkit';
import trainingsReducer from './trainings/trainings-slice';
import scheduleReducer from './schedule/schedule-slice';

const reducer = combineReducers({
  schedule: scheduleReducer,
  trainings: trainingsReducer
});

const store = configureStore({
  reducer,
});

export default store;
