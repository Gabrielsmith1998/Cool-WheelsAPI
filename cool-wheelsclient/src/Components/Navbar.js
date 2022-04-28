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
                <Navbar.Brand href="/">Cool Wheels</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/cars">Cars</Nav.Link>
                        <Nav.Link href="/tracks">Tracks</Nav.Link>
                        <Nav.Link href="/buyers">Buyers</Nav.Link>
                        {/*<Nav.Button href="../Views/SignIn.js">Sign In</Nav.Button>*/}
                        {/*<Button variant="outline-success" href="/signin">Sign In</Button>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}