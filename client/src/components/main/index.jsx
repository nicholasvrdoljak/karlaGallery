import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../home/index.jsx';
import AboutMe from '../aboutMe/index.jsx';
import Contact from '../contact/index.jsx';

import Portfolio from '../portfolio/index.jsx';
import Painting from '../portfolio/painting.jsx';
import Drawing from '../portfolio/drawing.jsx';
import Printing from '../portfolio/printing.jsx';

import Login from '../admin/login.jsx';
import Dashboard from '../admin/dashboard.jsx';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Redirect to={{ pathname: '/home' }} />} />
            <Route exact path='/home' component={Home}/>
            <Route exact path='/aboutme' component={AboutMe}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/portfolio/painting' component={Painting}/>
            <Route exact path='/portfolio/drawing' component={Drawing}/>
            <Route exact path='/portfolio/printing' component={Printing}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/dashboard' render={() => sessionStorage.getItem('jwtToken') ? (<Dashboard />) : (<Redirect to={{ pathname: '/home' }}/>)} />
        </Switch>
    </main>
);

export default Main;