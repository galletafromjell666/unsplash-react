import React, { useState } from "react";

const SearchBar = ({ currentTerm, onChange }) => {
  const [usrInput, setUsrInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(currentTerm);
    if (usrInput !== "" || usrInput === currentTerm) {
      console.log("submited");
      onChange(usrInput);
    }
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="flex items-center">
        <form className="flex space-x-1" onSubmit={handleSubmit}>
          <input
            type="text"
            className="block w-full px-4 py-2 text-slate-800 bg-gray-300 border rounded-full focus:border-rose-900/30 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
            value={usrInput}
            onChange={(e) => setUsrInput(e.target.value)}
          />
          <button className="px-4 text-white bg-gray-500/50 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                onClick={handleSubmit}
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
