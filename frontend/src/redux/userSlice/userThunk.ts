import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../utils/axiosRequest';
import {LoginRequest, LoginResponse, RegisterRequest} from '../../common/types/User/user.types';
import { AxiosResponse } from 'axios';

const onLogin = createAsyncThunk<LoginResponse, LoginRequest>(
    'user/login', 
    async (data: LoginRequest) => {
        const axiosInstance = await axiosRequest();
        const response: AxiosResponse<LoginResponse> = await axiosInstance.post('/user/login', data);
        return response.data
    }
)

const onRegister = createAsyncThunk<LoginResponse, RegisterRequest>(
    'user/register',
    async (data: RegisterRequest) => {
        const axiosInstance = await axiosRequest();
        const response: AxiosResponse<LoginResponse> = await axiosInstance.post('/user/register', data);
        return response.data
    }
)

export {
    onLogin,
    onRegister
}