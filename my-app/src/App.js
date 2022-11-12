import * as React from "react";
import Layout from './components/Layout/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// // import icons
// import { GiArchiveResearch } from "@react-icons/all-files/gi/GiArchiveResearch";
// import { GiSpellBook } from "@react-icons/all-files/gi/GiSpellBook";
// import { WiStars } from "@react-icons/all-files/wi/WiStars";


function App() {
  return (
    <div>
       <link href="/dist/output.css" rel="stylesheet"></link>
<Layout pageTitle="Travel to the stars, read!">

<div className="w-full h-full">

  <h2 class="pb-8 text-4xl text-center font-normal">Make friends with a book!</h2>  

  {/* START BOOK NOOK INFO CONTAINER */}
  <div className="max-w-screen-lg w-full mb-8 grid sm:grid-cols-3 mx-auto">
    <div className="flex flex-col justify-center items-center px-8 py-4 text-center border-b sm:border-b-0 sm:border-r border-gray-700">
      {/* GETTING STARTED INFO HERE */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

      <h3 className="font-medium pt-5">Welcome</h3>
      <p>
        Book Nook is an online community for big book worms to discuss books
        for their little book worms. Join today to find great reads for your child!
      </p>
    </div>
    <div className="flex flex-col justify-center items-center px-8 py-4 text-center border-b sm:border-b-0 sm:border-r border-gray-700">
      {/* DISCOVER READS INFO HERE */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>

      <h3 className="font-medium pt-5">Discover Reads</h3>
      <p>
        Look up new books that meets your child's reading level using our search feature, or find recommendations from other parents! 
      </p>
    </div>
    <div className="flex flex-col justify-center items-center px-8 py-4 text-center">
      {/* MEET FRIENDS INFO HERE */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
</svg>

      <h3 className="font-medium pt-5">Meet Friends</h3>
      <p>
        Meet fellow book worms and read up on what they are letting their children read, or recommend books to other parents!
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
</div>
  );
}

export default App;
