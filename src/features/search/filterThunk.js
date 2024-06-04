import { createAsyncThunk } from "@reduxjs/toolkit";


const apiKey = import.meta.env.VITE_API_KEY;

export const filterThunk = createAsyncThunk(
    "search/filterThunk",
    async (searchTerm) => {
        let apiUrl;
        if (searchTerm === '') {
            apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=20`;
        } else {
            apiUrl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&$per_page=20&query=${searchTerm}`;
        }

        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            console.log(json)
            return json;
        } catch (error) {
            throw new Error('There was a problem loading the images.')
        }
    }
)