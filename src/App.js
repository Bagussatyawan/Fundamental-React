import React, { Component, useState } from 'react';


import UserInput from "./Components/User-Input"
import UserOutput from "./Components/User-Output"
import UserSubmit from "./Components/User-Submit"
import { render } from '@testing-library/react';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: ''
        }
    }

    changeUser = (event) => {
        this.setState({
            user: event.target.value
        }) 
    }
    
    checkInput = (event) => {
        if (this.state.user.length=== 0) {
            alert('input kosong')
        } else {
            alert(this.state.user)
        }
    }

    render() {
    return (
        <div>
            <UserInput user={this.state.user} changeUser={this.changeUser}/>
            <UserOutput user={this.state.user}/>
            <UserSubmit checkInput={this.checkInput}/>

        </div>
    )
}
}


export default App
