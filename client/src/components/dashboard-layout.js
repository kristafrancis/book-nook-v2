import React from 'react';
import { Link } from 'gatsby';
import bgImg from '../images/bg.png';

const Dashboard = ({ pageTitle, children }) => {
    return (
        <div>
            <title>Book Nook | {pageTitle}</title>
            <header>
                <div
                    className="stars-bg bg-fixed bg-repeat-x bg-top absolute top-0 left-0 w-full h-full z-0"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                </div>
            </header>
            <nav>
                <div className="w-[80%] flex justify-between items-center mx-auto">
                    <h1 className="font-light drop-shadow-lg py-4 text-5xl mt-4 md:text-7xl md:mt-10">
                        <Link to="/dashboard" className="text-[#027bce] hover:text-[#03cea4]">Book<span className="text-[#03cea4]">Nook</span></Link>
                    </h1>
                    <ul className="h-full flex items-center list-none z-[5] text-base">
                        <li className="text-[#027bce] italic mr-4">Travel to the stars, read!</li>
                        <li className="mx-4">Link Here</li>
                        <li className="mx-4">Link Here</li>
                        <li className="ml-4">Link Here</li>
                    </ul>
                </div>
            </nav>
            <main className="w-full md:h-[94vh]">
                {children}
            </main>
            <footer class="z-[5] -mt-[38%] text-center mix-blend-color-dodge md:mix-blend-multiply md:mt-0 md:p-3">
                <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
                    &copy; {new Date().getFullYear()} The Spice Girls, LLC.
                </p>
            </footer>
        </div>
    );
};
export default Dashboard;