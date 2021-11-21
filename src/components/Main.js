import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Footer from "./Footer";

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/blog' element={<Footer/>}/> {/*This is a test code*/}
        </Routes>
    );
}

export default Main;