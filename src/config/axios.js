import axiosOriginal from "axios";

const axios = axiosOriginal.create({
  baseURL: "http://localhost:8001",
});

export default axios;
