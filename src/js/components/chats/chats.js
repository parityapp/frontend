import React from 'react';

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
        <div className="container app-container">
            <div className="chat">
                <div className="chatbox">
                    <p>Chat</p>
                </div>
            </div>
        </div>
    )

  }

}
