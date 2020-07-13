import React, { Component } from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" value={props.user} onChange={props.changeUser}/>
        </div>
    )
}
  
export default UserInput

  
    
  




