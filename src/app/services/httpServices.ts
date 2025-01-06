import { API_VERSION, baseUrl } from "@/constants";
import axios from "axios";

export const callApi = async (
    endpoint = '',
    method = 'GET', 
    body = {}, 
    version = '', 
    token = ''
    ) => {
    let API_URL = baseUrl + (version ? version : API_VERSION);

    let headres = {
        "Content-Type": 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Accept-Language": "*",
        "Authorization": token ? 'Bearer ' + token : ''
    }

    switch(method){
        case 'POST':
            const postPromise = await axios.post(`${API_URL}${endpoint}`, body, {
                headers: headres
            }) 
            return postPromise;
        case 'PUT': 
            const putPromise = await axios.put(`${API_URL}${endpoint}`, body, {
                headers: headres
            })
            return putPromise;
        default: 
            const promise = await axios.get(`${API_URL}${endpoint}`, {
                headers: headres
            })
            return promise;
    }
}

