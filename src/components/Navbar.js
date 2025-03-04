import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/swLOGO.png';
////<img src={Logo} width='100px' className='position-absolute start-100'></img>
function BasicNavbar() {
  return (
    <Navbar variant='dark' expand="md" className="bg-dark">
      <Container>
        
        <Navbar.Brand>Star Wars</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Info</Nav.Link>
            <NavDropdown variant='dark' title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">About The Developers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About The Movies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.starwars.com/">
                Star Wars Website
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;