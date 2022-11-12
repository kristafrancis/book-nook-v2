import React from "react";
// import { Link } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Burger from "../Burger/Burger"

const Dashboard = ({ pageTitle, children }) => {
  return (
    <>
      <title>Book Nook | {pageTitle}</title>

      <nav>
      <link href="/dist/output.css" rel="stylesheet"></link>
        <div className="w-full mx-8 my-6 flex justify-between items-center">
          <div>
            <h1 className="drop-shadow-lg text-5xl md:text-7xl">
              <Link to="/search" className="hover:text-[#7286ff]">
                book<span className="text-[#7286ff]">nook</span>
              </Link>
            </h1>
          </div>
      
          <div>
            <Burger />
          </div>
        </div>
      </nav>


      <main className="z-[5] pb-5">{children}</main>

      <footer class="py-8 text-center">
        <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
          &copy; {new Date().getFullYear()} The Spice Girls, LLC.
        </p>
      </footer>
    </>
  );
};
export default Dashboard;
