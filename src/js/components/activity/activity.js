// imports
import React from 'react';
import { YAxis, XAxis, CartesianGrid, AreaChart, Tooltip, Area } from 'recharts';

const data = [
      {name: '09:00', uv: 4000},
      {name: '09:30', uv: 3000},
      {name: '10:00', uv: 2000},
      {name: '10:30', uv: 2780},
      {name: '11:00', uv: 1890},
      {name: '11:30', uv: 2390},
      {name: '12:00', uv: 9000},
];

// nav component
export default class Activity extends React.Component{
    render(){
        // styles
        const style = {
            border: '#e1e8ed solid 1px',
            padding: '10px',
            borderRadius: '5px',
            background: "#fbfbfb",
            padding: '20px'
        };

        return(
            <div style={style} className="sidebar">
            <AreaChart width={1000} height={400} data={data}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' fillOpacity={1} dataKey='uv' stroke='#8884d8' fill='#6164c1' />
            </AreaChart>
            </div>
        );
    }

}
