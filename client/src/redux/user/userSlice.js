import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    currentuser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.currentuser = action.payload;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions; 
export default userSlice.reducer;