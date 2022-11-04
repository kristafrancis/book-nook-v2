import * as React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-100 py-3 border-t border-gray-100">
      <p class="md:text-base text-sm tracking-wider font-medium text-gray-700">
        &copy; {new Date().getFullYear()} The Spice Girls, LLC.
      </p>
    </footer>
  );
};

export default Footer;
