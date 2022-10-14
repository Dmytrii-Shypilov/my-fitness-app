import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logOutUser, getCurrentUser, logInUser } from "./user-operations";

const initialState = {
    email: null,
    token: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [registerUser.fulfilled]: (store, {payload}) => {
            store.email = payload.email
            store.token = payload.token
            localStorage.setItem('user', JSON.stringify({
                token: payload.token
              }))
        },
        [logOutUser.fulfilled]: (store, {payload}) => {
            store.email = null
            store.token = null
        },
        [getCurrentUser.fulfilled]: (store, {payload}) => {
            store.email = payload.email
            store.token = payload.token
        },
        [logInUser.fulfilled]: (store, {payload}) => {
            store.email = payload.email
            store.token = payload.token
            localStorage.setItem('user', JSON.stringify({
                token: payload.token
              }))
        }
    }
})

export default userSlice.reducer