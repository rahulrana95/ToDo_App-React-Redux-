// Set up your application entry point here...
import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root';
import {Provider} from 'react-redux';
import store from './store/index.js';



ReactDom.render(
				<Provider store={store}>
				<Root/>
				</Provider>,
				document.getElementById('root')


			);


