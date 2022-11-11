import React from "react";
import { Link } from "gatsby";
import "../../styles/global.css";
import BgImg from "../../images/bg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Burger from "../Burger/Burger"

const Dashboard = ({ pageTitle, children }) => {
  return (
    <>
      <title>Book Nook | {pageTitle}</title>
      <header>
        <div
          className="bg-fixed bg-repeat-x bg-top absolute top-0 left-0 w-full h-full z-[-10]"
          style={{ backgroundImage: `url(${BgImg})` }}
        ></div>
        {/* DELETE THIS COMMENT LATER */}
      </header>

      <nav>
        <div className="w-[80%] my-8 flex justify-between items-center mx-auto">
          <h1 className="font-light drop-shadow-lg py-4 text-5xl md:text-7xl">
            <Link to="/search" className="hover:text-[#7286ff]">
            Book<span className="text-[#7286ff]">Nook</span>
            </Link>
          </h1>
      
<Burger />

        </div>
      </nav>

      <main className="z-[5] pb-5">{children}</main>

      <footer class="z-[5] py-8 text-center">
        <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
          &copy; {new Date().getFullYear()} The Spice Girls, LLC.
        </p>
      </footer>
    </>
  );
};
export default Dashboard;
