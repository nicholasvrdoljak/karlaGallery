import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '', 
            pass: ''
        }
    }

    input(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    submit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>{this.state.user}, {this.state.pass}</h1>
                <form>
                    <input name='user' onChange={this.input.bind(this)}/><br/>
                    <input name='pass' type='password' onChange={this.input.bind(this)}/><br/>
                    <button onSubmit={this.submit.bind(this)}>Enter</button>
                </form>
            </div>
        )
    }
}