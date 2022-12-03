import axios from "axios";

const axiosConfig = axios.create({
    baseURL: process.env.http_url_backend
});

export default axiosConfig;
