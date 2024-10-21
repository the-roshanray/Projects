import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-700 shadow-lg flex justify-between items-center px-6">
      <div className="text-white flex justify-center items-center font-bold text-2xl">
        <img width={"40px"} src="key.png" alt="key" className="p-1" />
        Pass&lt;OP/&gt;
      </div>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center bg-white text-green-700 border border-white rounded-md m-2 p-1 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105">
          <img width={"30px"} src="github.png" alt="GitHub" className="mr-2" />
          <span className="font-semibold">GitHub</span>
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
