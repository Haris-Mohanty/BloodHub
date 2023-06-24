import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

//****** LOGIN **********/
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      //Store Token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//****** REGISTER **********/
export const userRegister = createAsyncThunk("auth/register", async({}));
