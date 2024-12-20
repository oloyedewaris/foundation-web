import axiosInstance from "../utils/axiosInstance";

export const addEventBookingApi = async (body) => {
  return await axiosInstance.post("/event-booking", body);
};
export const updateEventBookingApi = async ({ body, id }) => {
  return await axiosInstance.patch(`/event-booking/${id}`, body);
};

export const deleteEventBookingApi = async (id) => {
  return await axiosInstance.delete(`/event-booking/${id}`);
};

export const fetchEventBookingApi = async () => {
  return await axiosInstance.get("/event-booking");
};

export const fetchEventBookingByEventApi = async (id) => {
  return await axiosInstance.get(`/event-booking/${id}`);
};
