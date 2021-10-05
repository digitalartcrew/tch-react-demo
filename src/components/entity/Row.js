import Row from "react-bootstrap/Row";
import EntityCard from "../entity/Card";

const EntityRow = ({ collection, columnCount }) => {
	const columnClass = `col-${12 / columnCount}`;

	return (
		<Row>
			{collection.map((entity, index) =>
				index < columnCount ? (
					<EntityCard columnClass={columnClass} entity={entity} key={index} />
				) : null
			)}
		</Row>
	);
};

export default EntityRow;
