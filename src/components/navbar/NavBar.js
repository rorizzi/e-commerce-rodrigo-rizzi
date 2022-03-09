import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../../icon/CartWidget";
import { useContext } from "react" 
import { CartContext } from '../../context/CartContext'; 
import { categories } from "../../helpers/Categories"

const NavBar = () => {
  
  const { isEmpty } = useContext(CartContext)
  return (
    
    <Navbar bg="dark" expand="xxl" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand>
        <Link to="/" className="text-decoration-none text-light fst-italic">APOLON 👑</Link> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-end" style={{backgroundColor: '#212529'}}>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
           {
             categories.map((cat) => (
              <NavDropdown.Item key={cat.id}>
                <NavLink to={`category/${cat.id}`} className={cat.className}>
                  {cat.name}
                </NavLink>
              </NavDropdown.Item>
             ))
           }
          </NavDropdown>
        </Nav>
        <NavLink to="/cart">
          {isEmpty() ? '' : 
                            <Button variant="outline-secondary" size="sm">
                              <CartWidget />
                           </Button>
          } 
        </NavLink>
      </Navbar.Collapse>      
    </Container>
  </Navbar>
  );
  
};

export default NavBar;

