// imports
import React from 'react';

// nav component
export default class ActiveUser extends React.Component{
    render(){
        // styles
        const style = {
            border: '#e1e8ed solid 1px',
            padding: '10px',
            borderRadius: '5px',
            background: "#fbfbfb",
            padding: '20px',
            marginTop: "50px"
        };

        const imgStyle = {
            borderRadius: '50%',
            width: '60px',
            height: '60px'
        };

        return(
            <div className="activeUser">
                <div style={style} className="container">
                    <h2>Most active user</h2>
                    <img style={imgStyle} src="http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg" />
                    <h3>Swampneel</h3>
                </div>
            </div>
        )
    }

}
