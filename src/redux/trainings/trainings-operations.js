import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { requestAPI } from "components/services/requestAPI";

export const fetchTrainings = createAsyncThunk(
    "trainings/fetch",
    async (token, {rejectWithValue}) => {
        try {
            const trainings = await requestAPI.fetchTrainings(token)
            return trainings
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)