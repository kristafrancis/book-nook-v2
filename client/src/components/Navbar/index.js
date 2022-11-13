import React from 'react';
import Burger from '../Burger/Burger';

const Navbar = () => {
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
                <a className="ml-4" href="#">
                    Logout
                </a>
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