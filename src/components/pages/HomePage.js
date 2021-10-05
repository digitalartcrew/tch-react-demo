import EntityRow from "../entity/Row";

const HomePage = ({ collection }) => {
	return (
		<div className="home-page-container">
			<div className="card-container">
				<EntityRow collection={collection} />
			</div>
		</div>
	);
};

export default HomePage;
