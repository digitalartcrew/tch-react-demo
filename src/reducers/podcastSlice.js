import { createSlice } from "@reduxjs/toolkit";

const podcastSlice = createSlice({
	name: "podcast",
	initialState: {
		podcasts: [],
	},
	reducers: {
		setPodcasts: (state, action) => {
			state.podcasts = [...action.payload];
		},
		createPodcast: (state, action) => {
			state.podcasts = [...state.podcasts, action.payload];
		},
		updatePodcast: (state, action) => {
			state.podcasts = [...state.podcasts, ...action.payload];
		},
		removePodcast: (state, action) => {
			state.podcasts = [
				...state.podcasts.filter((podcast) => podcast.id !== action.payload.id),
			];
		},
	},
});

export const { setPodcasts, createPodcast, updatePodcast, removePodcast } =
	podcastSlice.actions;

export default podcastSlice.reducer;
