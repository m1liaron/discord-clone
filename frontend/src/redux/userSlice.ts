import {createSlice} from "@reduxjs/toolkit";
import { User, RegisterRequest, LoginRequest } from "../common/types/User/user.types.ts";

interface UserState {
    user: User | RegisterRequest | LoginRequest | null ,
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