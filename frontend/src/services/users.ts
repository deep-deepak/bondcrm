import axios from "src/utils/axios";

export const getUsers = async () => {
    return axios.get('representatives').then(response => response.data);
}

export const getUser = async (id: string) => {
    return axios.get('representatives/' + id).then(response => response.data);
}