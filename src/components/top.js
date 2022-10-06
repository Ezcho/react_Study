import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Banner() {
  return (
    <Navbar bg="dark" variant = "dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>My First Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">자바</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Unity</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">일상</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Contact us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.instagram.com/_dng_yng/">Instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Kakaotalk</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="" disabled>
              Contact us
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="글 검색"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Banner;