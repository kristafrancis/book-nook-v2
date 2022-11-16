import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  // const [validated] = useState(false);
  const [loginUser] = useMutation(USER_LOGIN);
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
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="w-full h-full">
      <h2 className="pb-8 text-5xl text-center font-medium drop-shadow">
        Welcome Back
      </h2>

      <div className="w-[500px] mx-auto bg-slate-900 p-10 rounded-lg shadow-lg">
        <form
          className="w-[full]"
          action="#"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <div className="rounded-md shadow-lg">
          <label for="email-address" className="sr-only">
            Email address
          </label>
          <input type="hidden" name="remember" value="true"></input>{" "}
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
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                onChange={handleInputChange}
                value={formState.email}
                className="block w-full appearance-none rounded-none rounded-t-md bg-[#22274f] border border-slate-700 pl-10 pr-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
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
              <label for="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                onChange={handleInputChange}
                value={formState.password}
                className="block w-full appearance-none rounded-none rounded-b-md bg-[#22274f] border border-slate-700 pl-10 pr-3 py-2 text-sm md:text-lg text-gray-200 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm pt-4 pb-6">
              <a href="/signup" className="font-medium">
                Don't have an account? Sign up.
              </a>
            </div>
          </div>
          <div>
            <button
              disable={!(formState.email && formState.password)}
              type="submit"
              variant="sucess"
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
    </main>
  );
};

export default Login;
