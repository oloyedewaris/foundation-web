import axiosInstance from "../utils/axiosInstance";

export const addLeadershipApi = async (body) => {
  return await axiosInstance.post("/leadership", body);
};
export const updateLeadershipApi = async ({ body, id }) => {
  return await axiosInstance.patch(`/leadership/${id}`, body);
};

export const deleteLeadershipApi = async (id) => {
  return await axiosInstance.delete(`/leadership/${id}`);
};

export const fetchLeadershipApi = async () => {
  return await axiosInstance.get("/leadership");
};
export const fetchLeadershipByIdApi = async (id) => {
  return await axiosInstance.get(`/leadership/${id}`);
};
