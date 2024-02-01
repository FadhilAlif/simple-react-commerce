import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

// TODO: createReducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("LOGIN");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// TODO: createStore
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
console.log("ONCREATE STORE => ", store.getState());

// TODO: subscribe
store.subscribe(() => {
  console.log("ONCHANGE STORE => ", store.getState());
});

// TODO: dispatch
store.dispatch(addToCart({ id: 1, title: "Product 1", price: 100 }));
store.dispatch(addToCart({ id: 2, title: "Product 2", price: 1100 }));
store.dispatch(login());
