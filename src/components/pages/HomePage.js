import Card from "../entity/Card";

const HomePage = ({ collection }) => {
	return (
		<div className="home-page-container">
			<div className="card-container">
				{collection.map((recipe) => (
					<Card entity={recipe} key={recipe.id} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
