import { legacy_createStore } from "redux";

// Reducer
const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        title: "Product 1",
        price: 100,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = legacy_createStore(cartReducer);
console.log("onCreate store => ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("onSubscribe store => ", store.getState());
});

// Dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    title: "Product 2",
    price: 200,
  },
};
store.dispatch(action1);

export default cartReducer;
