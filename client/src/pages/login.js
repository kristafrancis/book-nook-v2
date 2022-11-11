import React from "react";
import { Link } from "gatsby";

import HomeLayout from "../components/home-layout";
import Auth from "../utils/auth";

const Login = () => {
  return (
    <HomeLayout pageTitle="Log In">
      <div class="flex items-center justify-center">
        <div class="w-full max-w-md space-y-8">

          {/* BEGIN LOGIN FORM */}
          <form class="pb-8 space-y-6" action="#" method="POST">
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
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <Link
                  to="/signup"
                  className="font-medium hover:text-[#03cea4]"
                >
                  Don't have an account? Sign up.
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-400 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
    </HomeLayout>
  );
};

export default Login;
