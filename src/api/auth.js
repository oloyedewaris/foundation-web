import axiosInstance from "../utils/axiosInstance";

export const registerApi = async (body) => {
  return await axiosInstance.post("/auth/register", body);
};

export const loginApi = async (body) => {
  return await axiosInstance.post("/auth/login", body);
};
