import Menu from "./Menu";
import {Navbar, Container, Nav} from "react-bootstrap";
import React from "react";

function Header({title, menuComponents}) {

    return (
        <Navbar className="background-primary navbar-dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Menu menuComponents={menuComponents}/>
                    <Nav>
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;