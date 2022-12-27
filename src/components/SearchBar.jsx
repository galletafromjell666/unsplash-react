import React, { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaUnsplash } from "react-icons/fa";

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
      <div className="flex  justify-between">
        <FaUnsplash className="text-[3.1rem] ml-6"/>
        <h1 className="text-xl w-[150px] mt-3 ml-4">Unsplash API</h1>
        <form className="flex space-x-1 w-full justify-center" onSubmit={handleSubmit}>
          <input
            type="text"
            className="block w-3/5 px-4 py-2 text-slate-800 bg-gray-300 border rounded-full focus:border-rose-900/30 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
        <DiGithubBadge className="text-[3.1rem] mr-6"/>
      </div>
    </div>
  );
};

export default SearchBar;
