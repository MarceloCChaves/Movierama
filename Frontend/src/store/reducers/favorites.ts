import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/IMove";
import { RootState } from "../index";

const initialState: IMovie[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IMovie>) => {
      const haveItem = state.some(
        (favorite) => favorite.id === Number(payload)
      );
      if (!haveItem)
        return [
          ...state,
          {
            id: payload.id,
            poster: payload.poster,
            title: payload.title,
          },
        ];
    },
    removeFavorite: (state, action: PayloadAction<IMovie>) => {
      return state.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectCount = (state: RootState) => state.favorites
export default favoritesSlice.reducer;
