import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const EntityCard = ({ entity, columnCount, linkUrl }) => {
	const columnClass = `entity-card col-md-${12 / columnCount}`;

	return (
		<Card className={columnClass}>
			<Card.Img variant="top" src={entity.imgSrc} />
			<Card.Body>
				<Card.Title>{entity.title}</Card.Title>
				<Card.Text className="entity-card-details">
					{entity.description}
				</Card.Text>
				<Link to={linkUrl}>
					<Button variant="primary">View Recipe</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default EntityCard;
