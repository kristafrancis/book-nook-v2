import React from "react";
import { bool, func } from "prop-types";

const StyledBurger = ({ open, setOpen }) => {
  return (
    <div className="relative z-50 hover:opacity-80">
      {open ? (
        <span>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="px-3 py-1 rounded-md"
            id="close"
            aria-haspopup="true"
            aria-expanded="true"
          >
           Close
          </button>
        </span>
      ) : (
        <span>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="px-3 py-1 bg-[#7286ff] rounded-md"
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