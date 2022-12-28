import React, { useState, useEffect } from "react";
import MasonryScroller from "../components/MasonryScroller";
import NavBar from "../components/NavBar";
import { useGetPhotosQuery } from "../features/apiSlice";
import { ImSpinner7 } from "react-icons/im";
import { BiMessageError } from "react-icons/bi";

const UnsplashSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  //used to force a render when data changes
  const [result, setResult] = useState(false);
  function handleChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
    setPage(1);
    setResult(false);
  }
  //RTK Query hook
  const {
    data: responseData,
    isLoading,
    isError,
  } = useGetPhotosQuery({ searchTerm, page }, { skip: !searchTerm });

  useEffect(() => {
    setResult(true);
  }, [responseData]);

  console.log(responseData);
  return (
    <div className="font-inter">
      <NavBar onChange={handleChange} />
      {responseData && (
        <div className="flex flex-row justify-between py-2 px-4 md:py-4 md:px-6">
          <h1 className="text-4xl italic font-bold">{responseData.term}</h1>
          <h2 className="text-2xl font-semibold">
            Photos:{" "}
            {responseData.total > 1000
              ? Math.round(responseData.total / 1000) + "K"
              : responseData.total}
          </h2>
        </div>
      )}
      {isLoading  && (
        <div key={0} className="flex items-center justify-center my-12">
          <ImSpinner7 className="text-8xl animate-spin text-black" />
        </div>
      )}
      {isError && (<div key={0} className="flex space-x-2 md:space-x-4 items-center justify-center my-12">
          <BiMessageError className="text-8xl  text-black" />
          <h1 className="font-xl font-bold md:text-2xl">Something went wrong</h1>
        </div>)}
      {responseData?.total === 0 && <h1>No results :c</h1>}
      {responseData && result && !isError && (
        <MasonryScroller
          responseData={responseData}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default UnsplashSearch;
