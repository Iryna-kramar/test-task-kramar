import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL =
  "https://technical-task-api.icapgroupgmbh.com/api/table/?format=json";

interface UserState {
  isLoading: boolean;
  isFailed: boolean;
  data: Array<any>;
}

const initialState = {
  isLoading: false,
  isFailed: false,
  data: [],
} as UserState;

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data.results as any;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isFailed = false;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isFailed = true;
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
