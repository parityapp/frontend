import React from "react";
import { Link } from 'react-router';

export default class Login extends React.Component {

    render() {
        return (
            <div className="login-form">
                <div className="container">
                    <img id="login-logo" src="src/parity-logo.png"/>
                    <form action="/login">
                        <input type="text" placeholder="username"></input><br/>
                        <input type="text" placeholder="password"></input><br/>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}
