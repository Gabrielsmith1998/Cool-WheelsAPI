import React from 'react';
/*import PropTypes from 'prop-types';*/
import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="../Views/Home.js">Cool Wheels</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="../Views/Home.js">Home</Nav.Link>
                        <Nav.Link href="../Views/Cars.js">Cars</Nav.Link>
                        <Nav.Link href="../Views/Tracks.js">Tracks</Nav.Link>
                        <Nav.Button href="../Views/SignIn.js">Sign In</Nav.Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}