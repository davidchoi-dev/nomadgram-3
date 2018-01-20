import { createStore, combineReducers } from 'redux';
import users from "redux/modules/users";

const reducer = conbineReducers({
    users
});

let stroe = initialState => createStore(reducer);

export default configureStore;