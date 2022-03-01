import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataService from "./dataService";

const initialState = {
  options: null,
  data: [],
  final: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// Get Node
export const getNode = createAsyncThunk(
  "data/getNode",
  async (_id, thunkAPI) => {
    try {
      return await dataService.getNode(_id);
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

// Get Data
export const getData = createAsyncThunk(
  "data/getData",
  async (_id, thunkAPI) => {
    try {
      return await dataService.getData(_id);
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


// Get Final Options
export const getFinal = createAsyncThunk(
  "data/getFinal",
  async (_id, thunkAPI) => {
    try {
      return await dataService.getFinal(_id);
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
    reset: (state) => {
      state.data = [];
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.options = action.payload;
      })
      .addCase(getNode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.options = null;
      })
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.push(action.payload);
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = null;
      })
      .addCase(getFinal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFinal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.final.push(action.payload);
      })
      .addCase(getFinal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = null;
      });
  },
});

export const { reset } = dataSlice.actions;
export default dataSlice.reducer;
