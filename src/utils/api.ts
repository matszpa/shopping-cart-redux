import axios, {AxiosRequestConfig} from "axios";
import {Product} from "./types";

const API_URL = 'https://678a19d6-716c-483d-a662-3b655f4a84b9.mock.pstmn.io/'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = 'https://678a19d6-716c-483d-a662-3b655f4a84b9.mock.pstmn.io/'


export const getProducts = async () => {
    let {data} = await axios.get<Product[]>(`/test`);

    return data

}

