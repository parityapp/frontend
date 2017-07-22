// imports
import React from 'react';
import { YAxis, XAxis, CartesianGrid, AreaChart, Tooltip, Area } from 'recharts';

// nav component
export default class Activity extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: '09:00', uv: 4000},
                {name: '09:30', uv: 3000},
                {name: '10:00', uv: 2000},
                {name: '10:30', uv: 2780},
                {name: '11:00', uv: 1890},
                {name: '11:30', uv: 2390},
                {name: '12:00', uv: 9000},
            ]
        }
    }

    render(){

        return(
            <div className="activity">
                <div className="container">
                    <h2>Channel activity</h2>
                    <AreaChart width={1000} height={400} data={this.state.data}
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
