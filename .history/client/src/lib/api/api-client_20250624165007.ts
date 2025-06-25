import axios from "axios";

axios.interceptors.request.use((config) => {
  console.log("📦 Axios Request Config:", config);
  return config;
});