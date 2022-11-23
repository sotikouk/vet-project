import React, { useState, useEffect } from 'react';
import User from '../components/user';
import Pet from '../components/pet'

const Home = () => {

	 const callRestApiUsers = async () => {
		const response = await fetch("/getusers");
		const jsonResponse = await response.json();
		console.log(jsonResponse);
		const arrayOfLists = jsonResponse.map(
			user => <User className='element' 
				key={user._id} 
				name={user.First_name} 
				lname={user.Last_name} 
				email={user.Email} 
				npets={user.Number_of_pets} />
		  )
		  return arrayOfLists;
	};

		const [apiResponseUsers, setApiResponseUsers] = useState("*** now loading ***");
	  
		useEffect(() => {
			callRestApiUsers().then(
				result => setApiResponseUsers(result));
		},[]);
	  
		const callRestApiPets = async () => {
			const response = await fetch("/pets");
			const jsonResponse = await response.json();
			console.log(jsonResponse);
			const arrayOfLists = jsonResponse.map(
				pet => <Pet 
					key={Pet.id} 
					Name={pet.Name} 
					Type={pet.Type} 
					Owner={pet.Owner_ID} />
			  )
			  return arrayOfLists;
		};
	
			const [apiResponsePets, setApiResponsePets] = useState("*** now loading ***");
		  
			useEffect(() => {
				callRestApiPets().then(
					result => setApiResponsePets(result));
			},[]);

return (
	<div>
	
	<div className='usersDiv'>
            <h2>Users</h2>
              {apiResponseUsers}
        </div>
		<div className='usersDiv'>
            <h2>Pets</h2>
              {apiResponsePets}
        </div>
	</div>
);
}

export default Home;
