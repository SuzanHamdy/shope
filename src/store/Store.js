import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import wishReducer from "./WishSlice";

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        wish: wishReducer,
    },
});

export default Store;
