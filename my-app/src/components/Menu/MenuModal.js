import * as React from "react";

const MenuModal = ({ open, setOpen }) => {
  return (
    <div>
      {open ? (
        <div className="z-20 opacity-100 fixed inset-0 ease-out duration-300">
          <link href="/dist/output.css" rel="stylesheet"></link>
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-900 opacity-80"
          ></div>
        </div>
      ) : (
        <div className="opacity-0 fixed ease-in duration-300"></div>
      )}
    </div>
  );
};

export default MenuModal;