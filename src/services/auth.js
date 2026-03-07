import axios from "axios";

const api = axios.create({
  baseURL: "https://job-application-tracker-backend-c62w.onrender.com",
  withCredentials: true 
});

export default api;