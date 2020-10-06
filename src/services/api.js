import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.0.103:3333",
});

export const list = async () => {
  return api.get("/repositories");
};

export const like = async (id) => {
  return api.post(`/repositories/${id}/like`);
};

export default api;
