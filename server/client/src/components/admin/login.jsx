import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    input(event) {
        console.log(event.target);

    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.input.bind(this, event)}></input>


                </form>

            </div>
        )
    }
}