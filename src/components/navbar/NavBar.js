import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../../icon/CartWidget";

const NavBar = () => {
  return (
    
    <Navbar bg="dark" expand="xxl" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand>
        <Link to="/" className="text-decoration-none text-light fst-italic">APOLON</Link> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-end" style={{backgroundColor: '#212529'}}>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="category/gaming" className='text-decoration-none text-dark'>                
                  Consolas                
              </NavLink> 
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="category/tecnology" className='text-decoration-none text-dark'>              
                  Tecnología                  
              </NavLink>  
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="category/home" className='text-decoration-none text-dark'>                
                  Hogar                
              </NavLink>
            </NavDropdown.Item>
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

