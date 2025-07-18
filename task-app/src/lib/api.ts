// src/lib/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`, // http://localhost:5173/api…
});