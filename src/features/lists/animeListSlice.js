import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

export const animeListSlice = createSlice({
    name: "animeList",
    initialState,
    reducers: {
        addToList: (state, action) => {
            const listItem = {
                id: action.payload.id,
                title: action.payload.title,
                type: action.payload.type,
                img: action.payload.img
            }
            state.list.push(listItem);
        },
        removeFromList: (state, action) => {
            state.list = state.list.filter((anime) => anime.id !== action.payload.id);
        },
    },
});

export const { addToList, removeFromList } = animeListSlice.actions;

export default animeListSlice.reducer;
