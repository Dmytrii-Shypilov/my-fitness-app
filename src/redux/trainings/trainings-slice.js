import { createSlice } from '@reduxjs/toolkit'

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
});

export const { createTrainingSession } = trainingsSlice.actions;
export default trainingsSlice.reducer;
