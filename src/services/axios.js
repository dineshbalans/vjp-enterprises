import axios from "axios";

const LOCAL_HOST = "http://localhost:8000/api/v1";

const PROD_URL = "https://vjp.onrender.com/api/v1";

export const axiosInstance = axios.create({
  baseURL: LOCAL_HOST,
  withCredentials: true,
});
