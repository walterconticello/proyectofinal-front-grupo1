import axiosOriginal from "axios"

const axios = axiosOriginal.create({
	baseURL: "http://localhost:5500",
});


export default axios;