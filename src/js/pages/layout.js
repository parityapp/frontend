import React from "react";
import { Link } from 'react-router';

// import component here
import Sidebar from '../components/sidebar/sidebar';
import Chats from '../components/chatbox/chats';

export default class Layout extends React.Component {
	

    render() {
        return (
            <div id="main-app">
                <Sidebar/>
                <Chats/>
            </div>
        );
    }
}


