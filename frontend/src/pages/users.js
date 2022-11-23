import React, { useState, useEffect } from 'react';
//import User from '../components/user';
const callRestApiUsers = async () => {
	const response = await fetch("/getusers");
	const jsonResponse = await response.json();
	console.log(jsonResponse);
	// const arrayOfLists = jsonResponse.map(
	// 	user => <User className='element' 
	// 		key={user._id} 
	// 		name={user.First_name} 
	// 		lname={user.Last_name} 
	// 		email={user.Email} 
	// 		npets={user.Number_of_pets} 
	// 		//onClick={(DeleteUser) => handleClick(DeleteUser, user._id)}
	// 		/>
	//   )
	return jsonResponse;
};

const Users = () => {
	const [apiResponseUsers, setApiResponseUsers] = useState([]);
	const [fnameValue, setFnameValue] = useState("");
	const [lnameValue, setLnameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [successCounter, setSuccessCounter] = useState(0);

	useEffect(() => {
		callRestApiUsers().then(
			result => setApiResponseUsers(result));
	}, [successCounter]);

	function User(props) {

		return (
			<>
				{
					props.data.map((u) => (
						<div className="element">
							<h1>{u.First_name}</h1>
							<h1>{u.Last_name}</h1>
							<p>{u.Email}</p>
							<p>{u.npets}</p>
							<button className="editBtn">Edit</button>
							<button className="delBtn" onClick={(e) => deleteClick(e, u._id)}>Delete</button>
						</div>
					))

				}
			</>
		);

	}




	function HandleFnameChange(event) {
		setFnameValue(event.target.value);
	}

	function HandleLnameChange(event) {
		setLnameValue(event.target.value);
	}

	function HandleEmailChange(event) {
		setEmailValue(event.target.value);
	}

	function insertClick() {
		setApiResponseUsers(apiResponseUsers
			.concat(<User
				key={User._id}
				name={fnameValue}
				lname={lnameValue}
				email={emailValue} />));
		AddNewUser(fnameValue, lnameValue, emailValue)
			.then(response => {
				setSuccessCounter(successCounter + 1);
			}
			);
	}

	const AddNewUser = async (Fname, Lname, Email) => {
		const UserBodyParameters = {
			'First_name': Fname,
			'Last_name': Lname,
			'Email': Email
		}

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(UserBodyParameters)
		}
		const response = await fetch("/postuser", options);
		const jsonResponse = await response.json();
		console.log(JSON.stringify(jsonResponse));
		return jsonResponse;
	}


	const deleteClick = (evt, _id) => {
		console.log(_id);
		DeleteUser(_id)
		setApiResponseUsers(current => current.filter((item) => {
			console.log(item);
			return item._id !== _id
		}));
		console.log(apiResponseUsers);
	};


	const DeleteUser = async (_id) => {
		const UserBodyParameters = {
			'_id': _id
		}

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(UserBodyParameters)
		}
		const response = await fetch("/deleteuser", options);
		const jsonResponse = await response.json();
		console.log(JSON.stringify(jsonResponse));
		return jsonResponse;
	}
	return (
		<div>
			<div className='form'>
				<form className='element'>
					<h2>Insert User</h2>
					<div>
						<label htmlFor="fname-input">First name:</label>
						<input type="text" value={fnameValue} id="fname-input" onChange={HandleFnameChange} />
					</div>
					<div>
						<label htmlFor="lname-input">Last name:</label>
						<input type="text" value={lnameValue} id="lname-input" onChange={HandleLnameChange} />
					</div>
					<div>
						<label htmlFor="email-input">Email:</label>
						<input type="text" value={emailValue} id="email-input" onChange={HandleEmailChange} />
					</div>
					<button type="button" onClick={insertClick}>Insert User</button>

				</form>
				<form className='element'>
					<h2>Edit User</h2>
					<div>
						<label htmlFor="fname-edit">First name:</label>
						<input type="text" value={fnameValue} id="fname-edit" onChange={HandleFnameChange} />
					</div>
					<div>
						<label htmlFor="lname-edit">Last name:</label>
						<input type="text" value={lnameValue} id="lname-edit" onChange={HandleLnameChange} />
					</div>
					<div>
						<label htmlFor="email-edit">Email:</label>
						<input type="text" value={emailValue} id="email-edit" onChange={HandleEmailChange} />
					</div>
					<button type="button">Submit</button>

				</form>
			</div>
			<h2>Users</h2>
			<User data={apiResponseUsers} />
		</div>
	);
};

export default Users;
