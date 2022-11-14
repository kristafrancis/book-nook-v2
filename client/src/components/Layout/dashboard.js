import React from "react";
import { useSpring, animated, useTransition } from "react-spring";
import Sparkle from "react-sparkle";
import { Link } from "react-router-dom";
import RandomAnimal from "../../hooks/RandomAnimal";
import Burger from "../Burger/Burger";
import Auth from "../../utils/auth";

const Dashboard = ({ children }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const style1 = useSpring({
    from: { opacity: 0, marginTop: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000 },
  });

  return (
    <>
      <nav className="mx-8 my-6 flex justify-between items-center">
        <div>
          <h1 className="drop-shadow-lg text-5xl md:text-7xl">
            <Link to="/search" className="hover:text-[#7286ff]">
              book<span className="text-[#7286ff]">nook</span>
            </Link>
          </h1>
        </div>
        <div>
          {/* ANIMATION HERE */}
          <animated.div style={style1}>
          {/* NAVBAR AT 768PX & HIGHER */}
          <div className="uppercase tracking-widest">
            <div className="hidden md:flex bg-[#02030ac8] px-7 py-2 rounded-md font-semibold">
              <a href="/search" className="mr-6">Search</a>
              <a className="mx-6" href="/profile">Profile</a>
              <button onClick={logout} className="bg-transparent hover:bg-transparent ml-6 text-[#6bfbce] hover:text-[#7286ff]">Logout</button>
            </div>
          </div>
        </animated.div>
      </div>

      {/* END ANIMATION */}

      {/* NAVBAR AT 768PX & LOWER */}
      <div className="md:hidden">
        <Burger />
      </div>
    </nav>

      <main>
        {/* GENERATE ANIMAL HEADER */}
        <animated.div style={style1}>
          <div className="mt-0 mb-8 flex flex-col justify-center items-center">
            <RandomAnimal />
            <Sparkle
              // color={'#f9d18f'}
              count={10}
              minSize={5}
              maxSize={15}
              fadeOutSpeed={20}
              flickerSpeed={"slowest"}
            />
          </div>
        </animated.div>

        {children}
      </main>

      <footer class="py-8 text-center">
        <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
        &copy; {new Date().getFullYear()} <a href="https://github.com/kristafrancis/book-nook-v2" target="_blank">The Spice Girls</a>, LLC.
        </p>
      </footer>
    </>
  );
};
export default Dashboard;
