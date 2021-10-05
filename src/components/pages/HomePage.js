import EntityRow from "../entity/Row";

const HomePage = ({ collection }) => {
	const columnCount = 4;
	const rowCount = Math.ceil(collection.length / columnCount);

	return (
		<div className="home-page-container">
			{Array.from(Array(rowCount)).map((x, index) => {
				return (
					<EntityRow
						key={index}
						columnCount={columnCount}
						collection={collection}
					/>
				);
			})}
		</div>
	);
};

export default HomePage;
