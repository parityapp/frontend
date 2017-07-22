import React from "react";
import { Link } from 'react-router';

// import component here
import Summary from '../components/summary/summary'
import Sidebar from '../components/sidebar/sidebar'
import Hottopics from '../components/hottopics/hottopics'
import Activity from '../components/activity/activity'
import ActiveUser from '../components/activeUser/activeUser'
import Chats from '../components/chats/chats'


export default class Layout extends React.Component {

    render() {
        return (
            <div id="main-app">
                <Sidebar/>
                <div id="right-app">
                    <Summary/>
                    <Activity/>
                    <Hottopics/>
                    <ActiveUser/>
                    <Chats/>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}
