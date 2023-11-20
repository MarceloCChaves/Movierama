import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./reducers/favorites";

const store = configureStore({
  reducer: {
    favorites: favoritesSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store;