import {createSlice} from "@reduxjs/toolkit";
import {User} from "../common/types/types.ts";

interface UserState {
    user: User | null,
    status: 'idle' | 'loading' | 'succeeded' | 'failed';  // Possible statuses
    error: string | null;  // Error message or null
}

const initialState: UserState = {
    user: null,
    status: 'idle',
    error: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
});

export const userReducers = userSlice.reducer;