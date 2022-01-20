import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Blog from '../pages/Blog';
import Article from '../pages/Article';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/blog' element={<Blog/>}/>
                <Route exact path='/blog/:id' element={<Article/>}/>
                <Route exact path='/signup' element={<Signup />}/>
            </Routes>
        </div>
    );
}

export default Main;