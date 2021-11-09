export const getPodcasts = () => {
	return fetch("/api/podcasts", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
};

// export const getPodcast = (podcastId) => {
// 	return fetch("/data/podcasts.json", {
// 		headers: {
// 			"Content-Type": "application/json",
// 			Accept: "application/json",
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((podcasts) => {
// 			return podcasts.find((podcast) => podcast.id === parseInt(podcastId));
// 		});
// };
