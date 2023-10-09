import axiosOriginal from "axios";

const axios = axiosOriginal.create({
  baseURL: "https://reservagol-app-api.onrender.com",
});

export default axios;
