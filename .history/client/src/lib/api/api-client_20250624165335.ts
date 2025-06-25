import axios from "axios";

const apiUrl = "http://localhost:3000";
const jwtKey = "accessToken";

axios.interceptors.request.use((config) => {
  console.log("📦 Axios Request Config:", config);
  return config;
});


export const createUrl = (endpoint: string) => new URL(endpoint, apiUrl).href;
export const isStoredJwt = () => Boolean(localStorage.getItem(jwtKey));
export const setStoredJwt = (accessToken: string) =>
  localStorage.setItem(jwtKey, accessToken);

export const get = axios.get;
export const patch = axios.patch;
export const post = axios.post;
export const axiosDelete = axios.delete;