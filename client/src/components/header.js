import React from 'react';
import bgImg from '../images/bg.png';
import WelcomeImg from "../images/welcome-page.png";

const Header = () => {
  return (
    <>
        <div
            className="bg-fixed bg-repeat-x absolute top-0 left-0 w-full h-full z-0"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="container flex flex-col w-[60%] my-[100px] mx-auto z-10">
                <div
                    className="wrapper flex flex-col bg-no-repeat bg-white bg-[-25px_0] bg-[length:110%] w-full border border-[#f3f3f3] rounded-md p-[15px]"
                    style={{ backgroundImage: `url(${WelcomeImg})` }}
                >

                    <h1 className="flex justify-end items-center w-[96%] h-[22rem] text-[5.5rem] font-extralight drop-shadow-[0_8px_8px_rgba(200, 200, 200, 0.5)]">Book<span className="text-[#03cea4]">Nook</span></h1>

                    <h2 class="mt-[35px] px-[50px] text-4xl font-normal pb-2">Make friends with a book!</h2>
                    
                    <p className="px-[50px] pb-4">
                        Book Nook is an online community for big book worms to discuss books
                        for their little book worms.
                    </p>

                    <p class="text-sky-800 pb-5 text-center">Join today to find great reads for your
                        child!
                    </p>

                    <div class="flex justify-center pb-4">
                        <a href="#">
                        <button class="px-6 py-2 hover:bg-[#027bce] rounded-md bg-[#03cea4]">
                            Get Started
                        </button>
                        </a>
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Header;