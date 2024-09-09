import axios, { AxiosInstance } from "axios";

const axiosRequest = async (): Promise<AxiosInstance> => {
    try {

        return axios.request({
            baseURL: `https://localhost:3000`,
            headers: {
                'Content-Type': 'application/json',
              },
        });
    } catch(error) {
        console.error('Error sending request:', error);
        throw error;
    }
} 

export { axiosRequest };