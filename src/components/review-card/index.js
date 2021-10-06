import Card from "react-bootstrap/Card";

const ReviewCard = ({ review }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{review.rating} -</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{review.username} - {review.date}
				</Card.Subtitle>
				<Card.Text>{review.message}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ReviewCard;
