import EntityRow from "../entity/Row";
import EntityCard from "../entity/Card";
import React, { useState, useEffect } from "react";
import { getRecipes } from "../../api/recipe-api";

const HomePage = () => {
	const [recipeCollection, setRecipeCollection] = useState([]);

	let positionCount = 0;

	const columnCount = 4;

	const rowCount = recipeCollection.length / columnCount;

	useEffect(() => {
		getRecipes()
			.then((response) => response.json())
			.then((recipes) => {
				setRecipeCollection(recipes);
			});
	}, []);

	return (
		<div className="home-page-container">
			{Array.from(Array(rowCount)).map((x, index) => {
				const newCollection = [
					...recipeCollection.slice(positionCount, positionCount + columnCount),
				];

				positionCount = positionCount + columnCount;

				return (
					<EntityRow
						key={index}
						columnCount={columnCount}
						collection={newCollection}
					>
						<>
							{[...newCollection].map((entity, index) => (
								<EntityCard
									columnCount={columnCount}
									entity={entity}
									key={index}
									linkUrl={`/recipe/${entity.id}`}
								/>
							))}
						</>
					</EntityRow>
				);
			})}
		</div>
	);
};

export default HomePage;
