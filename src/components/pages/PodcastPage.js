import EntityRow from "../entity/Row";
import EntityCard from "../entity/Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPodcasts } from "../../api/podcast-api";
import { setPodcasts } from "../../reducers/podcastSlice";

const PodcastPage = () => {
	const podcasts = useSelector((state) => state.podcasts);
	const [rowCount, setRowCount] = useState(0);

	const dispatch = useDispatch();

	let positionCount = 0;

	const columnCount = 4;

	useEffect(() => {
		getPodcasts()
			.then((response) => response.json())
			.then((podcasts) => {
				debugger;
				setRowCount(Math.ceil(podcasts.length / columnCount));
				dispatch(setPodcasts(podcasts));
			});
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
									linkUrl={`/podcast/${entity.id}`}
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
