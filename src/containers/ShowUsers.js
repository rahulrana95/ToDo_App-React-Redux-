import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ShowUsers extends Component{
					
		
			show(){
				return this.props.userData.map((user)=>{

					return (<li><li>Name: {user.name}</li>
									College:{user.college}<br/> 
									Internship:{user.intern}  <br/>
									Work-Status:{user.status} <hr/></li>);
				})

			}

				render(){
			
			console.log('ShowUsers Data Recieved is '+JSON.stringify(this.props.userData));

			


			return(


					<div className="ShowUsers" style={{textAlign:'center',backgroundColor:'#60b189',width:'60%',marginLeft:'auto',marginRight:'auto',padding:'20px 20px 20px 20px'}}>

					<ul style={{listStyleType:'none'}}>
						{this.show()}
						
					</ul>				

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
	return bindActionCreators({},dispatch);


}	

export default connect(mapStateToProps,matchDispatchToProps)(ShowUsers);

