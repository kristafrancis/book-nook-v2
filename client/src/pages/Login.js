import * as React from "react";
import { useState } from 'react';
import Layout from '../components/Layout/home'
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../utils/mutations';
import Auth from "../utils/auth";


const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(USER_LOGIN);
    
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    };
  

  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const {data} = await login({
          variables: {...formState}
        });
  
     
        Auth.login(data.login.token);
      } catch (err) {
        console.error(err);
        
      }
  
      setFormState({
        email: '',
        password: '',
      });
    };

const Login = () => {

  return (    
    <>                                                                                                                                                                                                                                                  
      <Layout pageTitle="Log In">
        <div className="w-full max-w-md flex items-center justify-center">
        

        <form className="w-[400px]" onSubmit={handleFormSubmit}>
          <input type="hidden" name="remember" value="true"></input>{" "}
            <div className="rounded-md shadow-lg">
              <div>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                  <input
                      id="email-address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      autocomplete="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md bg-[#22274f] border border-slate-700 px-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                      placeholder="Email address"
                    ></input>{" "}
                  </div>
                  <div>
                    <label for="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md bg-[#22274f] border border-slate-700 px-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                      placeholder="Password"
                      value={formState.password}
                      onChange={handleChange}
                    ></input>{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between">
            

                  <div className="text-sm pt-4 pb-6">
                    <a href="/signup"
                      className="font-medium"
                    >
                      Don't have an account? Sign up.
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#7C87f2] w-full group flex justify-center rounded-md py-1 text-base md:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>

    </div>
  </Layout>
 </>
  );
};
}

export default Login;