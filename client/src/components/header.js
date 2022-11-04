import React from 'react';
import HeroImg from '../images/hero.png';

const Header = () => {
  return (
    <header>
        <div
            className="hero bg-fixed bg-cover bg-center absolute top-0 left-0 w-full h-full saturate-[120%]"
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
        </div>
    </header>
  )
}

export default Header;