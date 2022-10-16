import api from "../service/api";
import { User, Login } from "../types/auth";

export async function register(data: User){
    try {
        const response = await api.post(`/register`,data);
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export async function login(data: Login){
    try {
        const response = await api.post(`/login`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getUser(id: String){
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}