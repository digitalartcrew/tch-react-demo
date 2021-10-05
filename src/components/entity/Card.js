import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EntityCard = ({ entity }) => {
	return (
		<Card className="col-3">
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
