import axios from "axios";

const api = axios.create({
  baseURL: "https://v2.kencana.org/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
