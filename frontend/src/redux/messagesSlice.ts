import {createSlice} from "@reduxjs/toolkit";
import { Message } from "../common/types/Message/Message.ts";

interface MessagesState {
    messages: Message | null ,
    status: 'idle' | 'loading' | 'succeeded' | 'failed';  // Possible statuses
    error: string | null;  // Error message or null
}

const initialState: MessagesState = {
    messages: null,
    status: 'idle',
    error: null
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {}
});

export const messagesReducers = messagesSlice.reducer;