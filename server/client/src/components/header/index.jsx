import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from '../main/index.jsx';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                
                <div>
                    <Link to='/home' className='inverted'><h1 className='titlegame' >Karla Berjikian</h1></Link>
                </div>

                <div className='navBar'>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutme'>About Me</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

                <Main/>

            </div>
        );
    }
}