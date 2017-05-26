export  function AddUser (data){

	console.log('Ata action data is '+data);

	return ({
		type:'AddUser',
		payload:data
	});


}