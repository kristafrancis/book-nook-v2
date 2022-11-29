import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  //const [validated] = useState(false);
  const [setShowAlert] = useState(false);
  const [addUser] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    navigate("/search");
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <main className="w-full h-full">
      <h2 className="pb-8 text-5xl text-center font-medium drop-shadow">
        Create New Account
      </h2>

      <div className="w-[500px] mx-auto bg-slate-900 p-10 rounded-lg shadow-lg">
        {/* BEGIN SIGNUP FORM */}
        <form className="w-[full]" onSubmit={handleFormSubmit}>
          <input type="hidden" name="remember" value="true"></input>{" "}
          <div className="-space-y-px rounded-md shadow-lg">
            <div class="relative rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-auto text-teal-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <label For="Username" className="sr-only">
                Username
              </label>
              <input
                name="username"
                type="username"
                autocomplete="username"
                onChange={handleInputChange}
                value={formState.username}
                required
                className="block w-full appearance-none rounded-none rounded-t-md bg-[#22274f] border border-slate-700
                pl-10 pr-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-non
                focus:ring-indigo-500"
                placeholder="Username"
              ></input>
            </div>
            <div class="relative rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-auto text-teal-300"
                >
                  <path
                    stroke-linecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </div>
              <label For="email-address" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autocomplete="email"
                onChange={handleInputChange}
                value={formState.email}
                required
                className="block w-full appearance-none rounded-none bg-[#22274f] border border-slate-700 pl-10 pr-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Email address"
              ></input>
            </div>
            <div class="relative rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-auto text-teal-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
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
                  className="block w-full appearance-none rounded-none rounded-b-md bg-[#22274f] border border-slate-700 pl-10 pr-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Password"
                ></input>
            </div>
          <div className="flex items-center justify-between">
            <div className="text-sm pt-4 pb-6">
              <a href="/login" className="font-medium">
                Already have an account? Log in.
              </a>
            </div>
          </div>
          <div>
            <button
              disabled={
                !(formState.username && formState.email && formState.password)
              }
              type="submit"
              variant="success"
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
          </div>
        </form>
        {/* END SIGNUP FORM */}
      </div>
    </main>
  );
};

export default Signup;
