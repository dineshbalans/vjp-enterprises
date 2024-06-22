import axios from "axios";

const LOCAL_HOST = "http://localhost:8000/api/v1";

const PROD_URL = "http://vjpenterprises.in/api/v1";

export const axiosInstance = axios.create({
  baseURL: PROD_URL,
  withCredentials: true,
});
