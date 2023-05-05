import axios from "axios"

export const makeRequest = axios.create({
    baseURL:"http://localhost:5050/api/",
    withCredentials: true,
});