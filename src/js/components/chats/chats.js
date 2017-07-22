import React from 'react';

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        messages :[
            {
                text: "this is a message"
            },
            {
                text: "this is a message also"
            }
        ]
    }
  }
  render() {

    return (
        <div className="container app-container">
            <div className="chat">
                {this.state.messages.map(function(msg, index){
                    return <div key={index} className="chatbox">
                                <p>{msg.text}</p>
                            </div>
                    })}
            </div>
        </div>
    )

  }

}
