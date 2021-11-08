// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const MainNavBar = () => {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="/">
					<Image
						style={{ borderRadius: "50%", width: "50px" }}
						src="./tch.png"
					/>
					<span>Tech, Chicken & Hot Sauce</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				{/* <Form className="d-flex">
					<FormControl
						type="search"
						placeholder="Search"
						className="mr-2"
						aria-label="Search"
					/>
					<Button variant="outline-success">Search</Button>
				</Form> */}
				<Nav.Link href="/podcast">Podcast</Nav.Link>
				<Nav.Link href="/tutorials">Tutorial</Nav.Link>
				<Nav.Link href="/tech-blog">Tech Blog</Nav.Link>
				<Nav.Link href="/meetups">Meet Ups</Nav.Link>
				<Nav.Link href="/recipes">Recipes</Nav.Link>
				<Nav.Link href="/login">Login</Nav.Link>
				<Nav.Link href="/signup">Sign Up</Nav.Link>
				{/* <Nav.Link href="/add-recipe">Add Recipe +</Nav.Link> */}
				{/* <Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Signed in as: <a href="#login">Donte Burney</a>
					</Navbar.Text>
				</Navbar.Collapse> */}
			</Container>
		</Navbar>
	);
};

export default MainNavBar;
