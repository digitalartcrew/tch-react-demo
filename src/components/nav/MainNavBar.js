// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const MainNavBar = () => {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="/">Tech, Chicken and Hot Sauce</Navbar.Brand>
				<Navbar.Toggle />
				<Form className="d-flex">
					<FormControl
						type="search"
						placeholder="Search"
						className="mr-2"
						aria-label="Search"
					/>
					<Button variant="outline-success">Search</Button>
				</Form>
				<Nav.Link href="/add-recipe">Add Recipe +</Nav.Link>
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Signed in as: <a href="#login">Donte Burney</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MainNavBar;
