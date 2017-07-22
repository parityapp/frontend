import React from "react";
import { Link } from 'react-router';

// import component here
import Sidebar from '../components/sidebar/sidebar'
import Activity from '../components/activity/activity'
import ActiveUser from '../components/activeUser/activeUser'
import Chats from '../components/chats/chats'


export default class Layout extends React.Component {

    render() {
        return (
            <div id="main-app">
                <Sidebar/>
                <div id="right-app">
                    <Activity/>
                    <ActiveUser/>
                    <Chats/>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}
