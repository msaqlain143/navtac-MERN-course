import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6">
      {/* Logo (Placeholder - replace with your actual logo) */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/50" // Replace with your logo URL
          alt="Logo"
          className="h-10 w-10 mr-4 rounded-full"
        />
      </div>

      {/* Centered Heading */}
      <div className="flex-grow flex justify-center">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold
                      bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text
                      tracking-wide drop-shadow-lg text-center"
        >
          TODO Application
        </h1>
      </div>

      {/* Simple Search Input (Placeholder) */}
      <div className="flex items-center gap-2">
        <input
          type="search"
          placeholder="Search tasks..."
          className="w-48 sm:w-64 md:w-80 h-10 border border-gray-300 rounded-md px-3"
        />
        <button className="bg-gray-200 rounded-md p-2">Search</button>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap");
        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Header;
