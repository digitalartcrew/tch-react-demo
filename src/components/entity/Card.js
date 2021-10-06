import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const EntityCard = ({ entity, columnCount, linkUrl }) => {
	const columnClass = `entity-card col-md-${12 / columnCount}`;

	return (
		<Container className={`entity-card-container ${columnClass}`}>
			<Card>
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
		</Container>
	);
};

export default EntityCard;
