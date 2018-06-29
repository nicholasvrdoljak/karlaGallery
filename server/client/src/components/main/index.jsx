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


const Main = (props) => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Redirect to={{ pathname: '/home' }} />} />
            <Route path='/home' component={Home}/>
            <Route path='/aboutme' component={AboutMe}/>
            <Route path='/contact' component={Contact}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route path='/portfolio/painting' component={Painting}/>
            <Route path='/portfolio/drawing' component={Drawing}/>
            <Route path='/portfolio/printing' component={Printing}/>
            <Route path='/login' component={Login}/>
            <Route path='/login/*' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    </main>
);

export default Main;