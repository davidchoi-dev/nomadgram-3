// imports


// actions


//action creators


//inital state


const initalState = {
    isLoggedIn :localStorage.getItem("jwt") || false
};

//reducer

function reducer(state = initialState, action){
    switch(action, type){
        default:
            return state;
    }
}

//reducer functions


//exports


// reducer export


export default reducer;