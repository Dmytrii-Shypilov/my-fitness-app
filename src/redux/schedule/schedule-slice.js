import { createSlice } from '@reduxjs/toolkit';
import { fetchSchedule, addScheduleItem, deleteScheduleItem, deleteMultipleScheduleItems } from './schedule-operations';

const initialState = {
  schedule: [],
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState, 
  extraReducers: {
    [fetchSchedule.fulfilled]: (store, {payload}) => {
      if(payload.length > 0) {
        payload.sort((a, b) =>
        Number(a.time.split(':').join('')) >
        Number(b.time.split(':').join(''))
          ? 1
          : -1
      );
        store.schedule = [...payload]
      }
     return
    },
    [addScheduleItem.fulfilled]: (store, {payload}) => {
     store.schedule.push(payload)
     store.schedule.sort((a, b) =>
     Number(a.time.split(':').join('')) >
     Number(b.time.split(':').join(''))
       ? 1
       : -1
   );
  
    },
    [deleteScheduleItem.fulfilled]: (store, {payload}) => {
      store.schedule = store.schedule.filter(el=> el._id !== payload._id)
     
    },
    [deleteMultipleScheduleItems.fulfilled]: (store, {payload}) => {
      store.schedule = store.schedule.filter(el=> el.name !== payload.name)
    }
  }
});

export default scheduleSlice.reducer;
