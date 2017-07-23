// imports
import React from 'react';

import SummaryStore from "../../stores/summary"

// nav component
export default class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summary: SummaryStore.getAll(),
            name: JSON.parse(localStorage.getItem('channels'))[0].name
        }
    }

    componentWillMount(){
        SummaryStore.on('change', () =>{
            this.setState({
                summary: SummaryStore.getAll()
            });
        });

        SummaryStore.on('nameChange', () =>{
            this.setState({
                name: SummaryStore.getName()
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
            <div className="summary">
                <div className="channel-name">
                    <h1>{this.state.name}</h1>
                </div>
                <div className="container app-container">
                    <h2>Summary</h2>
                    <p>{this.state.summary.text}</p>
                </div>
            </div>
        )
    }

}
