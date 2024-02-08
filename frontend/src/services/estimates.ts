import axios from "src/utils/axios";

export const getEstimates = async (options: any = []) => {
    return await axios.get('estimates', {
        params: options
    }).then(response => response.data);
}

export const getEstimate = async (id: string) => {
    return await axios.get('estimates/' + id).then(response => response);
}