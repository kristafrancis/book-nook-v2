import React from 'react'

const Footer = () => {
  return (
    <footer class="py-8 text-center">
        <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
        &copy; {new Date().getFullYear()} <a href="https://github.com/kristafrancis/book-nook-v2" target="_blank">The Spice Girls</a>, LLC.
        </p>
    </footer>
  );
};

export default Footer;