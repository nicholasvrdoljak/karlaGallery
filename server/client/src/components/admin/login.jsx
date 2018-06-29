import React, { Component } from 'react';
import axios from 'axios';

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
        if (!this.state.user && !this.state.pass) {
            alert('Please enter a username and password');
        } else if (!this.state.user) {
            alert('Please enter a username');
        } else if (this.state.user) {
            alert('Please enter a password');
        } else {
            axios.get(`/signin/${this.state.user}/${this.state.pass}`)
            .then(response => {
                if (response.data === 'wrong') {
                    alert('Username or Password is incorrect');
                } else {
                    sessionStorage.setItem('jwtToken', response.data.token);
                    axios.get('/signInToken', { params: { token: sessionStorage.getItem('jwtToken') }});
                }
            })
            .catch(err => {
                console.log('Login error', err);
            });
        }
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