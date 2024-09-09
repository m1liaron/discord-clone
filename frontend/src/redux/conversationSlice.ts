import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    conversations: [],
    status: 'idle',
    error: null
}

export const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {}
});

export const conversationReducers = conversationSlice.reducer;