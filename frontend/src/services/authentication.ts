import { LoginParams } from "src/context/types";
import axios, { csrf } from "src/utils/axios";

export const login = async (data: LoginParams) => {
    return axios.post('auth/login', data).then(response => response.data);
}

export const getLoginUser = async () => {
    return axios.get('auth/user').then(response => response.data);
}

export const logout = async () => {
    return await csrf(() => axios.post('auth/logout').then(response => response.data));
}

export const refresh = async () => {
    return await csrf(() => axios.post('auth/refresh').then(response => response.data));
}

export const updateLastLogin = async () => {
    return await csrf(() => axios.post('auth/last-login').then(response => response.data));
}