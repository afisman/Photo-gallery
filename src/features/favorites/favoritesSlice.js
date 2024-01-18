import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        status: 'idle',
        favoriteImages: [],
        error: null,
    },
    reducers: {
        addFavorites(state, action) {

        },
        removeFavorites(state, action) {

        }
    }
})