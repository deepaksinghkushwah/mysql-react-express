import axiosHttp from "./axiosHTTP";
import {jwtDecode } from "jwt-decode";
/*import {timeout} from "../utils/DateFunc";*/
const createUserSlice = (set) => ({
  name: "User",
  user: null,
  token: null,
  setUser: async (user) => {
    set({ user: user });
  },
  getUser: async (id) => {
    const json = await axiosHttp.get(`/users/${id}`);
    return await json.data;
  },
  signIn: async (email, password) => {
    try {
      //await timeout(2000);
      const json = await axiosHttp.post("/auth/login", { email, password });
      const data = await json.data;
      const s = jwtDecode(data.token);
      const user = {email: s.email, id: s.id, role: s.role, fullname: s.fullname};
      localStorage.setItem("userData", user);
      set(() => ({
        user: user,
        token: data.token,
      }));
      return data.token;
    } catch (error) {
      return null;
    }
  },
  signUp: async (form) => {
    try {
      const json = await axiosHttp.post("/users", form);
      const data = await json.data;
      return data.success;
    } catch (error) {
      return null;
    }
  },
  signOut: () => {
    localStorage.removeItem("userData");
    set({
      user: null,
      token: null,
    });
  },
});

export default createUserSlice;
