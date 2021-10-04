import EntityCard from "../cards/EntityCard";

const HomePage = ({ collection }) => {
	return (
		<div className="home-page-container">
			<div className="card-container">
				{collection.map((recipe) => (
					<EntityCard entity={recipe} key={recipe.id} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
