import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../home/index.jsx';
import AboutMe from '../aboutMe/index.jsx';
import Contact from '../contact/index.jsx';

import Portfolio from '../portfolio/index.jsx';
import Painting from '../portfolio/painting.jsx';
import Drawing from '../portfolio/drawing.jsx';
import Printing from '../portfolio/printing.jsx';


const Main = (props) => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Redirect to={{ pathname: '/home' }} />} />
            <Route path='/home' component={Home}></Route>
            <Route path='/aboutme' component={AboutMe}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route exact path='/portfolio' component={Portfolio}></Route>
            <Route path='/portfolio/painting' component={Painting}></Route>
            <Route path='/portfolio/drawing' component={Drawing}></Route>
            <Route path='/portfolio/printing' component={Printing}></Route>
        </Switch>
    </main>
);

export default Main;