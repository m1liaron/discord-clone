import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../utils/axiosRequest';
import { LoginRequest, LoginResponse, User } from '../../common/types/User/user.types';
import { AxiosResponse } from 'axios';

const onLogin = createAsyncThunk<LoginResponse, LoginRequest>(
    'user/login', 
    async (data: User) => {
        const axiosInstance = await axiosRequest();
        const response: AxiosResponse<LoginResponse> = await axiosInstance.post('/user/login', data);
        return response.data
    }
)

export {
    onLogin
}