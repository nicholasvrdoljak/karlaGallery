import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>Contact Me</h1>
                    <p>Share your ideas with me and let's create something.</p>
                </div>

                <div className='contactItem'>
                    <h3>Email: </h3><a href='mailto:kberjikian@gmail.com'>kberjikian@gmail.com</a>
                    <h3>LinkedIn: </h3><a target='blank' href='https://www.linkedin.com/in/karla-berjikian-900a359b/'>https://www.linkedin.com/in/karla-berjikian-900a359b/</a>
                </div>
            </div>

        )
    }
}