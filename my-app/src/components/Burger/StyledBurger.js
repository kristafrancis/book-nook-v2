import React from "react";
import { bool, func } from "prop-types";

const StyledBurger = ({ open, setOpen }) => {
  return (
    <div className="relative z-50 hover:opacity-80">
      {open ? (
        <span className="rounded-md">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="mt-1 p-2 rounded-xl"
            id="close"
            aria-haspopup="true"
            aria-expanded="true"
          >
           Close
          </button>
        </span>
      ) : (
        <span className="rounded-md rounded-xl">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="mt-1 p-2 bg-[#7286ff] rounded-xl"
            id="open"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Menu
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