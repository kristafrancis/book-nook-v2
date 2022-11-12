import React from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import Burger from "../Burger/Burger"

const Dashboard = ({ pageTitle, children }) => {
  return (
    <>
      <title>Book Nook | {pageTitle}</title>

      <nav>
        <div className="w-full my-6 flex justify-evenly space-x-60 items-center">
          <div>
            <h1 className="drop-shadow-lg text-5xl md:text-7xl">
              <a href="/search" className="hover:text-[#7286ff]">
                book<span className="text-[#7286ff]">nook</span>
              </a>
            </h1>
          </div>
          <div>
          </div>
          <Burger />
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
