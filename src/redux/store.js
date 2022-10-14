import { configureStore, combineReducers } from '@reduxjs/toolkit';
import trainingsReducer from './trainings/trainings-slice';
import scheduleReducer from './schedule/schedule-slice';
import exercisesReducer from './exercises/exercises-slice'
import userReducer from './user/user-slice'

const reducer = combineReducers({
  schedule: scheduleReducer,
  trainings: trainingsReducer,
  exercises: exercisesReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
});

export default store;
