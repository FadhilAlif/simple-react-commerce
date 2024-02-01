import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("ONCREATE STORE => ", store.getState());

store.subscribe(() => {
  console.log("ONCHANGE Store => ", store.getState());
});

store.dispatch(
  cartSlice.actions.addToCart({ id: 2, title: "Product 2", price: 200 })
);
