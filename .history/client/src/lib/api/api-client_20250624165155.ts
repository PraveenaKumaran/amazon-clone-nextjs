import axios from "axios";

axios.interceptors.request.use((config) => {
  console.log("📦 Axios Request Config:", config);
  return config;
});

export const createUrl = (endpoint: string) => new URL(endpoint, apiUrl).href;

export const signup = async (username: string, password: string) => {
  const result = (
    await post(createUrl("/api/signup"), {
      username,
      password,
      firstName: "demo",
      lastName: "s",
    }).catch(() => null)
  )?.data;

  if (!result) {
    return alert("Could not sign up");
  }
  setStoredJwt(result.accessToken);
  return me();
};

export const post = axios.post;