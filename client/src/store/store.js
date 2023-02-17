import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "../slices/productSlice";


export const store = configureStore({
  reducer: {
    allProducts: productsReducer,


  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
