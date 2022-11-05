import * as React from "react";
import { Link } from 'gatsby';
import HomeLayout from '../components/homelayout';

const IndexPage = () => {
  return (
    <HomeLayout pageTitle="Travel to the stars, read!">
      <h2 class="text-4xl font-normal pb-2">Make friends with a book!</h2>  
        <p className="pb-4 text-left">
          Book Nook is an online community for big book worms to discuss books
          for their little book worms.
        </p>

        <p class="text-sky-800 pb-5 text-center italic">
            Join today to find great reads for your child!
        </p>

        <div class="flex justify-center pb-4">
            <Link to="/signup">
                <button class="px-6 py-2 rounded-md bg-[#03cea4] hover:bg-[#027bce]">
                    Get Started
                </button>
            </Link>
        </div>
    </HomeLayout>
  );
};

export default IndexPage;