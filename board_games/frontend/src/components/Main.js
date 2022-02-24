import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Blog from '../pages/Blog';
import Forum from '../pages/Forum';
import Article from '../pages/Article';
import Topic from '../pages/Topic'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/blog' element={<Blog/>}/>
                <Route exact path='/blog/:id' element={<Article/>}/>
                <Route exact path='/forum' element={<Forum />}/>
                <Route exact path='/forum/topic/:id' element={<Topic />}/>
                <Route exact path='/signup' element={<Signup />}/>
                <Route exact path='/signin' element={<Signin />}/>
            </Routes>
        </div>
    );
}

export default Main;