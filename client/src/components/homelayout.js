import React from 'react';
import HeroImg from '../images/hero.png';

const HomeLayout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>Book Nook | {pageTitle}</title>
            <header>
                <div
                    className="hero bg-fixed bg-cover bg-left absolute top-0 left-0 w-full h-full z-0"
                    style={{ backgroundImage: `url(${HeroImg})` }}
                >
                </div>
            </header>

            <main className="w-full md:h-[94vh]">
                <div className="container flex flex-col justify-center items-center w-full h-full">
                    <div className="intro-text z-[5] bg-[#ffffffb2] rounded-lg w-full px-4 my-[45%] md:w-[600px] md:ml-[58%] md:my-0">
                        <h1 className="font-light drop-shadow-lg pb-8 text-6xl mt-4 md:text-8xl md:mt-10">
                            Book<span className="text-[#03cea4]">Nook</span>
                        </h1>
                        {children}
                    </div>
                </div>
            </main>

            <footer class="z-[5] -mt-[38%] text-center mix-blend-color-dodge md:mix-blend-multiply md:mt-0 md:p-4 md:text-right">
                <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
                    &copy; {new Date().getFullYear()} The Spice Girls, LLC.
                </p>
            </footer>
        </div>
    );
};

export default HomeLayout;