import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";


const NavBarExample = () => {
    return(
        <>
        <Navbar className="navBg" bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">BikesShop </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/tienda">tineda</Nav.Link>
        <Nav.Link as={Link} to="/nosotros">nosotros</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>
    )
}
export default NavBarExample