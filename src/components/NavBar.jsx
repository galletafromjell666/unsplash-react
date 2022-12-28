import { useState,useRef } from "react";
import { FaUnsplash,FaSearch,FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

export default function NavBar({onChange }) {
  const prevSearchTerm = useRef(undefined);
  const [navbar, setNavbar] = useState(false);
  const [usrInput, setUsrInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (usrInput !== "" && prevSearchTerm.current !== usrInput && usrInput.trim().length !== 0) {
      prevSearchTerm.current = usrInput
      setUsrInput("")
      //console.log("submited");
      onChange(usrInput);
    }
  };
  return (
    <nav className="w-full bg-transparent py-2">
      <div className="justify-between grow px-2 mx-auto w-full md:items-center md:flex md:px-8">
        <div className="grow">
          <div className="flex items-center flex-row grow justify-between py-3 md:py-5">
            <div className="flex flex-row grow">
              <div>
                <FaUnsplash className="text-4xl" />
              </div>
              <div className="grow">
                <form
                  className="flex grow space-x-1 w-full justify-center px-2 md:px-8 md:space-x-2"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    className="block w-full px-4 py-2 text-slate-800 bg-gray-300 border rounded-full  focus:border-fuchsia-100 focus:ring-fuchsia-100 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    value={usrInput}
                    onChange={(e) => setUsrInput(e.target.value)}
                  />
                  <button className="px-4 text-white bg-gray-500/50 rounded-full ">
                   <FaSearch/>
                  </button>
                </form>
              </div>
            </div>

            <div className="md:hidden">
              <button
                className=" py-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:p-2"
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
              <li className="text-gray-600 ">
             <div className="flex flex-row space-x-6 grow justify-center">
              <a href="https://github.com/galletafromjell666" target="_blank" rel="noopener noreferrer">
             <DiGithubBadge className="text-[3.1rem] hover:text-stone-400"/>
             </a>
             <a href="https://www.linkedin.com/in/gioaguirre664/" target="_blank" rel="noopener noreferrer"> 
              <FaLinkedin className="text-[3.1rem] hover:text-stone-400"/>
              </a>
             </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
