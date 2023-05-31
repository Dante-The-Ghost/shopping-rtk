import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import cartReducer from "./cart/reducer";
import favouritesReducer from "./favourites/reducer";

import { api } from "../services/services";

const combinedReducers = combineReducers({
  cartReducer,
  favouritesReducer,
  [api.reducerPath]: api.reducer,
});

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });

export const store = setupStore();

setupListeners(store.dispatch);

export default store;
