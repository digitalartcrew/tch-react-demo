const EntityCard = ({ entity }) => {
	return (
		<div className="entity-card">
			<img src={entity.imageSrc} alt="placeholder card" />
			<div className="entity-card-details">
				<h5>{entity.title}</h5>
				<p className="entity-card-description">{entity.description}</p>
			</div>
		</div>
	);
};

export default EntityCard;
