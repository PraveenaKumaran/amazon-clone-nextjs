import axios from "axios";

const apiUrl = "http://localhost:3000";
jwtKey = "accessToken";

axios.interceptors.request.use(
    (config) => {
        const {origin} = new URL(config.url as string);
        const allowedOrigins = [apiUrl];
        if(allowedOrigins.includes(origin)){
            const accessToken = localStorage.getItem(jwtKey);
            config.headers.Authorization = 'Bearer ${accessToken}'
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); 
    }
);
