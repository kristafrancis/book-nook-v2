import React from "react";
import { Link } from "gatsby";
import bgImg from "../images/bg.png";
import FeedLayout from "../components/feed-layout";
import Footer from "../components/footer";

const Profile = () => {
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
            <a class="hover:text-teal-400 font-semibold mr-6" href="/404">
              Search
            </a>
            <a class="hover:text-teal-400 font-semibold mr-6" href="/dashboard">
              Dashboard
            </a>
            <a class="hover:text-teal-400 font-semibold mr-6" href="/profile">
              Profile
            </a>
            <a class="hover:text-teal-400 font-semibold mr-6" href="/404">
              Logout
            </a>
          </ul>
        </div>
      </nav>

      <div class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 class="text-3xl font-semibold text-gray-900 sm:text-4xl bg-gray-50">
            User234212
          </h2>
        </div>
        <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          <div>
            <div>
              <a href="#" class="inline-block">
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-200 text-[#027bce]">
                  Reading Goal
                </span>
              </a>
            </div>
            <a href="#" class="mt-4 block">
              <p class="text-xl font-semibold text-gray-900">Reading Goal</p>
              <p class="mt-3 text-base text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </a>
          </div>

          <div>
            <div>
              <a href="#" class="inline-block">
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-200 text-[#027bce]">
                  Favorites
                </span>
              </a>
            </div>
            <a href="#" class="mt-4 block">
              <p class="text-xl font-semibold text-gray-900">Favorites</p>
              <p class="mt-3 text-base text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </a>
          </div>

          <div>
            <div>
              <a href="#" class="inline-block">
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-200 text-[#027bce]">
                  Friends
                </span>
              </a>
            </div>
            <a href="#" class="mt-4 block">
              <p class="text-xl font-semibold text-gray-900">Friends</p>
              <p class="mt-3 text-base text-gray-500 pb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                iure iusto fugiat commodi sequi.
              </p>
            </a>

            <button class="bg-teal-400 hover:bg-teal-300 p-2 text-xs rounded-md">
              Search Users
            </button>
          </div>
        </div>
      </div>

      <div class="pt-20">
        <Footer />
      </div>
    </div>
  );
};
export default Profile;
