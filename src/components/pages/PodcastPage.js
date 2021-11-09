import EntityRow from "../entity/Row";
import EntityCard from "../entity/Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPodcasts } from "../../api/podcast-api";
import { setPodcasts } from "../../reducers/podcastSlice";

const PodcastPage = () => {
	// const podcasts = useSelector((state) => state.podcasts);
	const podcasts = [
		{ id: 1, title: "TCH Episode 1", host: "Donte Burney", audioLink: "" },
		{ id: 2, title: "TCH Episode 2", host: "Donte Burney", audioLink: "" },
		{ id: 3, title: "TCH Episode 3", host: "Donte Burney", audioLink: "" },
		{ id: 4, title: "TCH Episode 4", host: "Donte Burney", audioLink: "" },
		{ id: 5, title: "TCH Episode 5", host: "Donte Burney", audioLink: "" },
		{ id: 6, title: "TCH Episode 6", host: "Donte Burney", audioLink: "" },
		{ id: 7, title: "TCH Episode 7", host: "Donte Burney", audioLink: "" },
		{ id: 8, title: "TCH Episode 8", host: "Donte Burney", audioLink: "" },
	];

	const dispatch = useDispatch();

	let positionCount = 0;

	const columnCount = 4;

	const rowCount = podcasts.length / columnCount;
	// debugger;

	useEffect(() => {
		getPodcasts()
			.then((response) => response.json())
			.then((podcasts) => dispatch(setPodcasts(podcasts)));
	}, [dispatch]);

	return (
		<div className="podcast-page-container">
			{Array.from(Array(rowCount)).map((x, index) => {
				const newCollection = [
					...podcasts.slice(positionCount, positionCount + columnCount),
				];

				positionCount = positionCount + columnCount;

				return (
					<EntityRow
						key={index}
						columnCount={columnCount}
						collection={newCollection}
					>
						<>
							{[...newCollection].map((entity, index) => (
								<EntityCard
									columnCount={columnCount}
									entity={entity}
									key={index}
									mediaType="audio"
									linkUrl={`/recipe/${entity.id}`}
								/>
							))}
						</>
					</EntityRow>
				);
			})}
		</div>
	);
};

export default PodcastPage;
