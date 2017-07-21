import React from "react";
import { Link } from 'react-router';

// import component here
import Sidebar from '../components/sidebar/sidebar'

export default class Layout extends React.Component {

    render() {
        return (
            <div id="main-app">
                <Sidebar/>
            </div>
        );
    }
}
