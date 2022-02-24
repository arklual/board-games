import React from 'react'
import {Container} from 'react-bootstrap'

function Sidebar(props) {
    return (
        <div className="my-sidebar">
            <Container>
                <h4>Лучшие игры(по версии <a href="https://boardgamegeek.com/">BGG</a>):</h4>
                <ul>
                    {games.map(game => (
                        <li><a href={game[1]}>{game[0]}</a></li>
                    ))}
                </ul>
            </Container>
        </div>
    )
}

export default Sidebar

