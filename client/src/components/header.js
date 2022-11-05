import React from 'react';
import HeroImg from '../images/hero.png';

const Header = () => {
  return (
    <header>
        <div
            className="hero bg-fixed bg-cover bg-left absolute top-0 left-0 w-full h-full z-0"
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
        </div>
    </header>
  )
}

export default Header;