import axios from "axios";

export const CLOUDINARY_URL =
  "https://api.cloudinary.com/v1_1/dx9hqtncs/image/upload";

const signedinUser =
  typeof window !== "undefined" &&
  localStorage.getItem("SignedInUser") &&
  localStorage.getItem("SignedInUser") !== "undefined" &&
  window?.JSON?.parse(localStorage.getItem("SignedInUser"));

const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000/api/v1",
  baseURL: "https://foundation-server-631db6cad4dc.herokuapp.com/api/v1",
  headers: { "Content-Type": "application/json" },
  timeout: 30 * 60 * 1000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const userToken =
      typeof window !== "undefined" &&
      localStorage &&
      localStorage.getItem("userToken");
    if (userToken) config.headers["Authorization"] = `Bearer ${userToken}`;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    if (!error?.response) return Promise.reject(error);

    if (signedinUser && error?.response?.status === 401) {
      localStorage.clear();
      // Router.push("/");
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
