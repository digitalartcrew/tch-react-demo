import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EntityCard = ({ entity }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={entity.imageSrc} />
			<Card.Body>
				<Card.Title>{entity.title}</Card.Title>
				<Card.Text>{entity.description}</Card.Text>
				<Button variant="primary">View Recipe</Button>
			</Card.Body>
		</Card>
	);
};

export default EntityCard;
