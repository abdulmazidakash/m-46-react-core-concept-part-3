import useInputState from "../hooks/useInputState";


const HookForm = () => {

	// const [name, handleNameChange] = useInputState('Rojoni hooked');
	const emailState = useInputState('rojoni@sojoni.go')

	const handleSubmit = e =>{
		console.log('form data', emailState.value);
		e.preventDefault();
	}
	return (
		<div>
			<form onSubmit={handleSubmit} >
				{/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
				<br />
				<input {...emailState}  type="email" name="email" />
				<br />
				<input type="password" name="password" id="" />
				<br />
				<input type="submit" name="" id="" value='submit' />
			</form>
		</div>
	);
};

export default HookForm;