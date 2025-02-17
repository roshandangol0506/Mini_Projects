import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import boxSlice from "./features/box/boxSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    box: boxSlice,
  },
});
