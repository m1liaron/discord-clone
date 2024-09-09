import {createSlice} from "@reduxjs/toolkit";
import {Conversation} from "../common/types/Conversation/Conversation.ts";
import { DataStatus} from "../common/enums/app/DataStatus.ts";

interface ConversationState {
    conversations: [Conversation] | [],
    status: DataStatus,
    error: string | null
}

const initialState: ConversationState = {
    conversations: [],
    status: DataStatus.Idle,
    error: null
}

export const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {}
});

export const conversationReducers = conversationSlice.reducer;