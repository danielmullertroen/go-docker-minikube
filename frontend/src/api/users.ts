import axios from 'axios';
import type { User } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

// Add timeout and headers for better debugging
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const registerUser = async (name: string, email: string): Promise<User> => {
    const response = await axios.post(`${API_URL}/register`, { name, email });
    return response.data as User;
};

export const getUser = async (id: number): Promise<User> => {
    const response = await axiosInstance.get(`/user/${id}`);
    return response.data as User;
};