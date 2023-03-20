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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const post = async (path: string, payload: any) => {
  const response = await api.post(path, payload);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const put = async (path: string, payload: any) => {
  const response = await api.put(path, payload);
  return response.data;
};

export const remove = async (path: string) => {
  const response = await api.delete(path);
  return response;
};
