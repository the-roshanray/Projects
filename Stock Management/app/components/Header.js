import React from "react";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex p-4 items-center justify-between">
        <a
          href="#"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-2 text-xl font-bold flex justify-between items-center gap-2">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v7h-2zm4.5 4h2v3h-2zm-9 1h2v4H6.5zM4 8.5h2v2H4zm10.5-1.5h2v3h-2z" />
            </svg>
            Stock Management
          </span>
        </a>
        <nav className="w-full md:w-auto  flex md:items-center text-base justify-center">
          <a
            href="#"
            className="block md:inline-block mr-5 hover:text-gray-200"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block md:inline-block mr-5 hover:text-gray-200"
          >
            Products
          </a>
          <a
            href="#"
            className="block md:inline-block mr-5 hover:text-gray-200"
          >
            Orders
          </a>
          <a
            href="#"
            className="block md:inline-block mr-0 md:mr-5 hover:text-gray-200"
          >
            Reports
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
