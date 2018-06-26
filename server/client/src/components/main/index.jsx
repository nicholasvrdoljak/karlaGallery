import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../home/index.jsx';
import AboutMe from '../aboutMe/index.jsx';
import Portfolio from '../portfolio/index.jsx';
import Contact from '../contact/index.jsx';


const Main = (props) => (
    <main className='content'>
        <Switch>
            <Route exact path='/' render={() => <Redirect to={{ pathname: '/home' }} />} />
            <Route path='/home' component={Home}></Route>
            <Route path='/aboutme' component={AboutMe}></Route>
            <Route path='/portfolio' component={Portfolio}></Route>
            <Route path='/contact' component={Contact}></Route>
        </Switch>
    </main>
);

export default Main;