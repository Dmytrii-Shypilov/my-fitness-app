import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { requestAPI } from 'components/services/requestAPI';

export const fetchTrainings = createAsyncThunk(
  'trainings/fetch',
  async (token, { rejectWithValue }) => {
    try {
      const trainings = await requestAPI.fetchTrainings(token);
      return trainings;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTraining = createAsyncThunk(
  'trainings/add',
  async (training, { rejectWithValue }) => {
    try {
      const addedTraining = await requestAPI.addTraining(training)
      return addedTraining;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTraining = createAsyncThunk(
  'trainings/delete',
  async (id, { rejectWithValue }) => {
    try {
      const deletedOne = await requestAPI.deleteTraining(id);
        
      return deletedOne;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
