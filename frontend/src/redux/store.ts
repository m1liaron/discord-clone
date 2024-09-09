import {configureStore} from "@reduxjs/toolkit";
import {userReducers} from "./userSlice.ts";


export const store = configureStore({
    reducer: {
        user: userReducers
    }
});