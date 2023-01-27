import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Header = () => {
  // implement the "active" class when nav button selected
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Nav.Link>
          <Nav.Link href="/login" className={location.pathname === "/login" ? "active" : ""}>
            Login
          </Nav.Link>
          <Nav.Link href="/register" className={location.pathname === "/register" ? "active" : ""}>
            Register
          </Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="#1">1</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#2">2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
