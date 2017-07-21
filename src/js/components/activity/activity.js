// imports
import React from 'react';
import { YAxis, XAxis, CartesianGrid, LineChart, Line } from 'recharts';

const data = [
      {name: '09:00', uv: 4000, pv: 2400, amt: 2400},
      {name: '09:30', uv: 3000, pv: 1398, amt: 2210},
      {name: '10:00', uv: 2000, pv: 9800, amt: 2290},
      {name: '10:30', uv: 2780, pv: 3908, amt: 2000},
      {name: '11:00', uv: 1890, pv: 4800, amt: 2181},
      {name: '11:30', uv: 2390, pv: 3800, amt: 2500},
      {name: '12:00', uv: 3490, pv: 4300, amt: 2100},
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
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        );
    }

}
