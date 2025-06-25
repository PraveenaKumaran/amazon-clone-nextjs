import axios from "axios";

const apiUrl = "http://localhost:3000";
const jwtKey = "accessToken";

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




export const createUrl = (endport: string) => new URL(endport,apiUrl).href; /*new URL {
                                                                                href: "https://http://localhost:3000/api/signup",
                                                                                origin: "https://http://localhost:3000",
                                                                                protocol: "https:",
                                                                                host: "localhost:3000",
                                                                                hostname: "localhost:3000",
                                                                                port: "3000",
                                                                                pathname: "/api/signup",
                                                                                search: "",
                                                                                hash: ""
                                                                            }*/
export const setStoredJwt = (accessToken: string) => {
    localStorage.setItem(jwtKey,accessToken);
}
export const isStoredJwt = () => Boolean(localStorage.getItem(jwtKey));