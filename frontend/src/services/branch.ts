import axios from "src/utils/axios";

export const getBranches = async () => {
    return await axios.get('branches').then(response => response.data);
}

export const getBranch = async (id: string) => {
    return await axios.get('branches/' + id).then(response => response);
}