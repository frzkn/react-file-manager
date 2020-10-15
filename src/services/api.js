import axios from "axios";

export const getToken = () => {
  return localStorage.getItem("jwt_token");
};

export const api = axios.create({
  baseURL: "https://interview.skizzle.email",
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const login = (creds) => api.post("/login/", creds);
export const register = (creds) => api.post("/register/", creds);
export const me = () => api.get("/me/");
export const fileFolder = () => api.get("/file-folder/");
export const newFileFolder = (data) => api.post("/file-folder/", data);
