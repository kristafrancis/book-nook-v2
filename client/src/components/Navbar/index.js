import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import Auth from "../../utils/auth";

const Navbar = (props) => {
    const { animFinished, setAnimFinished } = props;

    const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    };

  return (
    <nav>
        <animated.div style={props}>

        <div className="mx-8 my-6 flex justify-between items-center">
            <div>
                <h1 className="drop-shadow-lg text-5xl md:text-7xl">
                <Link to="/search" className="hover:text-[#7286ff]">
                    book<span className="text-[#7286ff]">nook</span>
                </Link>
                </h1>
            </div>

            <div>
                {/* NAVBAR AT 768PX & HIGHER */}
                <div className="uppercase tracking-widest">
                <div className="hidden md:flex bg-[#02030ac8] px-7 py-2 rounded-md font-semibold">
                    <a href="/search" className="mr-6">Search</a>
                    <a className="mx-6" href="/profile">Profile</a>
                    <button onClick={logout} className="bg-transparent hover:bg-transparent ml-6 text-[#6bfbce] hover:text-[#7286ff]">Logout</button>
                </div>
                </div>
    
                {/* NAVBAR AT 768PX & LOWER */}
                <div className="md:hidden">
                <Burger />
                </div>
            </div>
        </div>

        </animated.div>
    </nav>
  );
};

export default Navbar;