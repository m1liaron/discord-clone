import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./userSlice.ts";
import { conversationReducers } from "./conversationSlice.ts";

export const store = configureStore({
    reducer: {
        user: userReducers,
        conversation: conversationReducers
    }
});