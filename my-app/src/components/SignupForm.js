import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
// import { Link } from "gatsby";
import Layout from "../components/Layout/home";
import Auth from '../utils/auth';

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

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
            setShowAlert(true);
        };
    };

    return (
        <Layout pageTitle="Sign Up">
           <link href="/dist/output.css" rel="stylesheet"></link>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
    
              {/* BEGIN SIGNUP FORM */}
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <input type="hidden" name="remember" value="true"></input>{" "}
                <div className="-space-y-px rounded-md shadow-sm">
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
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    ></input>{" "}
                  </div>
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
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300
                  px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-non
                  focus:ring-indigo-500 sm:text-sm"
                      placeholder="Username"
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
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    ></input>{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between">
          
                  
    
                  <div className="text-sm">
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
                    className="bg-[#7C87f2] group flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
          </div>
        </Layout>
      );
    };
    
    export default Signup;
