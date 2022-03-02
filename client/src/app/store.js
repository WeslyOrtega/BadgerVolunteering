import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";
import treeReducer from "../features/tree/treeSlice";
export const store = configureStore({
  reducer: {
    data: dataReducer,
    tree: treeReducer,
  },
});
