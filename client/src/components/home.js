import React from 'react';
import { Link } from 'gatsby';

const Home = () => {
    return (
        <div className="w-full md:h-[94vh]">
            <div className="container flex flex-col justify-center items-center w-full h-full">
                <div className="intro-text z-[5] bg-[#ffffffb2] rounded-lg w-full px-4 my-[45%] md:w-[600px] md:ml-[58%] md:my-0">
                    <h1 className="drop-shadow-lg pb-8 text-6xl mt-4 md:text-8xl md:mt-10">
                        Book<span className="text-[#03cea4]">Nook</span>
                    </h1>

                    <h2 class="text-4xl font-normal pb-2">Make friends with a book!</h2>  
                    <p className="pb-4 text-left">
                        Book Nook is an online community for big book worms to discuss books
                        for their little book worms.
                    </p>

                    <p class="text-sky-800 pb-5 text-center italic">
                        Join today to find great reads for your child!
                    </p>

                    <div class="flex justify-center pb-4">
                        <Link to="/login">
                            <button class="px-6 py-2 rounded-md bg-[#03cea4] hover:bg-[#027bce]">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;