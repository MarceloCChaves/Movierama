import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./reducers/favorites";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  favorites: favoritesSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };