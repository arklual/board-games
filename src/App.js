import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import React from "react";

function App() {

    const menuComponents = [
        {
            text: "Home",
            link: "#"
        },
        {
            text: "Blog",
            link: "#"
        },
        {
            text: "About",
            link: "#"
        },
    ]

    return (
        <div className="App">
            <Header title="BoardGames" menuComponents={menuComponents}/>
        </div>
    );
}

export default App;
