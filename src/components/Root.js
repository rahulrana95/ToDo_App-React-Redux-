import React,{Component} from 'react';
import InputForm from './InputForm';
import ShowUsers from '../containers/ShowUsers';


export default  class Root extends Component{


		

		render(){

			console.log('Root Props is ' + JSON.stringify(this.props));

			return(

					<div className="Root" style={{textAlign:'center'}}>

						<h1>ToDo App For You!</h1>

						<InputForm/>
						<hr/>
						<h2>Users!</h2>
						<ShowUsers/>
					</div>

				);

		}


}


