import React, {useState, useEffect} from 'react';
//import PetsDiv from '../components/petsDiv';
//import pet from '../components/pet';

const Pets = () => {
	const callRestApiPets = async () => {
		const response = await fetch("/pets");
		const jsonResponse = await response.json();
		console.log(jsonResponse);
		const arrayOfLists = jsonResponse.map(
			pets => <li key={pets.id}><b>{pets.Name}</b>{pets.Type}</li>
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
            <h2>Pets</h2>
              {apiResponsePets}
        </div>
	</div>
);
};

export default Pets;
