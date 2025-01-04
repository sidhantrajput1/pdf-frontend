import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto bg-white text-black mt-4 font-serif">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="logo">
          <h3 className="font-bold tracking-widest text-2xl">
            G<span className="text-red-400">T</span>
            <span className="text-green-700">C</span>
          </h3>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Items for Desktop */}
        <div className="hidden md:flex items">
          <ul className="flex gap-8 font-bold">
            <li className="hover:text-blue-500 tracking-wide">Home</li>
            <li className="hover:text-blue-500 tracking-wide">About</li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg">
            <li className="hover:text-blue-500 tracking-wide">Home</li>
            <li className="hover:text-blue-500 tracking-wide">About</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
