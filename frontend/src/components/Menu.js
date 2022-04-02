import {Nav} from "react-bootstrap";
import React from "react";

function Menu({menuComponents}) {

    return (
        <>
            <Nav className="me-auto">
                {menuComponents.map((element, i) => <Nav.Link key={element + i}
                                                              href={element.link}>{element.text}</Nav.Link>)}
            </Nav>
        </>
    )
}

export default Menu;