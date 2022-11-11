import React from "react";
import { bool, func } from "prop-types";

const StyledBurger = ({ open, setOpen }) => {
  return (
    <div class="relative z-50 hover:opacity-80">
      {open ? (
        <span class="rounded-md">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            class="mr-4 inline-flex items-center justify-center rounded-md text-white hover:text-gray-200"
            id="close"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <svg
              class="h-8 w-13 transition ease-in-out duration-150"
              viewBox="1 -2 21 20"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                d="M11.5,6.6l9-8.6L22-0.6L13,8l9,8.6L20.5,18l-9-8.6l-9,8.6L1,16.6L10,8L1-0.6L2.5-2L11.5,6.6z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </span>
      ) : (
        <span class="rounded-md ">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            class="mt-1 py-2 "
            id="open"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <svg
              class="block h-14 w-14 "
              viewBox="0 0 100 80"
              fill="currentColor"
              width="60"
              height="40"
            >
              <rect y="17" width="100" height="8"></rect>
              <rect y="47" width="100" height="8"></rect>
            </svg>
          </button>
        </span>
      )}
    </div>
  );
};
StyledBurger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default StyledBurger;