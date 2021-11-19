import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from "react-bootstrap";

function Menu({menuComponents}) {

    return (

    <Nav className="me-auto">
        {menuComponents.map((element, i) => <Nav.Link key={element + i} href={element.link}>{element.text}</Nav.Link>)}
    </Nav>
)
}

export default Menu;