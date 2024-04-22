import axios from "axios";

export const ins = axios.create({
	baseURL: import.meta.env.BASE_URL,
	timeout: 8000
});

/** 拦截器 */
ins.interceptors.request.use((config) => {
	return config;
});

ins.interceptors.response.use((res) => {
	return res;
});
