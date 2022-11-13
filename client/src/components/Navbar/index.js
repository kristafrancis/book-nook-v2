import React from 'react';
import Burger from '../Burger/Burger';
import Auth from '../../utils/auth';
//recommit
const Navbar = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      }
return (
    <>
    {/* ANIMATION HERE */}
    
        {/* NAVBAR AT 768PX & HIGHER */}
        <div className="uppercase tracking-widest">
            <div className="hidden md:flex bg-[#02030ac8] px-7 py-2 rounded-md font-semibold">
                <a href="/search" className="mr-4">
                    Search
                </a>
                <a className="mx-4" href="/profile">
                    Profile
                </a>
                <button onClick={logout}>
                    Logout
                </button>
            </div>

        {/* END ANIMATION */}

            {/* NAVBAR AT 768PX & LOWER */}
            <div className="md:hidden">
                <Burger />
            </div>
        </div>
    </>
  )
}

export default Navbar;