//import React from "react";
//import { Link } from "gatsby";
import React, {useState} from "react";
import { Link } from "gatsby";

import HomeLayout from "../components/home-layout";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from "../utils/auth";

const Signup = () => {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
  try {
    // execute addUser mutation and pass in variable data from form
    console.log(data)
    console.log(formState)
    const { data } = await addUser({
      variables: { ...formState }

    });
    
    Auth.login(data.addUser.token);
  } catch (e) {
    console.error(e);
  }
  };

  return (
    <HomeLayout pageTitle="Sign Up">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">

          {/* BEGIN SIGNUP FORM */}
          <form className="pb-8 space-y-6" onSubmit={handleFormSubmit}>
            <input type="hidden" name="remember" value="true"></input>{" "}
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                  onChange={handleInputChange}
                //value={userFormData.password}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                ></input>{" "}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                ></input>{" "}
                <label
                  for="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium hover:text-[#03cea4]"
                >
                  Already have an account? Log in.
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-400 py-2 px-4 text-sm font-medium text-white hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
    </HomeLayout>
  );
};

export default Signup;
