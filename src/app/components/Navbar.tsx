import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <p className="text-white text-lg font-bold cursor-pointer">SUSTAINABILITY HUB</p>
          </Link>
        </div>
        <div className="flex justify-end">
          <ul className="flex space-x-7">
            <li className="relative">
              <button onClick={toggleDropdown} className="text-white cursor-auto">
                Contact Me
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white py-2 px-4 shadow rounded">
                  <Link href="/contact/email">
                    <p className="text-gray-800 block hover:bg-gray-200 py-1 cursor-pointer">
                      Email
                    </p>
                  </Link>
                  <Link href="/contact/phone">
                    <p className="text-gray-800 block hover:bg-gray-200 py-1 cursor-pointer">
                      Phone
                    </p>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
