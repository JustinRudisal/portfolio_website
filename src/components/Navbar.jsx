import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <ScrollLink to="hero" smooth={true} duration={1000} className="hover:text-yellow-400 cursor-pointer">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={1000} className="hover:text-yellow-400 cursor-pointer">
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={1000} className="hover:text-yellow-400 cursor-pointer">
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={1000} className="hover:text-yellow-400 cursor-pointer">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;