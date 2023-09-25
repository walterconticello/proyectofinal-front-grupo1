import axiosOriginal from "axios";

const axios = axiosOriginal.create({
  baseURL: "http://localhost:3000",
});

export default axios;
