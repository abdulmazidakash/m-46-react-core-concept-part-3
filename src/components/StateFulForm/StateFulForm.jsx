import { useState } from "react";


const StateFulForm = () => {

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [name, setName] = useState('rojoni kanto');
	const [error, setError] = useState('')

	const handleSubmit = e =>{
		e.preventDefault();
		if(password.length < 6){
			setError('password must be 6 characters or longer')
		}else{
			setError('')
			console.log(email, password, name);
		}
	}

	const handleEmailChange = e =>{
		// console.log(e.target.value);
		setEmail(e.target.value);
	}

	const handlePasswordChange = e =>{
		setPassword(e.target.value);
	}

	const handleNameChange = e =>{
		setName(e.target.value)
	}
	return (
		<div>
			<form onSubmit={handleSubmit} >
				<input
				value={name}
					onChange={handleNameChange}
				type="text" name="name" />
				<br />
				<input
					onChange={handleEmailChange}
				type="email" name="email" />
				<br />
				<input
					onChange={handlePasswordChange}
				type="password" name="password" id="" />
				<br />
				<input type="submit" name="" id="" value='submit' />

				{
					error && <p>{error}</p>
				}
			</form>
		</div>
	);
};

export default StateFulForm;