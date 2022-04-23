import React from 'react';
/*import PropTypes from 'prop-types';*/
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
} from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="../Views/Home.js">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="../Views/Home.js">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="../Views/Cars.js">Cars</NavDropdown.Item>
                            <NavDropdown.Item href="../Views/Tracks">Tracks</NavDropdown.Item>
                            <NavDropdown.Item href="../Views/Profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}