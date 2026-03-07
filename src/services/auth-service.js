import api from "./auth.js";

export const login = (data) => api.post("/v1/login", data);
export const signup = (data) => api.post("/v1/signup", data);
export const logout = () => api.post("/v1/logout");