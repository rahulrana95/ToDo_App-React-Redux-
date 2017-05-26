import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {AddUser}  from '../actions/addUser.js';

  class InputForm extends Component{

		constructor(){
			super();

			this.name='';
			this.college='';
			this.intern='';
			this.data={};


		}	


		handleName(e){

			this.name=e.target.value;
			

		}

		handleCollege(e){

			this.college=e.target.value;
			

		}

		handleIntern(e){

			this.intern=e.target.value;
			this.data={
					name:this.name,
					college:this.college,
					intern:this.intern,
					status:true
					};

			console.log('dynamic Data '+this.data);		
			

		}	
		

				createData(){
					let inputData={name:this.name,
									college:this.college,
									intern:this.intern,
									status:true};


					return inputData;
				}

				createListItems(){

							let inputData=this.createData();
							console.log('Function '+ this.createData()); 		

						 			return <button onClick={() => this.props.AddUser(inputData)}> ADD me</button>;
						 		

						 }	


		render(){

				
			return(

					<div className="InputForm" style={{textAlign:'center'}}>

						<label>Name: </label><input  onChange={this.handleName.bind(this)} /><br/>
						<label>College: </label><input  onChange={this.handleCollege.bind(this)} /><br/>
						<label>Intern Company: </label><input  onChange={this.handleIntern.bind(this)} /><br/>
						<br/> 
						{this.createListItems()}
						
						
					</div>

				);

		}


}



function mapStateToProps(state){

	console.log('State to Prop called');
	return {
		userData:state.userData
	};

		
	}

function matchDispatchToProps(dispatch){

		console.log('Inc Dispatcher Called');
	return bindActionCreators({AddUser},dispatch);


}	

export default connect(mapStateToProps,matchDispatchToProps)(InputForm);