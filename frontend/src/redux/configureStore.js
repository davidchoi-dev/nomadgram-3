import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import users from "redux/modules/users";

const middelwares = [thunk];

const env = process;

console.log(env);

const reducer = combineReducers({
  users
});


let store = initialState => 
  createStore(reducer, applyMiddleware(...middelwares));


export default store();