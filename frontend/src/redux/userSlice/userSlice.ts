import { createSlice, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {User, LoginResponse} from "../../common/types/User/user.types.ts";
import { onLogin, onRegister } from './userThunk.ts';
import { DataStatus } from "../../common/enums/app/DataStatus.ts";
import { RootState } from '../store.ts';

interface UserState {
    user: User | LoginResponse | null ,
    status: DataStatus;  // Possible statuses
    error: string | null;  // Error message or null
}

const initialState: UserState = {
    user: null,
    status: DataStatus.Idle,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
        builder
            .addCase(onLogin.pending, (state: UserState) => {
                state.status = DataStatus.Pending;
            })
            .addCase(onLogin.fulfilled, (state: UserState, action: PayloadAction<LoginResponse>) => {
                state.status = DataStatus.Success;
                state.user = action.payload;
            })
            .addCase(onLogin.rejected, (state: UserState, action: PayloadAction<string | null>) => {
                state.status = DataStatus.Error;
                state.error = action.payload;
            })

            .addCase(onRegister.pending, (state: UserState) => {
                state.status = DataStatus.Pending;
            })
            .addCase(onRegister.fulfilled, (state: UserState, action: PayloadAction<LoginResponse>) => {
                state.status = DataStatus.Success;
                state.user = action.payload;
            })
            .addCase(onRegister.rejected, (state: UserState, action: PayloadAction<string | null>) => {
                state.status = DataStatus.Error;
                state.error = action.payload;
            });
    },
});

export const selectUser = (state: RootState) => state.user.user;
export const userReducers = userSlice.reducer;