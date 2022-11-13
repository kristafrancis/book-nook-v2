import React from "react";
import { useSpring, animated, useTransition } from "react-spring";
import Sparkle from 'react-sparkle';
import { Link } from "react-router-dom";
// import Burger from "../Burger/Burger";
import RandomAnimal from "../../hooks/RandomAnimal";
import Navbar from '../Navbar';

const Dashboard = ({ pageTitle, children }) => {
  const style1 = useSpring({
    from: { opacity: 0, marginTop: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 3000 },
  });

  return (
    <>
      <title>Book Nook | {pageTitle}</title>

      <nav className="mx-8 my-6 flex justify-between items-center">
        <div>
          <h1 className="drop-shadow-lg text-5xl md:text-7xl">
            <Link to="/search" className="hover:text-[#7286ff]">
              book<span className="text-[#7286ff]">nook</span>
            </Link>
          </h1>
        </div>
        <div>
          <Navbar />
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
                flickerSpeed={'slowest'}
              />
            </div>
          </animated.div>
          {children}
      </main>

      <footer class="py-8 text-center">
        <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
          &copy; {new Date().getFullYear()} The Spice Girls, LLC.
        </p>
      </footer>
    </>
  );
};
export default Dashboard;
