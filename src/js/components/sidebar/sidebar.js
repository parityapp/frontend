// imports
import React from 'react';

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
                            <a>{channel}</a>
                           </li>
                    })}
                    </ul>
                </div>
            </div>
        )
    }

}
