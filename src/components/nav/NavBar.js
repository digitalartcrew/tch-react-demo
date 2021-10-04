import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<nav>
				<ul className="navigation-bar">
					<li>
						<Link to="/">Tech, Chicken and HS</Link>
					</li>
					<li>
						<input type="text" placeholder="Search..." />
					</li>
					<li>
						<Link to="/add-recipe">Add +</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
