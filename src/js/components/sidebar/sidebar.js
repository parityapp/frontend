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
                {
                    id: 1,
                    name: "Channel 1"
                },
                {
                    id: 2,
                    name: "Channel 2"
                },{
                    id: 3,
                    name: "Channel 3"
                }
            ]
        }
    }

    onClick(event) {
      var channelid = event.target.dataset.tag;
      ActivityStore.getActivityFromApi(channelid);
      UserStore.getUser(channelid);
      ChatsStore.getMessages(channelid);
      SummaryStore.getSummary(channelid);
      HottopicsStore.getHottopics(channelid);
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
                    return <li key={index}>
                            <a data-tag={channel.id} onClick={this.onClick}>{channel.name}</a>
                           </li>
                    }, this)}
                    </ul>
                </div>
            </div>
        )
    }

}
