import * as React from "react";

const MenuStyled = ({ open }) => (
  <div>
    {open ? (
      <div class="z-50 transition ease-out duration-75 absolute mt-6 w-48 -ml-36 md:-ml-20 shadow-lg">
        <link href="/dist/output.css" rel="stylesheet"></link>
        <div
          class="pt-6 pb-6 rounded-lg bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="rounded-lg pb-3 pt-3">
            <a
              href="/search"
              class="block px-4 py-2 text-lg leading-5 font-semibold hover:bg-teal-50 hover:pl-8 text-indigo-500 hover:text-[#7286ff]"
              role="menuitem"
            >
              Search
            </a>

            <a
              href="/profile"
              class="block px-4 py-2 text-lg leading-5 font-semibold hover:bg-teal-50 hover:pl-8 text-indigo-500 hover:text-[#7286ff]"
              role="menuitem"
            >
              Profile
            </a>

            <a
              href="#"
              class="block px-4 py-2 text-lg leading-5 font-semibold hover:bg-teal-50 hover:pl-8 text-indigo-500  hover:text-[#7286ff]"
              role="menuitem"
            >
              Sign Out
            </a>

         
          </div>
        </div>
      </div>
    ) : (
      <div class=""></div>
    )}
  </div>
);

export default MenuStyled;