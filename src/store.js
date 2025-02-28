import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
// import { productReducer } from "./reducers/productReducer";
import { userReducer } from "./Reducers/userReducer";
// import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  //   products: productReducer,
  user: userReducer,
  //   cart: cartReducer,
});

let initialState = {
  //   cart: {
  //     cartItems: localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : [],
  //     shippingInfo: localStorage.getItem("shippingInfo")
  //       ? JSON.parse(localStorage.getItem("shippingInfo"))
  //       : {},
  //   },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
