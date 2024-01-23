import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteImages: JSON.parse(localStorage.getItem("favorites")) || [],
        filter: null,
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
        filterFavorite: (state, action) => {
            state.favoriteImages = state.favoriteImages.filter((img) => (
                img.description.toLowerCase().includes(action.payload)
            ))
            console.log(state.favoriteImages)
        }
    }
});

export const getFavoriteImages = (state) => state.favorites.favoriteImages;
export const getFilter = (state) => state.favorites.filter;



export const { addFavorite, removeFavorite, updateFavorite, filterFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;