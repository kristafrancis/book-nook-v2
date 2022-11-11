import React, { useState } from "react";
import { Link } from "gatsby";
import { useMutation } from '@apollo/client';

import { USER_LOGIN } from '../utils/mutations';
import Auth from "../utils/auth";
import Layout from '../components/Layout/home';

const Login = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [loginUser] = useMutation(USER_LOGIN);
    
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      // check if form has everything (as per react-bootstrap docs)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        const {data} = await loginUser({
          variables: {...userFormData}
        });
  
        //const { token, user } = await response.json();
       // console.log(user);
        Auth.login(data.login.token);
      } catch (err) {
        console.error(err);
        
      }
  
      setUserFormData({
        username: '',
        email: '',
        password: '',
      });
    };


  return (                                                                                                                                    

  <Layout pageTitle="Log In">
    <form noValidate validated={validated} onSubmit={handleFormSubmit}></form>
      <div class="flex items-center justify-center">
        <div class="w-full max-w-md">

          {/* BEGIN LOGIN FORM */}
          <form class="space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true"></input>{" "}
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" class="sr-only">
                  
                  Email address
                </label>
                  <input
                      id="email-address"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      onChange={handleInputChange}
                      value={userFormData.email}
                      class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    ></input>{" "}
                  </div>
                  <div>
                    <label for="password" class="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      onChange={handleInputChange}
                      value={userFormData.password}
                      required
                      class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    ></input>{" "}
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    ></input>{" "}
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm"
                    >
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <Link
                      to="/signup"
                      className="font-medium"
                    >
                      Don't have an account? Sign up.
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#7C87f2] group flex w-full justify-center rounded-md py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
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
            {/* END LOGIN FORM */}

        </div>
      </div>
    </Layout>
  );
};


export default Login;