import { authApi } from "@/shared/api/auth-api";
import { RegistrationData, RegistrationResponse } from "@/shared/types/auth";
import { Status } from "@/shared/types/redux";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

type initialStateProps = {
  data: {
    user: {
      email: string;
      name: string;
    };
  } | null;
  status: Status;
  error: string | null;
};

const initialState: initialStateProps = {
  data: null,
  status: Status.IDLE,
  error: null,
};

export const registration = createAsyncThunk<
  RegistrationResponse,
  RegistrationData,
  { rejectValue: string }
>(
  "auth/registration",
  async ({ email, password, name }: RegistrationData, thunkAPI) => {
    try {
      const { data } = await authApi.registration({ email, password, name });

      return data;
    } catch (err) {
      const error = err as AxiosError<{ message: string; status: number }>;
      const message = error.response?.data?.message || "Registration failed";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.status = Status.LOADING;
        state.error = null;
        state.data = null;
      })
      .addCase(registration.fulfilled, (state) => {
        state.status = Status.SUCCEEDED;
      })
      .addCase(registration.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.data = null;
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
