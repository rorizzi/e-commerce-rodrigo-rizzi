import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import CartWidget from "../../icon/CartWidget";

const NavBar = () => {
  return (
    
    <Navbar bg="dark" expand="xxl" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="#home">APOLON</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Contacto</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Smartphones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Vehiculos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cositas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="outline-secondary" size="sm">
        <CartWidget />
      </Button>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  );
  
};

export default NavBar;

