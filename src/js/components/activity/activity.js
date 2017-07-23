// imports
import React from 'react';
import { YAxis, XAxis, CartesianGrid, AreaChart, Tooltip, Area } from 'recharts';
import ActivityStore from "../../stores/activity"

// nav component
export default class Activity extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: ActivityStore.getAll()
        };
    }

    componentWillMount(){
        ActivityStore.on('change', () =>{
            this.setState({
                data: ActivityStore.getAll()
            });
        })
    }

    render(){
        console.log(this.state.data);
        console.log("yo");
        return(
            <div className="activity">
                <div className="container app-container">
                    <h2>Channel Activity</h2>
                    <AreaChart width={800} height={400} data={this.state.data}
                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Area type='monotone'
                            fillOpacity={1}
                            dataKey='uv'
                            stroke='#8884d8'
                            fill='#3498db'
                        />
                    </AreaChart>
                </div>
            </div>
        );
    }

}
