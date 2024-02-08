import axios from "src/utils/axios";

export const getProvinces = async () => {
    return axios.get('provinces').then(response => response.data);
}

export const getProvince = async (id: string) => {
    return axios.get('provinces/' + id).then(response => response);
}