import { useState } from "react";
import { FaUnsplash } from "react-icons/fa";
export default function NavBar({ currentTerm, onChange }) {
  const [navbar, setNavbar] = useState(false);
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
    <nav className="w-full bg-gray-100 py-2">
      <div className="justify-between grow px-4 mx-auto w-full md:items-center md:flex md:px-8">
        <div className="grow">
          <div className="flex items-center flex-row grow justify-between py-3 md:py-5">
            <div className="flex flex-row grow">
              <div>
                <FaUnsplash className="text-4xl" />
              </div>
              <div className="grow">
                <form
                  className="flex grow space-x-1 w-full justify-center px-8"
                  onSubmit={handleSubmit}
                >
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

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
