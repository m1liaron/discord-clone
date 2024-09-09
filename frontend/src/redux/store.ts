import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./userSlice/userSlice.ts";
import { conversationReducers } from "./conversationsSlice.ts";
import { messagesReducers } from "./messagesSlice.ts";

export const store = configureStore({
    reducer: {
        user: userReducers,
        conversation: conversationReducers,
        messages: messagesReducers
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;