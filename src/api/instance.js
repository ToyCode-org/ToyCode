import axios from "axios";

export const base = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
