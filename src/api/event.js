import axiosInstance from "../utils/axiosInstance";

export const addEventApi = async (body) => {
  return await axiosInstance.post("/event", body);
};
export const updateEventApi = async ({ body, id }) => {
  return await axiosInstance.patch(`/event/${id}`, body);
};

export const deleteEventApi = async (id) => {
  return await axiosInstance.delete(`/event/${id}`);
};

export const fetchEventApi = async () => {
  return await axiosInstance.get("/event");
};
export const fetchEventByIdApi = async (id) => {
  return await axiosInstance.get(`/event/${id}`);
};
