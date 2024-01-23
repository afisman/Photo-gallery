import { createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY;

export const filterThunk = createAsyncThunk(
    "search/filterThunk",
    async (searchTerm) => {
        let apiUrl;
        if (searchTerm === '') {
            apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=20`;
        } else {
            apiUrl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchTerm}`;
        }


        const response = await fetch(apiUrl);
        const json = await response.json();
        return json;
    }
)