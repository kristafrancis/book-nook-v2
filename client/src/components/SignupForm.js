import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
// import { Link } from "gatsby";
import Layout from "./Layout/home";
import Auth from '../utils/auth';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    //const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
       
        console.log(formState)

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
            setShowAlert(true);
        };
};

    return (
      <Layout pageTitle="Sign Up">
        <div className="w-full max-w-md flex items-center justify-center">
  
            {/* BEGIN SIGNUP FORM */}
            <div>
              {<Navigate to="/search" replace={true}/>}
            </div>
            <form className="w-[400px]" onSubmit={handleFormSubmit}>
              <input type="hidden" name="remember" value="true"></input>{" "}
              <div className="-space-y-px rounded-md shadow-lg">
                <div>
                  <label For="Username" className="sr-only">
                    Username
                  </label>
                  <input
                    name="username"
                    type="username"
                    autocomplete="username"
                    onChange={handleInputChange}
                    value= {formState.username}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md bg-[#22274f] border border-slate-700
                px-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-non
                focus:ring-indigo-500"
                    placeholder="Username"
                  ></input>{" "}
                </div>
                <div>
                  <label For="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    autocomplete="email"
                    onChange={handleInputChange}
                    value= {formState.email}
                    required
                    className="relative block w-full appearance-none rounded-none bg-[#22274f] border border-slate-700 px-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Email address"
                  ></input>{" "}
                </div>
                <div>
                  <label For="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleInputChange}
                    value={formState.password}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md bg-[#22274f] border border-slate-700 px-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Password"
                  ></input>{" "}
                </div>
              </div>

              <div className="flex items-center justify-between">
        
                <div className="text-sm pt-4 pb-6">
                <a href="/login"
                    className="font-medium"
                  >
                   Already have an account? Log in.
                  </a>
                </div>
              </div>
              <div>
                <button
                  disabled={!(formState.username && formState.email && formState.password)}
                  type="submit"
                  variant='success'
                  className="bg-[#7C87f2] group flex w-full justify-center rounded border border-transparent py-1 text-base md:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </span>
                  Sign up
                </button>
              </div>
            </form>
            {/* END SIGNUP FORM */}
    
      </div>
    </Layout>
  );
};
    
export default Signup;
