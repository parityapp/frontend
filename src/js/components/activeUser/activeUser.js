// imports
import React from 'react';

// nav component
export default class ActiveUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: "Swampneel"
        }
    }

    render(){

        const imgStyle = {
            borderRadius: '50%',
            width: '60px',
            height: '60px'
        };

        return(
            <div className="activeUser">
                <div className="container app-container">
                    <h2>Most active user</h2>
                    <img style={imgStyle} src="http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg" />
                    <h3>{this.state.user}</h3>
                </div>
            </div>
        )
    }

}
