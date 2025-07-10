import { api } from "./base";

export const authApi = {
  registration: (data: { email: string; password: string; name: string }) =>
    api.post("auth/registration", data, {
      withCredentials: true,
    }),
};
