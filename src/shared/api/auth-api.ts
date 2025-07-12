import { api } from "./base";

export const authApi = {
  registration: (data: { email: string; password: string; name: string }) =>
    api.post("auth/registration", data, {
      withCredentials: true,
    }),
  login: (data: { email: string; password: string }) =>
    api.post("auth/login", data, {
      withCredentials: true,
    }),
};
