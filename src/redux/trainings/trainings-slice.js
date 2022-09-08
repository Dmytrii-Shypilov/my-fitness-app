import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    trainings: []
};

const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    createTrainingDay: (store, { payload }) => {
       store.trainings.push(payload)
    },
  },
});

export const { createTrainingDay } = trainingsSlice.actions;
export default trainingsSlice.reducer;
