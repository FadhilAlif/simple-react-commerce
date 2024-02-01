import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("ONCREATE STORE => ", store.getState());

store.subscribe(() => {
  console.log("ONCHANGE Store => ", store.getState());
});

export default store;
