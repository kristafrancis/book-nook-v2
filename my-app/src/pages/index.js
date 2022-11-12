import * as React from "react";
import Layout from '../components/Layout/home';

// import icons
import { GiArchiveResearch } from "@react-icons/all-files/gi/GiArchiveResearch";
import { GiSpellBook } from "@react-icons/all-files/gi/GiSpellBook";
import { WiStars } from "@react-icons/all-files/wi/WiStars";

const IndexPage = () => {
  return (
    <Layout pageTitle="Travel to the stars, read!">
<link href="/dist/output.css" rel="stylesheet"></link>
      <div className="w-full h-full">

        <h2 class="pb-8 text-4xl text-center font-normal">Make friends with a book!</h2>  

        {/* START BOOK NOOK INFO CONTAINER */}
        <div className="max-w-screen-lg w-full mb-8 grid sm:grid-cols-3 mx-auto">
          <div className="flex flex-col justify-center items-center px-8 py-4 text-center border-b sm:border-b-0 sm:border-r border-gray-700">
            {/* GETTING STARTED INFO HERE */}
            <GiSpellBook size={65} style={{ color: '#ffffff' }} className="flex justify-center items-center" />
            <h3 className="font-medium">Welcome</h3>
            <p>
              Book Nook is an online community for big book worms to discuss books
              for their little book worms. Join today to find great reads for your child!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center px-8 py-4 text-center border-b sm:border-b-0 sm:border-r border-gray-700">
            {/* DISCOVER READS INFO HERE */}
            <GiArchiveResearch size={65} style={{ color: '#ffffff' }} className="flex justify-center items-center" />
            <h3 className="font-medium">Discover Reads</h3>
            <p>
              Look up new books that meets your child's reading level using our search feature, or find recommendations from other parents! 
            </p>
          </div>
          <div className="flex flex-col justify-center items-center px-8 py-4 text-center">
            {/* MEET FRIENDS INFO HERE */}
            <WiStars size={65} style={{ color: '#ffffff' }} className="flex justify-center items-center" />
            <h3 className="font-medium">Meet Friends</h3>
            <p>
              Meet fellow book worms and read up on what they are letting their children read
            </p>
          </div>
        </div>
        {/* END BOOK NOOK INFO CONTAINER */}

        <div class="flex justify-center pb-4">
            <a href="/signup">
                <button className="px-6 py-2 rounded-md drop-shadow-lg">
                    Get Started
                </button>
            </a>
        </div>

      </div>

    </Layout>
  );
};

export default IndexPage;