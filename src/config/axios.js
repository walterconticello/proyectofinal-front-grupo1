import axiosOriginal from "axios";

const axios = axiosOriginal.create({
  baseURL: import.meta.env.VITE_DB,
});

export default axios;
