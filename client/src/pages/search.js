import React from "react";
import { Link } from "gatsby";
import bgImg from "../images/bg.png";
import FeedLayout from "../components/feed-layout";
import Footer from "../components/footer";

const Search = () => {
  return (
    <div>
      <title>Book Nook | Search</title>
      <header>
        <div
          className="stars-bg bg-fixed bg-repeat-x bg-top absolute top-0 left-0 w-full h-full z-0"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
      </header>

      <nav>
        <div className="w-[80%] my-8 flex justify-between items-center mx-auto">
          <h1 className="font-light drop-shadow-lg py-4 text-5xl md:text-7xl">
            <Link
              to="/dashboard"
              className="text-[#027bce] hover:text-[#03cea4]"
            >
              Book<span className="text-[#03cea4]">Nook</span>
            </Link>
          </h1>
          <ul className="h-full flex items-center list-none z-[5] text-base">
            {/* NAVIGATION LINKS HERE */}
            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900 font-semibold mr-6"
              href="/search"
            >
              Search
            </a>

            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900  font-semibold mr-6"
              href="/dashboard"
            >
              Dashboard
            </a>
            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900  font-semibold mr-6"
              href="/profile"
            >
              Profile
            </a>
            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900  font-semibold mr-6"
              href="#"
            >
              Logout
            </a>
          </ul>
        </div>
      </nav>

      <div class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <div class="relative flex h-16 justify-between">
            <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
              <div class="w-full sm:max-w-xs">
                <label for="search" class="sr-only">
                  Search
                </label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
