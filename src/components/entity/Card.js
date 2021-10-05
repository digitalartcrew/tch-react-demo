import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EntityCard = ({ entity, columnCount }) => {
	const columnClass = `entity-card col-md-${12 / columnCount}`;

	return (
		<Card className={columnClass}>
			<Card.Img variant="top" src={entity.imageSrc} />
			<Card.Body>
				<Card.Title>{entity.title}</Card.Title>
				<Card.Text className="entity-card-details">
					{entity.description}
				</Card.Text>
				<Button variant="primary">View Recipe</Button>
			</Card.Body>
		</Card>
	);
};

export default EntityCard;
