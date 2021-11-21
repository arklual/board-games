import Menu from "./Menu";
import {Navbar, Container, Nav} from "react-bootstrap";

function Header({title, menuComponents}) {

    return (
        <Navbar className="background-primary" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Menu menuComponents={menuComponents}/>
                    <Nav>
                        <Nav.Link href="#">Sign In</Nav.Link>
                        <Nav.Link href="#">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;