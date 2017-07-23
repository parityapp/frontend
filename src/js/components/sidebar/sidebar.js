// imports
import React from 'react';

import ActivityStore from "../../stores/activity"
import UserStore from "../../stores/user"
import ChatsStore from "../../stores/chats"
import SummaryStore from "../../stores/summary"
import HottopicsStore from "../../stores/hottopics"

// nav component
export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            channels: [
                "channel1",
                "channel2",
                "channel3",
            ]
        }
    }

    onClick(event) {
      console.log("a clicked");
      ActivityStore.getActivityFromApi();
      UserStore.getUser();
      ChatsStore.getMessages();
      SummaryStore.getSummary();
      HottopicsStore.getHottopics();
   }

    render(){
        return(
            <div className="sidebar">
                <div className="container">
                    <div id='logo'>
                        <img id="logo-img" src="src/parity-logo.png"/>
                    </div>
                    <ul>
                    {this.state.channels.map(function(channel, index){
                    return <li key={channel}>
                            <a onClick={this.onClick}>{channel}</a>
                           </li>
                    }, this)}
                    </ul>
                </div>
            </div>
        )
    }

}
