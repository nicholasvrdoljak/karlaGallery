import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from '../main/index.jsx';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>

                <Link to='/home'><h2>Karla Berjikian</h2></Link>
                <div className='navBar'>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutme'>About Me</Link></li>

                        <li className='dropdown'>
                            <Link to='/portfolio'>Portfolio</Link>
                            <div className='dropdown-content'>
                                <p><Link to='/portfolio/painting'>Painting</Link></p>
                                <p><Link to='/portfolio/drawing'>Drawing</Link></p>
                                <p><Link to='/portfolio/printing'>Printing</Link></p>
                            </div>
                        </li>

                        <li><Link to='/contact'>Contact</Link></li>

                    </ul>
                </div>

                <span className='content'>
                    <Main/>
                </span>

                <div className='copyright'>Copyright K.Berjikian 2018</div>

            </div>
        );
    }
}