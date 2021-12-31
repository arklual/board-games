import React from 'react'
import {Container} from 'react-bootstrap'

function Sidebar(props) {
    return (
        <div className="my-sidebar">
            <Container>
                <h4>Best Games(<a href="https://boardgamegeek.com/">BGG</a> top):</h4>
                <ul>
                    <li><a href="#">Agricola</a></li>
                    <li><a href="#">Arkham Horror: The card game</a></li>
                    <li><a href="#">Ticket to ride</a></li>
                </ul>
            </Container>
        </div>
    )
}

export default Sidebar

