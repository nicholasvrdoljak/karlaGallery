import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <div className='portfolioItem'>
                    <Link to='/portfolio/painting'><p>Painting</p>
                    <img src='https://picsum.photos/200/?random'/></Link>
                </div>
                <div className='portfolioItem'>
                    <Link to='/portfolio/drawing'><p>Drawing</p>
                    <img src='https://picsum.photos/200/?random' /></Link>
                </div>
                <div className='portfolioItem'>
                    <Link to='/portfolio/printing'><p>Printing</p>
                    <img src='https://picsum.photos/200/?random' /></Link>
                </div>
            </div>
        )
    }
}