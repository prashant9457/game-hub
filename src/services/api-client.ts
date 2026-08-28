import axios from "axios";

export interface FetchResponse <T>{
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0ce994398eef4b728e3017b5102d9f62'
    }
})