import React from "react";

// import components
import DashboardLayout from "../components/dashboard-layout";
import DashHeroImg from "../images/dashboard-hero.png";
import DashHeroReadingImg from "../images/dashboard-hero-reading.png";

// import icons
import { GiArchiveResearch } from "@react-icons/all-files/gi/GiArchiveResearch";
import { GiSpellBook } from "@react-icons/all-files/gi/GiSpellBook";
import { WiStars } from "@react-icons/all-files/wi/WiStars";

const Search = () => {
  return (
    <DashboardLayout pageTitle="Search">
      <div 
        className="bg-[#fafbfd] bg-center bg-cover relative w-full h-full z-0"
        style={{ backgroundImage: `url(${DashHeroImg})` }}
      >
        <div className="w-[85%] h-auto mx-auto py-24 flex flex-col justify-center items-center">
          <img src={DashHeroReadingImg} className="w-[300px] pb-8" />

          <h2 className="pb-4 text-4xl font-medium italic drop-shadow-lg">Travel to the stars, read!</h2>
          
          {/* SEARCH INPUT */}
          <div class="w-full drop-shadow-lg">
            <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
              <div class="relative flex h-16 justify-between">
                <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                  <div class="w-full sm:max-w-xs">
                    <label for="search" class="sr-only">
                      Search
                    </label>
                    <div class="relative">
                      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          class="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="search"
                        name="search"
                        class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-teal-400 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 sm:text-2xl"
                        placeholder="Search"
                        type="search"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SEARCH INPUT */}

      <div className="max-w-screen-lg w-full my-8 grid px-4 sm:grid-cols-3 mx-auto">
        <div className="flex flex-col justify-center items-center p-4 text-center border-b sm:border-b-0 sm:border-r border-gray-200">
          <GiArchiveResearch size={65} />
          <h3 className="font-medium">Getting Started</h3>
          <p>Book Nook allows you to search for books that your child may be interested in reading. Any books you discover can be discussed about!</p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 text-center border-b sm:border-b-0 sm:border-r border-gray-200">
          <GiSpellBook size={65} className="flex justify-center items-center" />
          <h3 className="font-medium">Discover Reads</h3>
          <p>Yo listen up here's a story about a little giuy that lives in a blue world. And all day and all night and everything he sees is just blue like him inside and out.</p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 text-center border-gray-200">
          <WiStars size={65} className="flex justify-center items-center" />
          <h3 className="font-medium">Make Friends</h3>
          <p>Blue his house with a blue little window and a blue corvette and everything is blue for him and himself and everybody around cause he ain't got nobody to listen to</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Search;
