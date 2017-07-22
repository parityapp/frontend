import React from "react";
import { Link } from 'react-router';

// import component here
import Sidebar from '../components/sidebar/sidebar'
import Activity from '../components/activity/activity'
import ActiveUser from '../components/activeUser/activeUser'

export default class Layout extends React.Component {

    render() {
        return (
            <div id="main-app">
                <Sidebar/>
                <Activity/>
                <ActiveUser/>
            </div>
        );
    }
}
