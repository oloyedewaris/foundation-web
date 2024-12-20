import axiosInstance from "../utils/axiosInstance";

export const addLeadershipBookingApi = async (body) => {
  return await axiosInstance.post("/leadership-booking", body);
};
export const updateLeadershipBookingApi = async ({ body, id }) => {
  return await axiosInstance.patch(`/leadership-booking/${id}`, body);
};

export const deleteLeadershipBookingApi = async (id) => {
  return await axiosInstance.delete(`/leadership-booking/${id}`);
};

export const fetchLeadershipBookingApi = async () => {
  return await axiosInstance.get("/leadership-booking");
};

export const fetchLeadershipBookingByLeadershipApi = async (id) => {
  return await axiosInstance.get(`/leadership-booking/${id}`);
};
