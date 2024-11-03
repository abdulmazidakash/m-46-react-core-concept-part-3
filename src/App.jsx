
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  
	const handleSignUpSubmit = data =>{
		console.log('sign up data', data);
	}

  const handleUpdateProfile = data =>{
    console.log('update profile', data);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
      formTitle={'sign up'} 
      handleSubmit={handleSignUpSubmit}

       >
        <div>
            <h2>Sign up</h2>
            <p>please sign up right now</p>
        </div>

      </ReusableForm>
      
      <ReusableForm 
      formTitle={'profile update'} 
      handleSubmit={handleUpdateProfile} 
      submitBtnText='Update' >
        <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
        </div>

      </ReusableForm>
      
    </>
  )
}

export default App
