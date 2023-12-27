import axios from "axios";
let axiosHttp = null;
axiosHttp = axios.create({
  baseURL: "http://localhost:3000",
});

export default axiosHttp;
