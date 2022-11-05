import * as React from "react";

const Footer = () => {
  return (
    <footer class="z-[5] -mt-[38%] text-center mix-blend-color-dodge md:mix-blend-multiply md:mt-0 md:p-4 md:text-right">
      <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
        &copy; {new Date().getFullYear()} The Spice Girls, LLC.
      </p>
    </footer>
  );
};

export default Footer;
