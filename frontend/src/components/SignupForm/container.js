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
        console.log(event.target.name);
    }

}



export default Container;