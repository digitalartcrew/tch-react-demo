import Row from "react-bootstrap/Row";
import EntityCard from "../entity/Card";

const EntityRow = ({ collection }) => {
	return (
		<Row>
			{collection.map((entity) => (
				<EntityCard entity={entity} key={entity.id} />
			))}
		</Row>
	);
};

export default EntityRow;
