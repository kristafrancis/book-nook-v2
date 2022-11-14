import React from "react";
import { useSpring, animated, useTransition } from "react-spring";
import Burger from "../Burger/Burger";
import Auth from "../../utils/auth";
//recommit
const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const style1 = useSpring({
    from: { opacity: 0, marginTop: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 3000 },
  });

  return (
    <>
      {/* ANIMATION HERE */}
      <animated.div style={style1}>
        {/* NAVBAR AT 768PX & HIGHER */}
        <div className="uppercase tracking-widest">
          <div className="hidden md:flex bg-[#02030ac8] px-7 py-2 rounded-md font-semibold">
            <a href="/search" className="mr-4">
              Search
            </a>
            <a className="mx-4" href="/profile">
              Profile
            </a>
            <button onClick={logout}>Logout</button>
          </div>

          {/* END ANIMATION */}

          {/* NAVBAR AT 768PX & LOWER */}
          <div className="md:hidden">
            <Burger />
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default Navbar;
