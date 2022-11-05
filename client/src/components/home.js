import React from 'react';
import { Link } from 'gatsby';

const Home = () => {
    return (
        <div className="container relative top-0 left-[55%] pl-[50px]">
            <div className="wrapper flex flex-col justify-center items-center w-[35%]">
                <h1 className="flex w-full mt-[40%] text-[5.5rem] drop-shadow-lg">
                    Book<span className="text-[#03cea4]">Nook</span>
                </h1>

                <div className="intro-text">

                    <h2 class="text-4xl font-normal pb-2">Make friends with a book!</h2>  
                    <p className="pb-4 text-left">
                        Book Nook is an online community for big book worms to discuss books
                        for their little book worms.
                    </p>

                    <p class="text-sky-800 pb-5 text-center">Join today to find great reads for your
                        child!
                    </p>

                    <div class="flex justify-center pb-4">
                        <Link to="/login">
                            <button class="px-6 py-2 hover:bg-[#027bce] rounded-md bg-[#03cea4]">
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