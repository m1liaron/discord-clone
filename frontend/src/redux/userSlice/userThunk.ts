import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../utils/axiosRequest';
import {LoginRequest, LoginResponse, RegisterRequest} from '../../common/types/User/user.types';
import { AxiosResponse } from 'axios';
import {ApiPath} from "../../common/enums/app/ApiPath.ts";

const onLogin = createAsyncThunk<LoginResponse, LoginRequest>(
    'user/login', 
    async (data: LoginRequest) => {
        const response: AxiosResponse<LoginResponse> = await axiosRequest(`/${ApiPath.Auth}/login`, 'POST', data);
        return response.data
    }
)

const onRegister = createAsyncThunk<LoginResponse, RegisterRequest>(
    'user/register',
    async (data: RegisterRequest) => {
        const response: AxiosResponse<LoginResponse> = await axiosRequest(`/${ApiPath.Auth}/register`, 'POST', data);
        return response.data
    }
)

export {
    onLogin,
    onRegister
}