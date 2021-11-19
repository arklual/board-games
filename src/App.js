import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import React from "react";
import ImageSlider from "./components/ImageSlider";

function App() {

    const menuComponents = [
        {
            text: "Home",
            link: "#home"
        },
        {
            text: "Blog",
            link: "#blog"
        },
        {
            text: "Forum",
            link: "#forum"
        },
        {
            text: "About",
            link: "#about"
        },
    ]
    const slides = [
        {
            image: "https://coolmaterial.com/wp-content/uploads/2017/09/Best-Board-Games.jpg"
        },
        {
            image: "https://www.boardgamehalv.com/wp-content/uploads/2019/07/carcassonne2rev2_game_1050x700.jpg"
        },
        {
            image: "https://images-cdn.fantasyflightgames.com/filer_public/33/de/33de6e20-1fcc-4b24-82fd-4b0e3d021b02/ahc60_cardfan.png"
        },
    ]

    return (
        <div className="App">
            <Header title="BoardGames" menuComponents={menuComponents}/>
            <ImageSlider slides={slides}/>
        </div>
    );
}

export default App;
