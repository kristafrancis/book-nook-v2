import React from "react";
import { useSpring, animated } from "react-spring";
import Sparkle from "react-sparkle";
import Burger from "../Burger/Burger";
import RandomAnimal from "../../hooks/RandomAnimal";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const style1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <nav>
        <animated.div style={style1}>
          <div className="mx-8 my-6 flex justify-between items-center">
            <div>
              <h1 className="drop-shadow-lg text-5xl md:text-7xl">
                <Link to="/" className="hover:text-[#7286ff]">
                  book<span className="text-[#7286ff]">nook</span>
                </Link>
              </h1>
            </div>

            <div>
              {/* NAVBAR AT 768PX & HIGHER */}
              <div className="uppercase tracking-widest">
                {Auth.loggedIn() ? (
                    <>
                      <Link to="/search" className="mr-6">
                        Search
                      </Link>
                      <Link to="/profile" className="mx-6">
                        Profile
                      </Link>
                      <button
                        onClick={logout}
                        className="bg-transparent hover:bg-transparent ml-6 text-[#6bfbce] hover:text-[#7286ff]"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/signup" className="mr-6">
                        Sign Up
                      </Link>

                      <Link to="/login" className="ml-6">
                        Log In
                      </Link>
                    </>
                  )}
                </div>

              {/* HAMBURGER MENU AT 768PX & LOWER */}
              <div className="md:hidden">
                <Burger />
              </div>
            </div>
          </div>
        </animated.div>
      </nav>

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
    </header>
  );
};

export default Header;