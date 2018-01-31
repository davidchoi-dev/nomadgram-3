import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component{
    state = {
        username: "",
        password: ""
    }

    render(){
        const { username, password } = this.state;
        return <LoginForm hanleInputChange={this._handleInputChange}  usernameValue={username} passwordValue={password} />
    }
    _handleInputChange = event => {
        console.log(event);
    }
}

export default Container;