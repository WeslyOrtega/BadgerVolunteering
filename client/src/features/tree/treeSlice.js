import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import treeService from "./treeService";

const initialState = {
  nodes: null,
  options: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Nodes
export const getNodes = createAsyncThunk(
  "tree/getNodes",
  async (thunkAPI) => {
    try {
      return await treeService.getNodes();
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

// Get Options
export const getOptions = createAsyncThunk(
    "tree/getOptions",
    async (thunkAPI) => {
      try {
        return await treeService.getOptions();
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
  



export const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    // reset: (state) => {
    //   state.data = [];
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isSuccess = false;
    //   state.message = "";
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNodes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNodes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.nodes = action.payload;
      })
      .addCase(getNodes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.nodes = null;
      })
      .addCase(getOptions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.options = action.payload;
      })
      .addCase(getOptions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.options = null;
      })
    
  },
});

export const { reset } = treeSlice.actions;
export default treeSlice.reducer;
