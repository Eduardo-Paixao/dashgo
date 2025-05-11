import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/mock-api/",
});
export const AuthApi = axios.create({
  baseURL: "http://localhost:3333/",
});

