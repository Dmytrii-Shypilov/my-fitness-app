import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAPI } from "components/services/requestAPI";

export const fetchSchedule = createAsyncThunk(
    'schedule/fetch',
    async (period, {rejectWithValue}) => {
        try {
            const schedule = await requestAPI.fetchSchedule(period)
            return schedule
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const addScheduleItem = createAsyncThunk(
    'schedule/add',
    async (item, {rejectWithValue}) => {
        try {
            const addedItem = await requestAPI.addScheduleItem(item)
            return addedItem
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteScheduleItem = createAsyncThunk(
    'schedules/delete',
    async (id, {rejectWithValue}) => {
        try {
           const deletedOne = await requestAPI.deleteScheduleItem(id) 
           return deletedOne
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteMultipleScheduleItems = createAsyncThunk(
    'schedules/delete/multiple',
    async (name, {rejectWithValue}) => {
        try {
            const deletedOne = await requestAPI.deleteMultipleScheduleItems(name)
            return deletedOne
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)