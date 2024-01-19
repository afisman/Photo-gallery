import { createSlice } from "@reduxjs/toolkit";
import { filterThunk } from "./filterThunk";


export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        status: 'idle',
        searchItems: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(filterThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(filterThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.searchItems = action.payload;
            })
            .addCase(filterThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
});

export const fetchSearchItems = (state) => state.search.searchItems;
export const fetchStatus = (state) => state.search.status;
export const fetchError = (state) => state.search.error;

export default searchSlice.reducer;