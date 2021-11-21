import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";

function App() {

    const menuComponents = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Blog",
            link: "/blog"
        },
        {
            text: "Forum",
            link: "/forum"
        },
        {
            text: "About",
            link: "/about"
        },
    ]

    return (
        <div className="App">
            <Header title="BoardGames" menuComponents={menuComponents}/>
            <Main/>
        </div>
    );
}

export default App;
