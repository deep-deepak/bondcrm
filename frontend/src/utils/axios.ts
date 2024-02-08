import Axios from 'axios'
import { API_BASE_URL } from "src/constants";
import { removeLastChar } from 'src/helpers';

let token: string = "";
if(typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get('token');
    token = typeof tokenParam === "string" ? tokenParam : "";
}

const API_URL = removeLastChar(API_BASE_URL, "/", "/");

const axios = Axios.create({
    baseURL: API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${token}`
    },
    withCredentials: true,
});

export const csrf = async (highOrderFun: Function) => {
    try {
        await Axios.get(API_URL.replace('api/', "")+'sanctum/csrf-cookie');
        return await highOrderFun();
    } catch (error) {
        console.log(error)
    }
}


export default axios
