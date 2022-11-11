import * as React from "react";

const MenuStyled = ({ open }) => (
  <div>
    {open ? (
      <div class="z-50 transition ease-out duration-75 absolute mt-6 w-48 -ml-36 md:-ml-20 shadow-lg">
        <div
          class="pt-6 pb-6 rounded-lg bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="rounded-lg pb-3 pt-3">
          <a
              class="bg-[#090c26ec] px-4 py-2 rounded font-semibold mr-6"
              href="/search"
            >
              Search
            </a>

            <a
              class="bg-[#090c26e2] p-2 rounded-lg   font-semibold mr-6"
              href="/profile"
            >
              Profile
            </a>
            <a
              class="bg-[#090c26e2] px-4 py-2 rounded font-semibold mr-6"
              href="#"
            >
              Logout
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