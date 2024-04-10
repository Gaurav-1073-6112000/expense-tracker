import axios from "axios";
axios.defaults.withCredentials = true;
export const api = axios.create({
  baseURL: "https://expense-tracker-72av.onrender.com", //should be in .env
});
