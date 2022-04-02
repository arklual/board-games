import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


function App() {

    const menuComponents = [
        {
            text: "Главная",
            link: "/"
        },
        {
            text: "Статьи",
            link: "/blog"
        },
        {
            text: "Форум",
            link: "/forum"
        },
        {
            text: "О нас",
            link: "/about"
        },
    ]

    return (
        <div className="App">
            <Header title="Поиграем!" menuComponents={menuComponents}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
