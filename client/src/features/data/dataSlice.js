import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataService from "./dataService";

const initialState = {
  user_id: null,
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get initial data
export const getBegin = createAsyncThunk("data/getBegin", async (thunkAPI) => {
  try {
    return await dataService.getBegin();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Get Data
export const getData = createAsyncThunk(
  "data/getData",
  async (data, thunkAPI) => {
    try {
      return await dataService.getData(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Return final response
export const sendResponse = createAsyncThunk(
  "data/sendResponse",
  async (data, thunkAPI) => {
    try {
      return await dataService.sendResponse(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBegin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBegin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user_id = action.payload;
      })
      .addCase(getBegin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user_id = null;
      })
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = null;
      })
      .addCase(sendResponse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendResponse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(sendResponse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = dataSlice.actions;
export default dataSlice.reducer;
