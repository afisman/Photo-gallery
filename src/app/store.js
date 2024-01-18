import { favoritesSlice } from "../features/favoritesSlice";
import { searchSlice } from "../features/searchSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        favorite: favoritesSlice.reducer,
        search: searchSlice.reducer,
    }
})