import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (path: string) => {
  const response = await api.get(path);
  return response.data;
};

export const post = async <T>(path: string, payload: T) => {
  const response = await api.post(path, payload);
  return response.data;
};

export const put = async <T>(path: string, payload: T) => {
  const response = await api.put(path, payload);
  return response.data;
};

export const remove = async (path: string) => {
  const response = await api.delete(path);
  return response;
};
