"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdMailOutline, MdPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-500 text-white flex justify-between px-8 py-2 text-sm">
        <div className="flex items-center gap-2">
          <MdMailOutline size={16} />
          <a href="mailto:hrd@distil.co.in" className="hover:underline">
            hrd@distil.co.in
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MdPhone size={16} />
            <span>Hotline Number: 011-43504632</span>
          </div>
          <div className="flex gap-4">
            <a href="#" target="_blank" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="#" target="_blank" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a href="#" target="_blank" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Logo & Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Distil Assessment Logo"
              width={60}
              height={60}
              
            />
          </div>

          {/* Navbar Links */}
          <ul className="flex space-x-6 font-semibold text-black">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>

            {/* Dropdown: About Us */}
            <li className="relative group">
              <a href="#" className="hover:text-blue-500 flex items-center">
                About Us
                <svg
                  className="w-3 h-3 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 text-sm text-gray-700 z-20 w-36">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Why Distil
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    What we do
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Our Team
                  </a>
                </li>
              </ul>
            </li>

            {/* Dropdown: Services */}
            <li className="relative group">
              <a href="#" className="hover:text-blue-500 flex items-center">
                Services
                <svg
                  className="w-3 h-3 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 text-sm text-gray-700 z-20 w-36">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    UGC B.Voc
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Flex MOU
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    NAPS
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Staffing
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Distil WVC
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="hover:text-blue-500">
                LMIS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Become A Member
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Skill Partner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Life At Distil
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
