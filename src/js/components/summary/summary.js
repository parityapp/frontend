// imports
import React from 'react';

import SummaryStore from "../../stores/summary"

// nav component
export default class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summary: SummaryStore.getSummary()
        }
    }

    componentWillMount(){
        SummaryStore.on('change', () =>{
            this.setState({
                summary: SummaryStore.getSummary()
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
                <div className="container app-container">
                    <h2>Summary</h2>
                    <p>{this.state.summary.summary}</p>
                </div>
            </div>
        )
    }

}
