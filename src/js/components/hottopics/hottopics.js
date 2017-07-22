// imports
import React from 'react';

import HottopicsStore from "../../stores/hottopics"

// nav component
export default class Hottopics extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topic: HottopicsStore.getHottopics()
        }
    }

    componentWillMount(){
        HottopicsStore.on('change', () =>{
            this.setState({
                topic: HottopicsStore.getHottopics()
            });
        })
    }

    render(){

        const imgStyle = {
            borderRadius: '50%',
            width: '60px',
            height: '60px'
        };

        return(
            <div className="topic">
                <div className="container app-container">
                    <h2>Hottopics</h2>
                    {this.state.topic.map(function(msg, index){
                    return <div key={index} className="chatbox">
                                <p>{msg.text}</p>
                            </div>
                    })}
                </div>
            </div>
        )
    }

}
