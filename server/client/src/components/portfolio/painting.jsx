import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Painting extends Component {
    render() {
        return (
            <div>
                <p>Painting</p>
                <Link to='/portfolio/painting'><p>Painting</p></Link>
                <Link to='/portfolio/drawing'><p>Drawing</p></Link>
                <Link to='/portfolio/printing'><p>Printing</p></Link>
            </div>
        )
    }
}