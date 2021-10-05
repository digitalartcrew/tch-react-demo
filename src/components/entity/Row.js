import Row from "react-bootstrap/Row";
import EntityCard from "../entity/Card";

const EntityRow = ({ collection, columnCount }) => {
	let positionCount = 0;
	const collectionSet = [
		...collection.slice(positionCount, positionCount + columnCount),
	];

	positionCount = positionCount + columnCount;
	return (
		<Row>
			{collectionSet.map((entity, index) =>
				index < columnCount ? (
					<EntityCard columnCount={columnCount} entity={entity} key={index} />
				) : null
			)}
		</Row>
	);
};

export default EntityRow;
