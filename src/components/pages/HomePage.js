import EntityRow from "../entity/Row";
import EntityCard from "../entity/Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../api/recipe-api";
import { setRecipes } from "../../reducers/recipeSlice";

const HomePage = () => {
	const recipes = useSelector((state) => state.value);
	const dispatch = useDispatch();

	let positionCount = 0;

	const columnCount = 4;

	const rowCount = recipes.length / columnCount;

	useEffect(() => {
		getRecipes()
			.then((response) => response.json())
			.then((recipes) => dispatch(setRecipes(recipes)));
	}, [dispatch]);

	return (
		<div className="home-page-container">
			{Array.from(Array(rowCount)).map((x, index) => {
				const newCollection = [
					...recipes.slice(positionCount, positionCount + columnCount),
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
