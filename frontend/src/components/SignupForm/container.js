import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component{
    state = {
        email: "",
        name: "",
        username: "",
        password: ""
    }

    render(){

        const {email, name, username, password} = this.state;
        return <SignupForm handelInputChange={this._handelInputChange}
                    emailValue={email}
                    nameValue={name}
                    usernameValue={username}
                    passwordValue={password}
        
        />;


    }
    _handelInputChange = event => {
        console.log(event.target.value);
    }

}



export default Container;