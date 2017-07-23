import React from "react";
import { Link } from 'react-router';

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
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
