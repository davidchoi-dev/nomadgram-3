import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component{
    state = {
        email: "",
        username: "",
        password: ""
    }

    render(){

        const {email, name, username, password} = this.state;
        return <SignupForm emailValue={email}
                    nameValue={name}
                    usernameValue={username}
                    passwordValue={password}
        
        />;


    }
    _handelInputChange = event => {
        const { target: { value, name }} = event;
        this.setState({
            [name]: value
        })
        console.log(event);

    }
}



export default Container;