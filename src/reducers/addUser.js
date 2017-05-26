let my=[{name:'Rahul',
				college:'NSIT',
				intern:'Xprep',
				status:'True'},
				{name:'Amit',
				college:'NSIT',
				intern:'Xprep',
				status:'True'},
				{name:'Bikash',
				college:'NSIT',
				intern:'Xprep',
				status:'True'},
				{name:'Bikashasdas',
				college:'NSIT',
				intern:'Xprep',
				status:'True'}];

export default  function AddUser (state=my,action)
	{

		if(action.type==='AddUser'){


			console.log('Reducer Recieved payload is '+(action.payload.name));
			
			return state=state.concat({name:action.payload.name,
								college:action.payload.college,
								intern:action.payload.intern,
								status:action.payload.status
								});

		}

		return state;



	}