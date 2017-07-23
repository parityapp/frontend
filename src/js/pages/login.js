import React from "react";
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify({
            username: this.state.username,
            password: this.state.password,
        }));
        fetch('https://a093b88f.ngrok.io/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }).then(function(response) {
            return response.json()
        }).then(function(body) {
            console.log(body.data.token);
            localStorage.setItem('token', body.data.token);
            localStorage.setItem('channels', JSON.stringify(body.data.channels));
        });

    }

    handleChangeUsername(event) {
        this.setState({
            username: event.target.value,
        });
    }

    handleChangePass(event) {
        this.setState({
            password: event.target.value,
        });
    }

    render() {

        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/'/>;
        }
        return (
            <div className="login-form">
                <div className="container">
                    <img id="login-logo" src="src/parity-logo.png"/>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="username" type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                        <input placeholder="password" type="password" value={this.state.password} onChange={this.handleChangePass} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}
