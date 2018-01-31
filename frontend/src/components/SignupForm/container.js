import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component{
    state = {
        email: "",
        fullname: "",
        username: "",
        password: ""
    }

    render(){

        const {email, fullname, username, password} = this.state;
        return <SignupForm handelInputChange={this._handelInputChange}
                    emailValue={email}
                    fullnameValue={fullname}
                    usernameValue={username}
                    passwordValue={password}
        
        />;


    }
    _handelInputChange = event => {
        const {target: { name, value }} = event;
        console.log(value,name);
    }

}



export default Container;