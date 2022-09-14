import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  schedule: [],
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addTraining: (store, { payload }) => {
      const day = store.schedule.find(el => el.date === payload.date);
      const newTraining = {
        name: payload.name,
        time: payload.time,
      };
      if (day) {
        day.trainings.push(newTraining);
      } else if (!day) {
        const trainingDay = {
          date: payload.date,
          trainings: [newTraining],
        };
        store.schedule.push(trainingDay);
      }
    },
  },
});

export const { addTraining } = scheduleSlice.actions;
export default scheduleSlice.reducer;
