const PodcastPage = () => {
	const podcastData = [
		{ id: 1, title: "TCH Episode 1", host: "Donte Burney", audioLink: "" },
		{ id: 2, title: "TCH Episode 2", host: "Donte Burney", audioLink: "" },
		{ id: 3, title: "TCH Episode 3", host: "Donte Burney", audioLink: "" },
		{ id: 4, title: "TCH Episode 4", host: "Donte Burney", audioLink: "" },
		{ id: 5, title: "TCH Episode 5", host: "Donte Burney", audioLink: "" },
		{ id: 6, title: "TCH Episode 6", host: "Donte Burney", audioLink: "" },
	];

	return (
		<div>
			<h1>Podcast Episodes</h1>
			{podcastData.map((podcast) => {
				return (
					<div key={podcast.id}>
						<h3>{podcast.title}</h3>
						<span>{podcast.host}</span>
						<audio controls src={podcast.audioLink}>
							Your browser does not support the
							<code>audio</code> element.
						</audio>
					</div>
				);
			})}
		</div>
	);
};

export default PodcastPage;
