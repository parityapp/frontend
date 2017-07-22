// imports
import React from 'react';

import SummaryStore from "../../stores/summary"

// nav component
export default class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summary: Summary.getSummary()
        }
    }

    componentWillMount(){
        Summary.on('change', () =>{
            this.setState({
                summary: Summary.getSummary()
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
                    <h3>{this.state.summary.summary}</h3>
                </div>
            </div>
        )
    }

}
