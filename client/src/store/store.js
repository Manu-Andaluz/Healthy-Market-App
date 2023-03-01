import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch, } from "../slices/productSlice";
import userReducer from "../slices/userSlice";
import productDetailReducer from "../slices/productDetailSlice";
import cartReducer from "../slices/cartSlice";



export const store = configureStore({
  reducer: {
    allProducts: productsReducer,
    user: userReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
   
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
