import React from 'react';
import signOutUser from '../api/auth';
import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';

export default function Navigation({ isLoggedIn }) {
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
                        {isLoggedIn
                        ? <Nav.Link href="/login" onClick={signOutUser}>Logout</Nav.Link>
                        : <Nav.Link href="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
