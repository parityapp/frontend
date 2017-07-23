import React from 'react';

import ChatsStore from "../../stores/chats"

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        messages : ChatsStore.getAll()
    };
  }

  componentWillMount(){
      ChatsStore.on('change', () =>{
          console.log("chats change");
          this.setState({
              messages: ChatsStore.getAll()
          });
      })
  }

  render() {

    return (
        <div className="container app-container">
            <div className="chat">
                <h2>Five Most Important Messages</h2>
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
