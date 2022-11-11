import React from "react";
import { useSpring, animated, useTransition } from "react-spring";
import "../../styles/global.css";

import BgImg from "../../images/bg.png";
import CatImg from "../../images/animals/cat.png";
// import HedgehogImg from "../../images/animals/hedgehog.png";

const HomeLayout = ({ pageTitle, children }) => {
  const style1 = useSpring({
    from: { opacity: 0, marginTop: -100 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 3000 },
  });

  return (
    <>
      <title>Book Nook | {pageTitle}</title>
      <header>
        <div
          className="bg-fixed bg-repeat-x bg-top absolute top-0 left-0 w-full h-full z-[-10]"
          style={{ backgroundImage: `url(${BgImg})` }}
        ></div>
      </header>

      <main className="w-full h-full relative flex flex-col justify-center items-center">
        <animated.div style={style1}>
          <div className="flex flex-col justify-center items-center">
            <img src={CatImg} className="mt-20 w-[250px]" />
          </div>
        </animated.div>
        <h1 className="font-medium drop-shadow-lg pb-8 text-6xl md:text-8xl md:mt-10">
          Book<span className="text-[#7286ff]">Nook</span>
        </h1>

        <div className="bg-[#090c26] p-8 rounded-lg shadow-lg">{children}</div>
      </main>

      <footer>
        <p class="text-center p-6 md:text-base text-sm tracking-wider font-medium text-gray-400">
          &copy; {new Date().getFullYear()} The Spice Girls, LLC.
        </p>
      </footer>
    </>
  );
};

export default HomeLayout;
