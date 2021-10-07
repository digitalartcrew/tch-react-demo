import { BsStarFill, BsStar } from "react-icons/bs";

const FiveStarRating = ({ rating = 4 }) => {
	const starSet = [];

	for (let i = 0; i < Math.floor(rating); i++) {
		starSet.push(<BsStarFill />);
	}

	for (let i = 0; i < 5 - Math.floor(rating); i++) {
		starSet.push(<BsStar />);
	}

	return <div>{starSet}</div>;
};

export default FiveStarRating;
