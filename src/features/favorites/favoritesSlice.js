import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteImages: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const newFavorites = action.payload;
            console.log(newFavorites)
            state.favoriteImages.push(newFavorites);
            localStorage.setItem("favorites", JSON.stringify(state.favoriteImages));
        },
        removeFavorite: (state, action) => {
            const deleteId = action.payload;
            console.log(deleteId)
            state.favoriteImages = state.favoriteImages.filter((img) => img.id !== deleteId);
            localStorage.setItem("favorites", JSON.stringify(state.favoriteImages));
        },
        updateFavorite: (state, action) => {
            const updatedImage = action.payload;
            state.favorites = state.favoriteImages.map((img) => (
                img.id === updatedImage.id ? updatedImage : img
            ))
            localStorage.setItem("favorites", JSON.stringify(state.favoriteImages));
        },
        sortFavorite: (state, action) => {
            state.favoriteImages = state.favoriteImages.sort((a, b) => a[action.payload] < b[action.payload] ? 1 : -1)
        }
    }
});

export const getFavoriteImages = (state) => state.favorites.favoriteImages;

export const { addFavorite, removeFavorite, updateFavorite, sortFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;