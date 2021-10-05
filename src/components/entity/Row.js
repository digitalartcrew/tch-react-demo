import Row from "react-bootstrap/Row";
import EntityCard from "../entity/Card";

const EntityRow = ({ collection, columnCount }) => {
	return (
		<Row>
			{collection.map((entity, index) =>
				index < columnCount ? (
					<EntityCard columnCount={columnCount} entity={entity} key={index} />
				) : null
			)}
		</Row>
	);
};

export default EntityRow;
