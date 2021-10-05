import EntityRow from "../entity/Row";
import EntityCard from "../entity/Card";

const HomePage = ({ collection }) => {
	const columnCount = 4;
	const rowCount = Math.ceil(collection.length / columnCount);
	let positionCount = 0;

	return (
		<div className="home-page-container">
			{Array.from(Array(rowCount)).map((x, index) => {
				const newCollection = [
					...collection.slice(positionCount, positionCount + columnCount),
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
								/>
							))}
						</>
					</EntityRow>
				);
			})}
		</div>
	);
};

export default HomePage;
