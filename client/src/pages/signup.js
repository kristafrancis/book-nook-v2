import React from 'react';
import HomeLayout from '../components/home-layout';
import Auth from '../utils/auth';

const Signup = () => {
  return (
    <HomeLayout pageTitle="Sign Up">
      {/* SIGNUP FORM HERE & ADD LINK TO LOGIN PAGE */}
      <p>Signup Test</p>
    </HomeLayout>
    
    //to authorize login
    //const handleFormSubmit = async (event) => 
//  event.preventDefault();
//  try {
//    const { data } = await addUser({
//      variables: { ...formState },
//    });
//    Auth.login(data.addUser.token);
//  } catch (e) {
//    console.error(e);
//  }
//};
  )
}

export default Signup;