import React from "react";
import { Link } from "gatsby";
import bgImg from "../images/bg.png";
import FeedLayout from "../components/feed-layout";
import Footer from "../components/footer";

const Search = () => {
  return (
    <div>
      <title>Book Nook | Profile</title>
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
      <div>
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Quick search
        </label>
        <div className="relative mt-1 flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
