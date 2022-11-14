import * as React from "react";
import Layout from '../components/Layout/home';
import { Link } from 'react-router-dom';

// import icons
import { GiSpellBook, GiArchiveResearch } from 'react-icons/gi';
import { WiStars } from "react-icons/wi";


const Index = () => {
  return (                                                                                                                                    
    <Layout>
      <div className="w-full h-full">
    
          <h2 className="pb-8 text-4xl text-indigo-300 text-center font-normal">Make friends with a book!</h2>  
    
            {/* START BOOK NOOK INFO CONTAINER */}
            <div className="max-w-screen-lg w-full mb-8 grid sm:grid-cols-3 mx-auto">
              <div className="flex flex-col justify-center items-center px-8 py-4 text-center border-b sm:border-b-0 sm:border-r border-gray-700">
                {/* GETTING STARTED INFO HERE */}
                <GiSpellBook size={65} style={{ color: '#ffffff' }} className="flex justify-center items-center" />
                <h3 className="font-medium">Welcome</h3>
                <p>
                  Book Nook is an online community for big book worms to discuss books
                  for their little book worms for school and home.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-8 py-4 text-center border-b sm:border-b-0 sm:border-r border-gray-700">
                {/* DISCOVER READS INFO HERE */}
                <GiArchiveResearch size={65} style={{ color: '#ffffff' }} className="flex justify-center items-center" />
                <h3 className="font-medium">Discover Reads</h3>
                <p>
                  Search for new books that meets your child's reading level using our search feature, or find recommendations from others! 
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-8 py-4 text-center">
                {/* MEET FRIENDS INFO HERE */}
                <WiStars size={65} style={{ color: '#ffffff' }} className="flex justify-center items-center" />
                <h3 className="font-medium">Meet Friends</h3>
                <p>
                  Connect with fellow book worms and see what they have been letting their kids read. Join today to find great reads for your child!
                </p>
              </div>
            </div>
            {/* END BOOK NOOK INFO CONTAINER */}
    
          <div className="flex justify-center pb-4">
            
            <Link to='/signup'>
              <button className="px-6 py-2 rounded drop-shadow-md">Get Started</button>
            </Link>

          </div>
    
         
      </div>
    </Layout>
  );
};

export default Index;