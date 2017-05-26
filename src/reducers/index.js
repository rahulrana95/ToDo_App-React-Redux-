// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import AddUser from './addUser.js';




let rootReducers=combineReducers({
	userData:AddUser


});


export default rootReducers;