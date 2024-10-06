import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {RegisterRequest} from "../common/types/User/RegisterRequest.ts";
import {LoginRequest} from "../common/types/User/LoginRequest.ts";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})

const axiosRequest = async <T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: RegisterRequest | LoginRequest,
    config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
    try {
        return await apiClient.request<T>({
            url: endpoint,
            method,
            data,
            ...config
        })
    } catch(error) {
        console.error('Error sending request:', error);
        throw error;
    }
} 

export { axiosRequest };