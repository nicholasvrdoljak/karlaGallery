import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>Contact Me</h1>
                </div>

                <div className='contactItem'>
                    <h3>Email: </h3><h4>kberjikian@gmail.com</h4>
                    <h3>LinkedIn: </h3><a href='https://www.linkedin.com/in/karla-berjikian-900a359b/'>https://www.linkedin.com/in/karla-berjikian-900a359b/</a>
                </div>
            </div>

        )
    }
}