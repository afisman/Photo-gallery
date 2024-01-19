import { createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY;

export const filterThunk = createAsyncThunk(
    "search/filterThunk",
    async (searchTerm, page) => {
        let apiUrl;
        if (searchTerm === '') {
            apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=20`;
        } else {
            apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=20&page=${page}&client_id=${apiKey}`;
        }

        const response = await fetch(apiUrl);
        const json = await response.json();
        return json;
    }
)