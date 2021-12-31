import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
            <Footer/>
        </div>
    );
}

export default App;
