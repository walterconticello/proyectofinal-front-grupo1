import axiosOriginal from "axios";

const axios = axiosOriginal.create({
	baseURL: "http://localhost:4000",
});


export default axios;