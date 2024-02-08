import axios from "src/utils/axios";

export const getServices = async () => {
    return await axios.get('services').then(response => response.data);
}

export const getService = async (id: string) => {
    return await axios.get('services/' + id).then(response => response);
}