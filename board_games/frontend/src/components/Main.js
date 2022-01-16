import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Blog from '../pages/Blog';

const Main = () => {
    return (
        <div className="wrapper">
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/blog' element={<Blog/>}/>
                <Route exact path='/signup' element={<Signup />}/>
            </Routes>
        </div>
    );
}

export default Main;