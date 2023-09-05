import { createSlice } from "@reduxjs/toolkit";

export const userAppSlice = createSlice({
    name: "userApp",
    initialState: {
        status: false, // status login
        name: '',
        email: '',
        token: '',
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        setUserAndToken: (state, action) => {
            console.log('keisini')
            state.status = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        resetAll: (state, action) => {
            state.name = '';
            state.email = '';
            state.token = '';
        },
    },
});

export const { setToken, setUserAndToken, resetAll } = userAppSlice.actions;
export const stateUser = (state) => state.userApp.value;
export default userAppSlice.reducer;