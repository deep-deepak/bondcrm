import axios from "src/utils/axios";

export const getAllStatus = async () => {
    return await axios.get('statuses').then(response => response.data);
}

export const getStatus = async (id: string) => {
    return await axios.get('statuses/' + id).then(response => response);
}