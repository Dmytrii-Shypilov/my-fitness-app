import { createSlice } from '@reduxjs/toolkit'
import { fetchTrainings } from './trainings-operations';

const initialState = {
    trainings: []
};

const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    createTrainingSession: (store, { payload }) => {
       store.trainings.push(payload)
    },
  },
  extraReducers: {
    [fetchTrainings.fulfilled]: (store, {payload}) => {
      store.trainings = [...payload]
    }

  }
});

export const { createTrainingSession } = trainingsSlice.actions;
export default trainingsSlice.reducer;
