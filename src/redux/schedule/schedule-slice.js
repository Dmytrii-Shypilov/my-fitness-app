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
        // sort out in order by time (day.trainings)
        day.trainings.sort((a, b) =>
          Number(a.time.split(':').join('')) >
          Number(b.time.split(':').join(''))
            ? 1
            : -1
        );
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
