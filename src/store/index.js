import {createStore} from 'redux';

import rootReducers from '../reducers/index.js'




let store=createStore(rootReducers);



store.subscribe(()=>{

	console.log('Dispacther Fired and get state is ');

});



export default store;






