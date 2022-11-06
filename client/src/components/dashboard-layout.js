import React from "react";
import { Link } from "gatsby";
import bgImg from "../images/bg.png";
import FeedLayout from "../components/feed-layout";
import Footer from "../components/footer";

const Dashboard = ({ pageTitle, children }) => {
  return (
    <div>
      <title>Book Nook | {pageTitle}</title>
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
            <a class="hover:text-teal-400 font-semibold mr-6" href="#">
              Search
            </a>
            <a class="hover:text-teal-400 font-semibold mr-6" href="/dashboard">
              Dashboard
            </a>
            <a class="hover:text-teal-400 font-semibold mr-6" href="#">
              Profile
            </a>
            <a class="hover:text-teal-400 font-semibold mr-6" href="#">
              Logout
            </a>
          </ul>
        </div>
      </nav>

      <main className="z-[5] pb-5">{children}</main>
      <FeedLayout />
      {/* This footer component is only used on this page for correct sequence */}
      <Footer />
    </div>
  );
};
export default Dashboard;
